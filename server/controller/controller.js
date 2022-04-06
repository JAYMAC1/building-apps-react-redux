const model = require('../models/model')

// POST Create categories http://localhost:8080/api/categories
const createCategories = async (req, res) => {
  const Create = new model.Categories({
    type: 'Investment',
    color: '#FCBE44',
  })

  await Create.save((err) => {
    if (!err) {
      return res.json(Create)
    }
    return res
      .status(400)
      .json({ message: `Error while creating categories ${err}` })
  })
}

// GET Fetch categories http://localhost:8080/api/categories
const getCategories = async (req, res) => {
  let data = await model.Categories.find({})

  const filter = await data.map((category) =>
    Object.assign({}, { type: category.type, color: category.color })
  )
  return res.json(filter)
}

// POST Create transaction http://localhost:8080/api/transaction
const createTransaction = async (req, res) => {
  if (!req.body) {
    return res.status(400).json('Post HTTP Data not provided.')
  }
  const { name, type, amount } = req.body

  const create = await new model.Transaction({
    name,
    type,
    amount,
    date: new Date(),
  })

  create.save((err) => {
    if (!err) {
      return res.json(create)
    }
    return res
      .status(400)
      .json({ message: `Error while creating transaction ${err}` })
  })
}
module.exports = {
  createCategories,
  getCategories,
  createTransaction,
}
