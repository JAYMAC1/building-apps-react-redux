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

// GET Fetch Transaction http://localhost:8080/api/transaction
const getTransaction = async (req, res) => {
  let data = await model.Transaction.find({})
  return res.json(data)
}

// Delete Transaction http://localhost:8080/api/transaction
// const deleteTransaction = async (req, res) => {
// @desc    delete a transaction
// @route   DELETE /api/tickets/:id
// @access  Private
const deleteTransaction = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'Request body not found' })
  }
  await model.Transaction.deleteOne(req.body, (err) => {
    if (!err) {
      return res.json('Record deleted.')
    }
  })
    .clone()
    .catch((err) => {
      res.json(`Could not delete transaction: ${err}`)
    })
}

// GET Fetch Transaction http://localhost:8080/api/labels
const getLabels = (req, res) => {
  model.Transaction.aggregate([
    {
      $lookup: {
        from: 'categories',
        localField: 'type',
        foreignField: 'type',
        as: 'categoriesInfo',
      },
    },
    {
      $unwind: '$categoriesInfo',
    },
  ])
    .then((result) => {
      const data = result.map((item) =>
        Object.assign(
          {},
          {
            id: item._id,
            name: item.name,
            type: item.type,
            amount: item.amount,
            color: item.categoriesInfo.color,
          }
        )
      )
      res.json(data)
    })
    .catch((err) => {
      res.status(400).json(`Lookup collection Error: ${err}`)
    })
}

module.exports = {
  createCategories,
  getCategories,
  createTransaction,
  getTransaction,
  deleteTransaction,
  getLabels,
}
