const { application } = require('express');
const express = require('express');
const app = express();
const port = 8000;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.listen(port,()=>{
    console.log("App Listening on port"+port)
})

app.get("/getStudents",(req,res)=>{
    res.send({
        status:"success",
        message:"Get api called"
    })
})
app.post("/postStudentsData",(req,res)=>{
    console.log("request body ",req.body);
    res.send({
        status:"success",
        message:"Post api called"
    })
})
app.put("/updateStudentsData",(req,res)=>{
    console.log("request body ",req.body);
    res.send({
        status:"success",
        message:"update api called"
    })
})
app.delete("/deleteStudentsData",(req,res)=>{
    console.log("request body ",req.body);
    res.send({
        status:"success",
        message:"delete api called"
    })
})