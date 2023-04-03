const express = require(`express`);
const { PORT, NODE_ENV } = require(`./config/index`);
const { dbConnection } = require(`./config/db`);
const { success, error, info } = require(`consola`);

const app = express();

let StartServer = async () => {
    try {
        dbConnection()

        //listen port
        app.listen(PORT, err => {
            if (err) {
                error(err);
            } else {
                success(`server is running on ${PORT}`.yellow.bold);
            }
        })

    } catch (err) {
        error(err);

    }
}

StartServer();