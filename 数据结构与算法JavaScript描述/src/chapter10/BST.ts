import Node from './Node';
interface IBST {
  root: any;
  insert: (data: any) => void; // 向二叉查找树中插入值
  // order: () => void; // 排序
}

// 二叉查找树
export class BST implements IBST{
  public root: any = null;

  public insert(data: any) {
    var node = new Node(data, null, null);
    if (this.root == null) {
      this.root = node;
    } else {
      var current = this.root;
      var parent;
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
}