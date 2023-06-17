class SortedList {
  constructor() {
    this.items = [];
  }

  get length() {
    return this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
  }

  get(pos) {
    if (pos > this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }

    return this.items.at(-1)
    // return Math.max(...this.items);
  }

  min() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }

     return this.items[0] 
     // return Math.min(...this.items);
  }

  sum() {
    let suma = 0
    this.items.map((num)=>{
      suma += num
    })
    return suma
  }

  avg() {
    if (this.length == 0) {
      throw new Error("EmptySortedList");
    }

    let suma = 0
    this.items.map((num)=>{
      suma += num
    })
    return suma/this.length
  }
}

module.exports = SortedList;
