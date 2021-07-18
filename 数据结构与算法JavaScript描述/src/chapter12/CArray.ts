interface ICArray {
  dataStore: any[]; // 
  pos: number; //
  numElements: number; // 
  insert: (v: any) => void;
  toString: () => string;
  clear: () => void;
  setData: () => void;
  swap: (arr: any[], index1: number, index2: number) => void;
}

export class CArray implements ICArray {
  public dataStore: any[] = [];
  public pos: number = 0;
  public numElements: number = 0;

  constructor(numElements: number) {
    this.numElements = numElements;
    for (let i = 0; i < this.numElements; i++) {
      this.dataStore[i] = i;
    }
  }
  
  public setData() {
    for ( let i = 0; i < this.numElements; ++i ) {
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1)); 
    }
  }
  public clear() {
    for ( let i = 0; i < this.dataStore.length; ++i ) {
      this.dataStore[i] = 0;
    }
  }
  public insert(element: any) {
    this.dataStore[this.pos++] = element;
  }
  public toString() {
    let res = '';
    for (let i = 0; i < this.dataStore.length; ++i ) {
      res += this.dataStore[i] + " ";
      if (i > 0 && i % 10 == 0) {
        res += "\n";
      }
    }
    return res; 
  }

  public swap(arr: any[], index1: number, index2: number) {
    const temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp; 
  }

  /**
   * 冒泡排序
   * 1.比较相邻的元素。如果第一个比第二个大，就交换他们两个。
   * 2.对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
   * 3.针对所有的元素重复以上的步骤，除了最后一个。
   * 4.持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
   */
  public bubbleSort() {
    if (this.dataStore && this.dataStore.length > 0) {
      for (let i = 0; i < this.dataStore.length; i++) {
        for (let j = 0; j < this.dataStore.length - i; j++) {
          if (this.dataStore[j] > this.dataStore[j + 1]) {
            this.swap(this.dataStore, j, j + 1)
          }    
        }          
      }
    }
  }
  /**
   * 选择排序
   * 1.首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
   * 2.再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
   * 3.重复第二步，直到所有元素均排序完毕。
   */
  public selectionSort() {
    if (this.dataStore && this.dataStore.length > 0) {
      for (let i = 0; i < this.dataStore.length - 1; i++) {
        let min = i
        for (let j = i + 1; j < this.dataStore.length; j++) {
          if (this.dataStore[j] < this.dataStore[min]) {
            min = j
          }
        }
        this.swap(this.dataStore, i, min)
      }
    }
  }
  /**
   * 插入排序
   * 1.将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
   * 2.从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。
   *   如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。
   */
  public insertionSort() {
    const len = this.dataStore.length
    let preIndex,current
    for (let i = 1; i < len; i++) {
      preIndex = i - 1
      current = this.dataStore[i]
      while (preIndex >= 0 && this.dataStore[preIndex] > current) {
        this.dataStore[preIndex + 1] = this.dataStore[preIndex]
        preIndex--
      }
      this.dataStore[preIndex + 1] = current
    }
  }
}