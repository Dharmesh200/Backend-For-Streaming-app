const { connect } = require('mongoose')
const { LOCAL_MONGODB_URL, NODE_ENV } = require('./index')
const { success, error } = require(`consola`)

exports.dbConnection = async () => {
    // try {
    //     if (NODE_ENV == `development`) {
    //         await connect(LOCAL_MONGODB_URL)
    //         success(`Local Connection established`.blue)
    //     } else {
    //         throw error
    //     }
    // } catch (err) {
    //     error(err)
    // }
    try {
        await connect("mongodb://127.0.0.1:27017/backendTest",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
        console.log("DB connected");
    } catch (error) {
        if (error) throw error
    }

}