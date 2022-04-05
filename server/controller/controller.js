const model = require('../models/model')

// get categories
const createCategories = (req, res) => {
  const Create = new model.Categories({
    type: 'Saving',
    color: '#1F3B5C',
  })

  Create.save((err) => {
    if (!err) {
      return res.json(Create)
    }
    return res
      .status(400)
      .json({ message: `Error while creating categories ${err}` })
  })
}

module.exports = {
  createCategories,
}
