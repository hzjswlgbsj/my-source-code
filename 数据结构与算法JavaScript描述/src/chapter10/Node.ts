export interface INode {
  data: any;
  left: any;
  right: any;
  show: () => void;
}
export default class Node {
  public data: any;
  public left: any;
  public right: any;
  constructor(data: any, left: any, right: any) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  public show() {
    console.log(this.data);
  }
}