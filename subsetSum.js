import { EventEmitter } from 'events'

export class SubsetSum extends EventEmitter {
  #sum = 0
  #set = []

  constructor (sum, set) {
    super()
    this.#sum = sum
    this.#set = set
  }

  start () {
    this.#combine(this.#set, [])
    this.emit('end')
  }

  #combine (set, subset) {
    for (let i = 0; i < set.length; i++) {
      const newSubset = subset.concat(set[i])
      this.#combine(set.slice(i + 1), newSubset)
      this.#processSubset(newSubset)
    }
  }

  #processSubset (subset) {
    const res = subset.reduce((prev, item) => (prev + item), 0)
    if (res === this.#sum) {
      // console.log('match found ' + subset)
      // this.emit('debug', 'match found ' + subset)
      this.emit('match', subset)
    }
  }
}
