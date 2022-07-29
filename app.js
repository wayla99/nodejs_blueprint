const express = require('express');
const cors = require('cors');
const routes = require('./app/init');
const server = require("./service/grpcServer/init")

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

server.start();
app.use(routes);

const PORT = 8080
app.listen(PORT, () => {
    console.log("Server running at port %d", PORT);
})