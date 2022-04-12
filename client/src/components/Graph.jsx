import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
import Label from './Label'
import { default as api } from '../store/apiSlice'
import { chartData, getTotal } from '../helper/helper'

Chart.register(ArcElement)
const Graph = () => {
  const { data, isFetching, isError, isSuccess } = api.useGetLabelsQuery()

  let totalAmount
  let graphData
  if (isFetching) {
    graphData = <div>Fetching transaction data.....</div>
  } else if (isSuccess) {
    graphData = <Doughnut {...chartData(data)} />
    totalAmount = getTotal(data)
  } else if (isError) {
    graphData = <div>Error getting transaction data....</div>
  }

  return (
    <div className='flex justify-content max-w-xs mx-auto'>
      <div className='item'>
        <div className='chart relative'>
          {graphData}
          <h3 className='mb-4 font-bold title'>
            Total{' '}
            <span className='block text-3xl text-emerald-400'>
              £{totalAmount}
            </span>{' '}
          </h3>
        </div>
        <div className='flex flex-col py-10 gap-4'>
          {/* Label */} <Label />
        </div>
      </div>
    </div>
  )
}

export default Graph
