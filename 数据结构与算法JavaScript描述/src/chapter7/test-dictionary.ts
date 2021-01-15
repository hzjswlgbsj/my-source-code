// 测试第七章的Dictionary数据结构
import { Dictionary } from './Dictionary';

console.log('开始测试Dictionary数据结构');
const dictionary = new Dictionary();

console.log('开始添加元素');
dictionary.add('name', 'sixty');
dictionary.add('age', '18');
dictionary.add('gender', '男');
dictionary.add('city', '南京');

console.log('当前字典:');
dictionary.showAll()

console.log('-----------查找名字-----------');
console.log('名字是：', dictionary.find('name'))

console.log('-----------删除性别-----------');
dictionary.remove('gender')
console.log('删除性别后的字典:');
dictionary.showAll()
