import Node from './Node';
interface IBST {
  root: any;
  insert: (data: any) => void; // 向二叉查找树中插入值
  inOrder: (node: Node) => void; // 中序遍历
  preOrder: (node: Node) => void; // 先序遍历
  postOrder: (node: Node) => void; // 后序遍历
}

// 二叉查找树
export class BST implements IBST{
  public root: any = null;

  public insert(data: any) {
    const node = new Node(data, null, null);
    if (this.root == null) {
      this.root = node;
    } else {
      let current = this.root;
      let parent;
      while (true) {
        parent = current;
        if (data < current.data) {
          current = current.left;
          if (current == null) {
            parent.left = node;
            break;
          }
        } else {
          current = current.right;
          if (current == null) {
            parent.right = node;
            break;
          }
        }
      }
    }
  }
  public inOrder(node: Node) {
    if (!(node === null)) {
      this.inOrder(node.left);       
      node.show();  
      this.inOrder(node.right);    
    } 
  }
  public preOrder(node: Node) {
    if (!(node === null)) {    
      node.show()
      this.preOrder(node.left);       
      this.preOrder(node.right);    
    } 
  }
  public postOrder(node: Node) {
    if (!(node === null)) {    
      this.postOrder(node.left);       
      this.postOrder(node.right);
      node.show()
    } 
  }
}