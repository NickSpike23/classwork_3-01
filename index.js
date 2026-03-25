// Import module express
const express = require('express');
// Create an instance
const app = express();

//Middleware
app.use(express.json());

const users = [];

// Endpoint for GET request
app.get("/hello", (request, response) => {    
    response.send("Hello")
});

app.post("/user", (request,response) => {
    users.push(request.body);
    console.log(users);
    response.send("User added successfully");
});

app.get("/users", (request, response) => {
    response.send(users);
});

app.get("/user/:id", (request, response) => {
    const id = request.params.id;
    const userFound = users.find((user) => user.id == id);
    response.send(userFound);
});

app.put("/user/:id", (request, response) => {
    const id = request.params.id;
    const requestpwd = request.body.pwd;
    const requestusername = request.body.username;
    const userFound = users.find((user) => user.id == id);
    userFound.pwd = requestpwd;
    userFound.username = requestusername;
    response.send("User update successfully");
});

app.delete("/user/:id", (request, response) => {
    const id = request.params.id;
    const userFound = users.find((user) => user.id == id);
    users.splice(users.indexOf(userFound), 1);
    response.send("User delete successfully");
});

// tell the app that listen on port 3000
app.listen(3000, () => {
    console.log("My app is running");
});

app.get
app.post
app.put
app.delete