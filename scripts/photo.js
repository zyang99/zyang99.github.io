/**
 * -----图片库
 */

 const myButton = document.querySelector('button');
 const overlayDiv = document.querySelector('.overlay');
 //点击按钮变暗
 function darkOrLight(){
     if(myButton.getAttribute('class')==='dark'){
         overlayDiv.style.backgroundColor='rgba(0,0,0,0.5)';
         myButton.textContent='变亮';
         myButton.setAttribute('class','light');
     }else if(myButton.getAttribute('class')==='light'){
         overlayDiv.style.backgroundColor='rgba(0,0,0,0)';
         myButton.textContent='变暗';
         myButton.setAttribute('class','dark');
     }
 }
 myButton.addEventListener('click',darkOrLight);