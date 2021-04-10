import Node from './Node';
interface IBST {
  root: any;
  insert: (data: any) => void; // 向二叉查找树中插入值
  inOrder: (node: Node, cb?: (node: Node) => void) => void; // 中序遍历
  preOrder: (node: Node, cb?: (node: Node) => void) => void; // 先序遍历
  postOrder: (node: Node, cb?: (node: Node) => void) => void; // 后序遍历
  showTree: () => void;
  getMin: () => any;
  getMax: () => any;
  find: (value: any) => Node | null;
}

// 二叉查找树
export class BST implements IBST{
  public root: any = null;

  public showTree() {
    console.log('当前树结构', this.root)
  }
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
  public inOrder(node: Node, cb?: (node: Node) => void) {
    if (!(node === null)) {
      this.inOrder(node.left, cb);       
      // node.show();
      if (cb && typeof cb === 'function') {
        cb(node);
      }
      this.inOrder(node.right, cb);    
    } 
  }
  public preOrder(node: Node, cb?: (node: Node) => void) {
    if (!(node === null)) {    
      // node.show()
      if (cb && typeof cb === 'function') {
        cb(node);
      }
      this.preOrder(node.left, cb);       
      this.preOrder(node.right, cb);    
    } 
  }
  public postOrder(node: Node, cb?: (node: Node) => void) {
    if (!(node === null)) {    
      this.postOrder(node.left, cb);       
      this.postOrder(node.right, cb);
      // node.show()
      if (cb && typeof cb === 'function') {
        cb(node);
      }
    } 
  }

  public getMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left
    }

    return current.data;
  }
  public getMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right
    }

    return current.data;
  }

  // 使用已经实现的 中序、先序、后序遍历会多执行遍历次数，
  // 无论什么时候找到对应节点都会将整棵树遍历一遍
  // public find(data: any) {
  //   let findNode = null;
  //   this.inOrder(this.root, (node: Node) => {
  //     console.log(11111111)
  //     if (data === node.data) {
  //       findNode = node
  //     }
  //   })

  //   return findNode;
  // }

  // 这种方式可自己控制跳出遍历的时机
  public find(data: any) {
    var current = this.root;
    while (current != null) {
      if (current.data == data) {
        return current;         
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null; 
  }
}