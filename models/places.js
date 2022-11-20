const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: './images/batman'/350/350},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Damn thats OLD!'],
    max: [new Date() .getFullYear(), 'invalid year']
  },
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
  
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)
