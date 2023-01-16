import { initializeApp } from "firebase/app";
import { onValue, ref, getDatabase } from "firebase/database";

const firebaseConfig= {
    apiKey: 'XUKG1kXZTDVxjwqrrqQif2hydsfxTegcAeN1qmVy',
    databaseURL: 'https://apx-dwf-m6-1c2f1-default-rtdb.firebaseio.com',
    projectId: 'apx-dwf-m6-1c2f1',
    authDomain: 'apx-dwf-m6-1c2f1.firebaseapp.com'
};
const app = initializeApp(firebaseConfig)
const rtdb = getDatabase(app);

export {onValue, ref, rtdb}