/**
 * -----图片库
 */

const displayedImg =document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

 const myButton = document.querySelector('button');
 const overlayDiv = document.querySelector('.overlay');

for(let i=1; i<=5; i++){
    const newImg = document.createElement('img');
    newImg.setAttribute('src','../images/'+i+'.jpg');
    thumbBar.appendChild(newImg);
    newImg.onclick = function(){
        displayedImg.setAttribute('src',this.getAttribute('src'));
    }
    /**这样也可以
    newImg.onclick = function(e){
        displayedImg.src = e.target.src;
    } 

     */
}

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