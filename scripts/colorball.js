// 设置画布
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

const countP = document.querySelector('.score');

// 生成随机数的函数
function random(min,max) {
  const num = Math.floor(Math.random() * (max - min)) + min;
  return num;
}
//生成随机的颜色
function randomColor(){
    const rgb = 'rgb('+random(0,255)+','+random(0,255)+','+random(0,255)+')';
    return rgb;
}

/**
 *======================改造Ball->Shape():==============================
 */
 function Shape(x,y,velX,velY,exists){
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}//=====================================================================



/**
 * ===========================构造小球模型：构造函数中写属性，原型上写方法===============================
 * 
 */
function Ball(x,y,velX,velY,exists,color,size){
    // this.x = x;
    // this.y = y;  //小球最开始在屏幕上的坐标
    // this.velX = velX;
    // this.velY = velY;   //小球在水平和竖直上的速度
    Shape.call(this,x,y,velX,velY,exists);
    this.color = color;  //小球自己的颜色
    this.size = size;    //每个小球的大小
}
Ball.prototype = Object.create(Shape.prototype)
Ball.prototype.constructor = Ball;
//绘画小球（在固定位置，不会动）
Ball.prototype.draw = function(){
    ctx.beginPath();   //声明要开始在画布上画图了
    ctx.fillStyle = this.color;   //定义要画这个图的颜色
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI); //arc画圆弧：x，y是中心坐标，size半径，最后是0-2PT就是360°
    ctx.fill();  //声明结束了绘画，并且以颜色填充
}
//更新小球数据
Ball.prototype.update = function(){
    //分别检查小球是否触到边缘
    if((this.x+this.size)>=width){
        this.velX = -(this.velX);
    }
    if((this.x-this.size)<=0){
        this.velX = -(this.velX);
    }
    if((this.y+this.size)>=height){
        this.velY = -(this.velY);
    }
    if((this.y-this.size)<=0){
        this.velY = -(this.velY);
    }
    //实现小球的移动
    this.x += this.velX;
    this.y += this.velY;
}
//小球碰撞改变颜色
Ball.prototype.punChangeColor = function(){
    for (let j = 0;j<balls.length;j++){  //检查当前小球是否和其他小球碰撞。 balls是在后面设置的存储小球的数组 函数外创建，全局使用
        if(this != balls[j]){  
            const dx = this.x-balls[j].x;
            const dy = this.y-balls[j].y;
            const distance = Math.sqrt(dx*dx+dy*dy);        //计算两个球圆心的距离
            if(distance < this.size+balls[j].size){         //如果这个距离小于等于两个球的半径之和就相撞了
                balls[j].color = this.color = randomColor();   //两个相撞的球变成了相同的颜色
            }
        }
    }
}//=========================================================================================




/**
 * =============================定义恶魔圈=================================================
 */
function EvilCircle(x,y,exists,size){
    Shape.call(this,x,y,20,20,exists);
    this.color = 'white';
    this.size = size;
}
EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;
//同样，恶魔全也有类似于自己的方法
//绘画
EvilCircle.prototype.draw = function(){
    ctx.beginPath();   
    ctx.strokeStyle = this.color;   //定义要画这个图的颜色
    ctx.lineWidth = 5;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI); //arc画圆弧：x，y是中心坐标，size半径，最后是0-2PT就是360°
    ctx.stroke();  
}
//检测恶魔圈位置
EvilCircle.prototype.checkBounds = function(){
    if((this.x+this.size)>=width){
        this.x -= this.size;
    }
    if((this.x-this.size)<=0){
        this.x += this.size;
    }
    if((this.y+this.size)>=height){
        this.y -= this.size;
    }
    if((this.y-this.size)<=0){
        this.y += this.size;
    }
}
EvilCircle.prototype.setControlByKey = function(){
    window.onkeydown = e => {
        switch(e.key) {
            case 'a':   //左
                this.x -= this.velX;
                break;
            case 'd':   //右
                this.x += this.velX;
                break;
            case 'w':   //上
                this.y -= this.velY;
                break;
            case 's':   //下
                this.y += this.velY;
                break;
            case 'q':   //左上
                this.y -= this.velY;
                this.x -=this.velX;
                break;
            case 'e':   //右上
                this.y -= this.velY;
                this.x +=this.velX;
                break;
            case 'z':   //左下
                this.y += this.velY;
                this.x -=this.velX;
                break;
            case 'c':   //右下
                this.y += this.velY;
                this.x +=this.velX;
                break;
        }
      };
}
//检测恶魔圈是否碰撞到了小球
EvilCircle.prototype.punChangeExists = function(){
    for (let j = 0;j<balls.length;j++){  //检查当前小球是否和其他小球碰撞。 balls是在后面设置的存储小球的数组 函数外创建，全局使用
        if(balls[j].exists){  
            const dx = this.x-balls[j].x;
            const dy = this.y-balls[j].y;
            const distance = Math.sqrt(dx*dx+dy*dy);        //计算两个球圆心的距离
            if(distance < this.size+balls[j].size){         //如果这个距离小于等于两个球的半径之和就相撞了
                count++;
                balls[j].exists = false;   //两个相撞的球变成了相同的颜色
            }
        }
    }
}//====================================================================================

//存储画布上所有小球
let balls = [];
while(balls.length<100){
    let size = random(10,20);
    //构造函数调用的时候需要和构造器参数位置一致
    let ball = new Ball(
        random(0+size,width-size),
        random(0+size,height-size),
        random(-7,7),
        random(-7,7),
        true,
        randomColor(),
        size
    );
    balls.push(ball);
}

//生成一个随机的恶魔圈
let evilCircle = new EvilCircle(random(0,width),random(0,height),true,30,);
evilCircle.setControlByKey();
//记录吃掉的球个数
let count = 0;

//让球动起来---运动循环，每一帧自动更新试图
function ballGo(){
    ctx.fillStyle = 'rgba(0,0,0,0.25)';    //设置画布颜色
    ctx.fillRect(0,0,width,height);       //画出一个填充满整个画布的矩形，用来在下一个试图画出来时候遮挡之前的试图
    for(let i=0;i<balls.length;i++){
        if(balls[i].exists){
            balls[i].draw();
            balls[i].update();
            balls[i].punChangeColor();
        }
    }
    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.punChangeExists();
    countP.textContent = "吃掉了 "+count+" 个球";
    requestAnimationFrame(ballGo);
}
ballGo();