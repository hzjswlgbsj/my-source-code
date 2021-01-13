import Node, { INode } from './Node';
export interface ILinkedList {
  head: INode;
  find: (element: any) => any; // 根据element值查找对应的Node并返回
  insert: (newElement: any, item: any) => void; // 根据item，在item后面插入一个Node
  display:() => void; // 显示队列里所有元素
  // remove: (element: any) => any; // 删除给定element的节点
}

export default class LinkedList implements ILinkedList {
  public head: INode;

  constructor() {
    this.head = new Node('head');
    console.log('11111111', this.head)
  }

  public find(element: any) {
    let curNode = this.head;
    console.log('222222', curNode, curNode.element)
    while (curNode.element !== element) {
      curNode = curNode.next;
    }

    return curNode;
  }

  public insert(newElement: any, item: any) {
    let newNode = new Node(newElement);
    let curNode = this.find(item);
    newNode.next = curNode.next;
    curNode.next = newNode;
  }

  public display() {
    let curNode = this.head;
    while (curNode.next !== null) {
      console.log(curNode.next.element)
      curNode = curNode.next;
    }
  }
}