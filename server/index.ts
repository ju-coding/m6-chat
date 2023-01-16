import {fs, rtdb} from "./db"
import * as express from "express"
import {json} from "body-parser"
import {v4 as uuidv4} from "uuid"
import * as cors from "cors"

const port = 3000;
const app = express();

app.use(json());
app.use(cors());

// const usersCollection = fs.collection('users');

app.get("/users", function(req, res){
    res.json(["todos los usuarios"])
})

// app.get("/users/:userId", function(req, res){
//     const userId = req.params.userId
//     usersCollection.doc(userId).get().then(userSnap => {
//         res.json(userSnap.data())
//     })
// })

app.post("/chatroom", function (req, res) {
    const id = uuidv4();
    const chatroomRef = rtdb.ref("/chatrooms/" + id);
    chatroomRef.set({
        type: "chatroom"
    }, function() {
        res.json({
            id:id
        });

    })
    
})

// app.post("/users", function (req, res) {
//     const newUserDoc = usersCollection.doc()
//     newUserDoc.create(req.body)
//     .then(() => {
//         res.json({id: newUserDoc.id})
//     })
// })

// app.patch("/users/:userId", function (req, res) {
//     const userId = req.params.userId
//     const updateObject = req.body
//     updateObject.updatedAt = new Date() 
//     usersCollection.doc(userId).update(updateObject).then(() => {
//         res.status(200)
//     })
// })

app.delete("/users/:id", function (req, res) {
    res.status(204)
})

app.listen(port, () => {
    console.log("Listening port", port);
    
})
