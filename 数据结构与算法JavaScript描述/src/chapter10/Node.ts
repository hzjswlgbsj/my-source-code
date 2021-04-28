export interface INode {
  data: any;
  left: null | INode;
  right: null | INode;
  show: () => void;
}
export default class Node {
  public data: any;
  public left: null | INode;
  public right: null | INode;
  constructor(data: any, left: null | INode, right: null | INode) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  public show() {
    console.log(this.data);
  }
}