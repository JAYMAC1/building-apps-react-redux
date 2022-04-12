import _ from 'lodash'

export const getSum = (transaction, type) => {
  const sum = _(transaction)
    .groupBy('type')
    .map((obj, key) => {
      if (!type) {
        return _.sumBy(obj, 'amount')
      } else {
        return {
          type: key,
          color: obj[0].color,
          total: _.sumBy(obj, 'amount'),
        }
      }
    })
    .value()
  return sum
}

export const getLabels = (transaction) => {
  const amountSum = getSum(transaction, 'type')
  const totalAmount = _.sum(getSum(transaction))
  const percent = _(amountSum)
    .map((obj) => _.assign(obj, { percent: (100 * obj.total) / totalAmount }))
    .value()

  return percent
}
