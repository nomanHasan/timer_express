var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var MessageSchema = new mongoose.Schema({
    author: String,
    remote_address: String,
    content: String,
    message: String,
    date: Date,
})

MessageSchema.plugin(mongoosePaginate)
const Message = mongoose.model('Message', MessageSchema)

module.exports = Message;