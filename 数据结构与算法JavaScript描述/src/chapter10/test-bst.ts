// 测试第九章的集合（set）数据结构
import { BST } from './BST';

console.log('开始测试Set数据结构');
const bst = new BST();

// 开始给set1添加元素
bst.insert(23);
bst.insert(45);
bst.insert(16);
bst.insert(37);
bst.insert(3);
bst.insert(99);
bst.insert(22);

console.log('中序遍历结果为：')
bst.inOrder(bst.root)
console.log('前序遍历结果为：')
bst.preOrder(bst.root)
console.log('后序遍历结果为：')
bst.postOrder(bst.root)