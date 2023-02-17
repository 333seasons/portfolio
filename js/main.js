// 브라우저 버전 정보 등
const ver = navigator.userAgent;
console.log(ver);
// 접속 브라우저에 대한 정보가 뜬다. 크롬.

// 정규 표현식으로 특정  단어를 검색(브라우저 특징)
const isIE = /trident/i.test(ver);
console.log(isIE);
// /i.test(ver); 대소문자 구분없이 trident라는 단어가 들어갔는지 확인.

// 참이면 경고창 출력
if(isIE) {
  alert('익스플로러 브라우저로 접속하셨습니다. 이 웹페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해 주세요.')
};



$(window).load(function(){
  let winWidth = $(window).width();
  let winHeight = $(window).height();
  $('header').height(winHeight);
  $('header').width(winWidth);
});
$(window).resize(function(){
  let winWidth = $(window).width();
  let winHeight = $(window).height();
  $('header').height(winHeight);
  $('header').width(winWidth);
});
$(window).resize(function(){
  let winWidth = $(window).width();
  let winHeight = $(window).height();
  $('section').height(winHeight);
  $('section').width(winWidth);
});
//----- scroll--------
$('a.top').click(function(e){
  e.prenentDefault();
  let wind = $(window).scrollTop(0);
});


/////////////////////////////////////
// var WIDTH = window.innerWidth;
// var HEIGHT = window.innerHeight;
// var MAX_PARTICLES = (WIDTH * HEIGHT) / 20000;
// var DRAW_INTERVAL = 60;
// var canvas = document.querySelector('.background');
// var context = canvas.getContext('2d');
// var gradient = null;
// var pixies = new Array();

// function setDimensions(e) {
//     WIDTH = window.innerWidth;
//     HEIGHT = window.innerHeight;
//     MAX_PARTICLES = (WIDTH * HEIGHT) / 20000;
//     canvas.width = WIDTH;
//     canvas.height = HEIGHT;
//     console.log("Resize to " + WIDTH + "x" + HEIGHT);
// }

// setDimensions();
// window.addEventListener('resize', setDimensions);

// function Circle() {
//     this.settings = {ttl:8000, xmax:5, ymax:2, rmin:8, rmax:15, drt:1};

//     this.reset = function() {
//         this.x = WIDTH*Math.random();                                                   //X 위치 랜덤 (0 ~ WIDTH)
//         this.y = HEIGHT*Math.random();                                                  //Y 위치 랜덤 (0 ~ HEIGHT)
//         this.r = ((this.settings.rmax-1)*Math.random()) + 1;                            //반지름 크기 랜덤 (1 ~ rmax)
//         this.dx = (Math.random()*this.settings.xmax) * (Math.random() < .5 ? -1 : 1);   //X 이동거리 랜덤 (-xmax ~ xmax)
//         this.dy = (Math.random()*this.settings.ymax) * (Math.random() < .5 ? -1 : 1);   //Y 이동거리 랜덤 (-ymax ~ ymax)
//         this.hl = (this.settings.ttl/DRAW_INTERVAL)*(this.r/this.settings.rmax);        //총 생존 시간 (반지름 크기에 비례)
//         this.rt = 0;                                                                    //현재 생존 시간 (0 -> hl -> 0)
//         this.settings.drt = Math.random()+1;                                             //노화 속도 (1 ~ 2)
//         this.stop = Math.random()*.2+.4;                                                //음영 범위 (0.4 ~ 0.6)
//     }

//     this.fade = function() {
//         this.rt += this.settings.drt;    //노화 진행

//         if(this.rt >= this.hl) {
//             this.rt = this.hl;
//             this.settings.drt = this.settings.drt*-1;
//         } else if(this.rt < 0) {
//             this.reset();               //수명이 다하면 새로운 위치에 생성
//         }
//     }

//     this.draw = function() {
//         var newo = (this.rt/this.hl); //밝기 (0 ~ 1) 
//         context.beginPath();
//         context.arc(this.x, this.y, this.r, 0, Math.PI * 2, true);  //(x, y) 좌표에 반지름 r 크기의 원 그림
//         context.closePath();

//         var cr = this.r*newo; //밝기에 따른 반지름
//         gradient = context.createRadialGradient(this.x, this.y, 0, this.x, this.y, (cr < this.settings.rmin) ? this.settings.rmin : cr); 
//         gradient.addColorStop(0.0, 'rgba(255,255,255,'+newo+')');
//         gradient.addColorStop(this.stop, 'rgba(77,101,181,'+(newo*.6)+')');
//         gradient.addColorStop(1.0, 'rgba(77,101,181,0)');
//         context.fillStyle = gradient;
//         context.fill();
//     }

//     this.move = function() {
//         this.x += (1 - this.rt/this.hl)*this.dx;
//         this.y += (1 - this.rt/this.hl)*this.dy;
//         if(this.x > WIDTH || this.x < 0) this.dx *= -1;
//         if(this.y > HEIGHT || this.y < 0) this.dy *= -1;
//     }
// }

// function draw() {
    
//     context.clearRect(0, 0, WIDTH, HEIGHT);

//     for(var i=pixies.length; i<MAX_PARTICLES; i++) {
//         pixies.push(new Circle());
//         pixies[i].reset();
//     }

//     for(var i = 0; i < MAX_PARTICLES; i++) {
//         pixies[i].fade();
//         pixies[i].move();
//         pixies[i].draw();
//     }
// }

// setInterval(draw, DRAW_INTERVAL);