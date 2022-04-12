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

export const chartData = (transaction) => {
  const bgColor = _.uniq(_.map(transaction, (a) => a.color))
  const dataValue = getSum(transaction)

  const config = {
    data: {
      datasets: [
        {
          data: dataValue,
          backgroundColor: bgColor,
          hoverOffset: 4,
          borderRadius: 5,
          spacing: 5,
        },
      ],
    },
    options: {
      cutout: 115,
    },
  }

  return config
}

export const getTotal = (transaction) => {
  const totalAmount = _.sum(getSum(transaction))
  return totalAmount
}
