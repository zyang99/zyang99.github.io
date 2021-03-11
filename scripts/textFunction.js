/**
 * ----在names数组中随机选择一个名字显示到html中
 */
//let myPara = document.querySelector('.testFunction');
let names = ['Chris', 'Li Kang', 'Anne', 'Francesca', 'Mustafa', 'Tina', 'Bert', 'Jada']
let myPara = document.createElement('p');
let myHtml = document.querySelector('html');
function createRandomNum(){
    return Math.floor(Math.random()*8);
}
function chooseName(){
    myPara.textContent = names[createRandomNum()];
}
chooseName();
myHtml.appendChild(myPara);
