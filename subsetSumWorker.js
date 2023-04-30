import workerpool from 'workerpool'
import { SubsetSum } from './subsetSum.js'

function subsetSumWorker (sum, set) {
  const subsetSum = new SubsetSum(sum, set)

  subsetSum.on('match', data => {
    workerpool.workerEmit({ event: 'match', data })
  })

  // subsetSum.on('debug', data => {
  //   workerpool.workerEmit({ event: 'debug', data })
  // })

  subsetSum.on('end', data => {
    workerpool.workerEmit({ event: 'end', data })
  })

  subsetSum.start()
}

workerpool.worker({
  subsetSum: subsetSumWorker
})
