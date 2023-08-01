// Your code here

class Polygon {
    constructor(arr) {
        this.arr = arr
    }

    get countSides() {
        return this.arr.length
    }

    get perimeter() {
        return this.arr.reduce((acc, val) => acc + val, 0)
    }
}

class Triangle extends Polygon {
    get isValid() {
        for(let i = 0; i < this.arr.length; i++){           
            if(this.arr[i] > sumArray(this.arr) - this.arr[i]) {
                return false
            }            
        }
        return true
    }
}

function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0)
}

class Square extends Polygon {
    get isValid() {
        for(let side of this.arr) {
            if(side != this.arr[0]) {
                return false
            }
        }
        return true
    }
    get area() {
        return this.arr[0] ** 2
    }
}