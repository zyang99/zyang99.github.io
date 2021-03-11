let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function multiply(num1,num2){
    let result = num1 * num2;
    return result;
}

//点击图片切换图片
let myImage = document.querySelector('img');
myImage.onclick = function(){
    //获取img的属性值src
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/joker.png'){
        myImage.setAttribute('src','images/tom.jpg');
    }else{
        myImage.setAttribute('src','images/joker.png');
    }
}

//进入用户名欢迎（输入校准）
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

//跳转猜数字游戏界面
let guessButton = document.querySelector(".guess-number");
guessButton.onclick = function(){
    location.href= "guess-number.html";
}

// let myHtml = document.querySelector('html');
// myHtml.onclick = function(){
//     alert('疼，轻一点！');
// }
// document.querySelector('html').onclick = function(){
//          alert('疼，轻一点！');
// }