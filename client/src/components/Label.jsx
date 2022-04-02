import React from 'react'

const obj = [
  {
    id: 1,
    type: 'Savings',
    color: '#f9c74f',
    percent: 45,
  },
  {
    id: 2,
    type: 'Investments',
    color: '#f9c74f',
    percent: 20,
  },
  {
    id: 3,
    type: 'Expense',
    color: '#f9c74f',
    percent: 10,
  },
]

const Label = () => {
  return (
    <>
      {obj.map((label) => (
        <LabelComponent key={label.id} label={label} />
      ))}
    </>
  )
}

const LabelComponent = ({ label }) => {
  if (!label) return <></>
  return (
    <div className='labels flex justify-between'>
      <div className='flex gap-2'>
        <div
          className='w-2 h-2 rounded py-3'
          style={{ background: label.color }}></div>
        <h3 className='text-md'>{label.type}</h3>
      </div>
      <h3 className='font-bold'>{label.percent}%</h3>
    </div>
  )
}
export default Label
