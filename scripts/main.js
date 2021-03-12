let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// function multiply(num1,num2){
//     let result = num1 * num2;
//     return result;
// }

/**
 * -----------点击图片切换图片
 */
let myImage = document.querySelector('img');
myImage.onclick = function(){
    //获取img的属性值src
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/joker.png'){
        myImage.setAttribute('src','images/Tom.jpg');
    }else{
        myImage.setAttribute('src','images/joker.png');
    }
}

/**
 * ------进入用户名欢迎（输入校准）
 */
let myButton = document.querySelector('button');
function setUsername(){
    let myName = prompt('输入名字');
    if(myName===null || !myName){
        setUsername();
    }else{
        localStorage.setItem('name',myName);
        myHeading.textContent = myName + '重头再来';    
    }
}
if(!localStorage.getItem('name')){
    setUsername();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + '重头再来';
}
myButton.onclick = function(){
    setUsername();
}

/**
 * -------跳转猜数字游戏界面
 */
let guessButton = document.querySelector(".guess-number");
//直接用匿名函数
// guessButton.onclick = function(){
//     location.href= "guess-number.html";
// }
//还没有点击就会跳转   函数名字后面的()是函数调用运算符
//guessButton.onclick = jump();
//只有点击按钮才会跳转
//guessButton.onclick = jump;
function jump(){
    location.href= "guess-number.html";
}
//另外一种方式
guessButton.addEventListener('click',jump);
//#########所以没有参数的函数调用上面都可以选择，但是有参数调用的函数使用匿名函数的方式来进行调用