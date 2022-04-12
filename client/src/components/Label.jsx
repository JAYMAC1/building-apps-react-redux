import React from 'react'
import { default as api } from '../store/apiSlice'
import { getLabels } from '../helper/helper'

const Label = () => {
  const { data, isFetching, isError, isSuccess } = api.useGetLabelsQuery()

  let Transactions
  if (isFetching) {
    Transactions = <div>Fetching transaction data.....</div>
  } else if (isSuccess) {
    Transactions = getLabels(data, 'type').map((label, i) => (
      <LabelComponent key={i} label={label} />
    ))
    console.log()
  } else if (isError) {
    Transactions = <div>Error getting transaction data....</div>
  }

  return <>{Transactions}</>
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
      <h3 className='font-bold'>{Math.round(label.percent)}%</h3>
    </div>
  )
}
export default Label
