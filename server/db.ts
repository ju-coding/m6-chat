import * as admin from "firebase-admin";

import * as serviceAccount from "../key.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any),
    databaseURL: "https://apx-dwf-m6-1c2f1-default-rtdb.firebaseio.com"
});

const fs = admin.firestore();
const rtdb = admin.database();

export {fs, rtdb}