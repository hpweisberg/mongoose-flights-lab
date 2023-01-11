import mongoose from "mongoose";

const Schema = mongoose.Schema



const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ['American', 'Southwest', 'United', 'JetBlue']
  },
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'JFK'],
    default: 'DEN',
  },
  flightNo: {
    type: Number,
    min: 10,
    max: 9999,
  },
  departs: {
    type: Date,
    default: function(){
      const date = new Date()
      const oneYearLater = date.getFullYear() + 1
      date.setFullYear(oneYearLater)
      return date
    }
  }
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}