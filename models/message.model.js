var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var MessageSchema = new mongoose.Schema({
    remote_address: String,
    message: String,
    date: Date,
})

MessageSchema.plugin(mongoosePaginate)
const Message = mongoose.model('Message', MessageSchema)

module.exports = Message;