import React from 'react'
import { default as api } from '../store/apiSlice'
import 'boxicons'

const List = () => {
  const { data, isFetching, isError, isSuccess } = api.useGetLabelsQuery()
  const [deleteTransaction] = api.useDeleteTransactionMutation()
  const handleClick = (e) => {
    e.preventDefault()
    if (!e.target.dataset.id) {
      return 0
    } else {
      deleteTransaction({ _id: e.target.dataset.id })
    }
  }

  let Transactions
  if (isFetching) {
    Transactions = <div>Fetching transaction data.....</div>
  } else if (isSuccess) {
    Transactions = data.map((label, i) => (
      <Transaction handler={handleClick} key={i} category={label} />
    ))
  } else if (isError) {
    Transactions = <div>Error getting transaction data....</div>
  }

  return (
    <div className='flex flex-col py-6 gap-3'>
      <h1 className='py-4 font-bold text-xl'>History</h1>
      {Transactions}
    </div>
  )
}

const Transaction = ({ category, handler }) => {
  if (!category) return null
  return (
    <div
      className='item flex justify-center bg-gray-50 py-2 rounded-r'
      style={{ borderRight: `8px solid ${category.color}` }}>
      <button className='px-3' onClick={handler}>
        <box-icon
          data-id={category.id ?? ''}
          color={category.color}
          name='trash'></box-icon>
      </button>
      <span className='block w-full'>{category.name}</span>
    </div>
  )
}

export default List
