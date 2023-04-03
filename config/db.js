const { connect } = require('mongoose')
const { LOCAL_MONGODB_URL, NODE_ENV } = require('./index')
const { success, error } = require(`consola`)

exports.dbConnection = async () => {
    try {
        if (NODE_ENV == `development`) {
            await connect(LOCAL_MONGODB_URL)
            success(`Local Connection established`.blue)
        } else {
            throw error
        }
    } catch (err) {
        error(err)
    }
}