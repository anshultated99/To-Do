import * as functions from 'firebase-functions';
import * as express from 'express';
import * as bodyParser from 'body-parser';

import * as admin from 'firebase-admin';
import * as cors from 'cors';

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
const app = express();
const main = express();

app.use(cors({origin: true}))
main.use('/api',app);
main.use(bodyParser.json());
main.use(cors({origin:true}));

// READ TASK FROM DATABASE
app.get("/get-tasks",(request,response) =>{
    let data: any[] = [];
    db.collection("tasks")
    .orderBy("id","desc")
    .get()
    .then(snapshot => {
        if(snapshot.empty){
            response.json("NULL");
        }
        snapshot.forEach(task => data.push(task.data()));
        response.send(data);
    })
    .catch(err =>{
        response.json(`Error ${err}`);
    });
});

// ADD TASK TO DATABASE
app.post("/add-task", (request,response) =>{
    const task_title = request.body["title"];
    const id = Date.now().toString();
    let taskRef = db.collection("tasks").doc(id);

    taskRef
    .set({
        title: task_title,
        id: id,
        isComplete: false
    })
    .then(res =>{
        response.json("SUCCESS");
    })
    .catch(err => {
        response.json(`Error uploading task ${err}`);
    });
});

// UPDATE A PARTICULAR TASK
app.post("/update-task/:id", (request,response) =>{
    const id = request.params.id;
    const value = request.body["status"];
    let taskRef = db.collection("tasks").doc(id);

    taskRef
    .update({
        isComplete: value
    })
    .then(res =>{
        response.json(`Task Updated Successfully with id ${id}`);
    })
    .catch(err =>{
        response.json(`Errir updating task! ${err}`);
    });
});

// DELETE A PARTICULAR TASK
app.get("/remove-task/:id",(request,response) =>{
    const id= request.params.id;
    let docRef = db.collection("tasks").doc(id);

    docRef
    .delete()
    .then(res =>{
        response.json(`Task Deleted Successfully`);
    })
    .catch(err=>{
        response.json("Error Deleting Task");
    })
})
export const serverlessApi = functions.https.onRequest(main);
