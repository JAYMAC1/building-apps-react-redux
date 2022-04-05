const mongoose = require('mongoose')
const Schema = mongoose.Schema

// categories
const categories_model = new Schema({
  type: {
    type: String,
    default: 'Investment',
  },
  color: {
    type: String,
    default: '#FCBE44',
  },
})

// transactions
const transaction_model = new Schema({
  name: {
    type: String,
    default: 'Anonymous',
  },
  type: {
    type: String,
    default: 'Investment',
  },
  amount: {
    type: Number,
  },
  date: {
    date: Date,
    default: Date.now,
  },
})

const Categories = mongoose.model('categories', categories_model)
const Transactions = mongoose.model('transactions', transaction_model)