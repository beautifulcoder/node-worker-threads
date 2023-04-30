import { createServer } from 'http'
// import { SubsetSum } from './subsetSum.js'
import { SubsetSum } from './subsetSumPool.js'

createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost')

  if (url.pathname !== '/subsetSum') {
    res.writeHead(200)
    return res.end('I\'m still here!\n')
  }

  const sum = 0
  const data = JSON.parse(url.searchParams.get('data'))

  res.writeHead(200)

  const subsetSum = new SubsetSum(sum, data)

  subsetSum.on('match', match => {
    res.write(`Match: ${JSON.stringify(match)}\n`)
  })
  // subsetSum.on('debug', message => console.log(message))
  subsetSum.on('end', () => res.end())
  subsetSum.start()?.catch(err => console.error(err))
}).listen(8080, () => console.log('Server ready on port 8080'))
