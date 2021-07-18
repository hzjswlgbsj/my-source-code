import { CArray } from './CArray';

const numElements = 10
const myNums = new CArray(numElements)
myNums.setData()
console.log(myNums.toString())

// 测试排序
// myNums.bubbleSort() // 冒泡
// myNums.selectionSort() // 选择
myNums.insertionSort() // 选择
console.log(myNums.toString())