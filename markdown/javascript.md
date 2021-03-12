#### HTML 超文本标记语言 HyperText Markup Language
#### URL 统一资源定位符 Uniform Resource Locator
## 在JavaScript中一切皆对象

#### 关于字符串几个有用的函数：  A是一个字符串   
A.length  返回字符串的长度  
A.indexOf('a')  在A中是否a字符串 存在返回首次出现的位置，不存在返回-1   
A.slice(0,3)  截取字符串从0到3位置的字符串。A.slice(2) 截取从2到末尾    
A.toUpperCase() 全部转换为大写字母  
A.toLowerCase()  全部转换为小写字母 
A.replace('a','b')  替换a为b    


#### 关于数组的几个有用的函数：      B是一个数组         
B.length  返回数组的长度    
A.split(',') 将字符串按照，分隔符分割转换成数组     
B.join(',') 将数组B转换成字符串并且以，分隔符连接       
B.toString() 将数组B转换成字符串        
B.push('a') 在数组B末尾添加'a',成功返回新数组长度   
B.pop() 删除数组末尾的元素，并返回删除的元素      
B.unshift('a') 在数组B开头添加'a'，成功返回新数组长度       
B.shift() 删除数组开头的元素，并返回删除的元素



### 对象    
点表示法:点表示法只能获得字面量的成员名字   
括号表示法:除此之外还能获得变量的成员名字（所以对象又叫做关联数组。对象设置了字符串到值的映射；数组是数字到值的映射）
##### this关键词    
关键字"this"指向了当前代码运行时的对象( 原文：the current object the code is being written inside )     
在字面量的对象里this似乎不是很有用，但是当用构造器创建对象的时候，this就相当有用。this指向代码运行时候的当前对象。      
### 一种常见的对象定义模式 （在构造器中定义属性，在prototype上定义方法） js中继承通过原型链来继承
// 构造器及其属性定义

function Test(a,b,c,d) {
  // 属性定义
};

// 定义第一个方法

Test.prototype.x = function () { ... }

// 定义第二个方法

Test.prototype.y = function () { ... }

// 等等……