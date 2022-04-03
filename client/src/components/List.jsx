import React from 'react'
import 'boxicons'

const obj = [
  {
    id: 1,
    type: 'Savings',
    color: 'rgb(255, 99, 132)',
    percent: 45,
  },
  {
    id: 2,
    type: 'Investments',
    color: 'rgb(54, 162, 235',
    percent: 20,
  },
  {
    id: 3,
    type: 'Expense',
    color: 'rgb(255, 205, 86',
    percent: 10,
  },
]

const List = () => {
  return (
    <div className='flex flex-col py-6 gap-3'>
      <h1 className='py-4 font-bold text-xl'>History</h1>
      {obj.map((item) => (
        <Transaction key={item.id} category={item} />
      ))}
    </div>
  )
}

const Transaction = ({ category }) => {
  if (!category) return null
  return (
    <div
      className='item flex justify-center bg-gray-50 py-2 rounded-r'
      style={{ borderRight: `8px solid ${category.color}` }}>
      <button className='px-3'>
        <box-icon color={category.color} name='trash'></box-icon>
      </button>
      <span className='block w-full'>{category.type}</span>
    </div>
  )
}

export default List
