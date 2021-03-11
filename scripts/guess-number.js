let randomNumber = Math.floor(Math.random()*100)+1;

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

let guessCount = 1;
let resetButton;

//监听
guessSubmit.addEventListener('click',checkGuess);

//检查用户猜测是否成功
function checkGuess(){
    let userGuess = Number(guessField.value);
    console.log(guessCount);
    if(guessCount === 1){
        guesses.textContent = '上次猜的数字是：';
    }
    guesses.textContent += userGuess + ' ';

    if(userGuess === randomNumber){
        //猜对
        lastResult.textContent = '猜对了！';
        
        lowOrHi.textContent = '';
        setGameOver();
    }else if(guessCount === 10){
        //已经10次了。  也就是每
        lastResult.textContent = '10次用完了，结束了！';
        lowOrHi.textContent = '';
        setGameOver();
    }else{
        //没有超过次数但是猜错了            
        lastResult.textContent = "错了";
        
        if(userGuess < randomNumber){
            lowOrHi.textContent = '猜低了';
        }else if(userGuess > randomNumber){
            lowOrHi.textContent = '猜高了';
        }
    }
    guessCount++;
    guessField.value = "";
    guessField.focus();
}
//设置游戏结束
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = '新的游戏';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
}
//重置游戏
function resetGame(){
    guessCount = 1;
    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0; i< resetParas.length; i++){
        resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    randomNumber = Math.floor(Math.random()*100)+1;
}

