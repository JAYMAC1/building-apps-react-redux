import React, { useState } from 'react'

const NewExpenseForm = () => {
  const [title, setTitle] = useState('')
  const [label, setLabel] = useState('')
  const [amount, setAmount] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(title, label, amount)
    resetForm()
  }
  const resetForm = () => {
    setAmount('')
    setLabel('Investment')
    setTitle('')
  }

  return (
    <div className='form max-w-sm mx-auto w-96'>
      <h1 className='font-bold pb-4 text-xl'>Transaction</h1>
      <form onSubmit={handleSubmit} id='form'>
        <div className='grid gap-4'>
          <div className='input-group'>
            <input
              type='text'
              placeholder='Salary, Rent, Food, Drink, Utilities'
              className='form-input'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <select
            className='form-input'
            onChange={(e) => setLabel(e.target.value)}
            value={label}>
            <option value='Investment' defaultValue>
              Investment
            </option>
            <option value='Expense'>Expense</option>
            <option value='Saving'>Saving</option>
          </select>
          <div className='input-group'>
            <input
              type='text'
              placeholder='Amount'
              className='form-input'
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
            />
          </div>
          <div className='submit-btn'>
            <button className='border py-2 text-white bg-indigo-500 w-full'>
              Make Transaction
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default NewExpenseForm
