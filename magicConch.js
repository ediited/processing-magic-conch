

//teamwork von Lauritz & Alessa 
//magische Miesmuschel
var ausgabeSammlung = ["NEIN","NICHTS","JA","VIELLEICHT"];
var ringXStart = 295;
var ringYStart = 237;
var ringX = ringXStart;
var ringY = ringYStart;
var schrittX;
var schrittY;
var nichtzurück;
var ausgabeWort = "gefixed";
var bubbleLife;
var drangezogen;
var secDelay = 5;





var genNewWord = function(){
    
  ausgabeWort = ausgabeSammlung[floor(random(0,ausgabeSammlung.length))];  
    
};

var zurückKehren = function(){
   if(drangezogen){
    if(!nichtzurück){
        if (!(ringX>ringXStart-20&&ringX<ringXStart+20&&ringY>ringYStart-20&&ringY<ringYStart+20)){
            ringX=ringX+schrittX;
            ringY=ringY+schrittY;
        }
        else{
         ringX=ringXStart;
         ringY=ringYStart;
         nichtzurück = true;
         genNewWord();
         bubbleLife = secDelay*30;
         drangezogen = false;
         //println(ausgabeWort);
        }
    }
   }
};

var drawSprechblaße = function(x,y,width){
    if(bubbleLife<=0){
     //println("und wieder weg");   
    }
    else{
    stroke(54, 49, 49);
    rectMode(CENTER);
    fill(212, 212, 212);
    strokeWeight(2);   
    rect(0+x,0+y,width,100,10);
    noStroke();
    
    fill(54, 49, 49);
    triangle(249,282,238,308,290,310);
    fill(212, 212, 212);
    triangle(250,286,236,319,300,319);
    fill(56, 56, 56);
    
    textAlign(CENTER,CENTER);
    textSize(81);
    text(ausgabeWort,250,358);
    bubbleLife--;    
    }
};

var drawRing = function(x,y){
    stroke(235, 235, 235);
    strokeWeight(4);
    line(ringXStart-15,ringYStart-10,ringX-13,ringY-10);
    strokeWeight(2);
    stroke(224, 224, 224);
    line(ringXStart-15,ringYStart-10,ringX-13,ringY-10);
    noFill();
    stroke(219, 219, 219);
    strokeWeight(8);
    ellipse(0+x,0+y,35,35);
    stroke(230, 230, 230);
    strokeWeight(5);
    ellipse(0+x,0+y,35,35);
};

var drawBackground = function(){
    rectMode(LEFT);
    background(11, 161, 181);
    noStroke();
    fill(6, 176, 116);
    rect(0,height/2+52,width,height/2);
    ellipse(20,321,100,100);
    ellipse(209,331,143,100);
    ellipse(445,341,156,270);
    ellipse(161,100,52,52);
    ellipse (183,149,20,20);
    ellipse (132,143,25,25);
    ellipse (152,173,10,10);
    ellipse(356,55,52,52);
    ellipse (386,19,20,20);
    ellipse (395,94,25,25);
    ellipse (413,50,10,10);
    fill(11, 161, 181);
    ellipse(105,321,66,63);
    ellipse(323,296,89,242);
};

var drawConch = function(x,y){
  //mega gute arbeit von alessa :o
  strokeWeight(2);
  fill(219, 191, 219);
  triangle (344+x,243+y,201+x,142+y,209+x,243+y);
  ellipse(298+x,225+y,100,100);
  ellipse(219+x,204+y,50,50);
  ellipse(276+x,182+y,50,50);
  ellipse(240+x,157+y,48,27);
  ellipse(217+x,151+y,37,27);
  ellipse(208+x,168+y,20,39);
  ellipse(223+x,233+y,36,41);
  
  ellipse(257+x,190+y,64,59);
  ellipse(298+x,255+y,100,100);
  ellipse(240+x,244+y,69,68);
  ellipse(247+x,259+y,69,68);
  ellipse(261+x,268+y,69,68);
  ellipse(317+x,197+y,42,42);
  ellipse(240+x,244+y,69,68);
  ellipse(317+x,241+y,69,68);
  ellipse(326+x,278+y,52,108);
  ellipse(266+x,291+y,33,36);
  ellipse(281+x,266+y,55,110);
  ellipse(296+x,308+y,32,35);
  ellipse(323+x,289+y,48,119);
  ellipse(262+x,287+y,69,68);
  ellipse(292+x,306+y,45,45);
  ellipse(316+x,319+y,45,45);
  ellipse(329+x,342+y,20,20);
  ellipse(334+x,349+y,13,20);
  ellipse(208+x,143+y,19,20);
  
  fill(77, 69, 77);
  ellipse(301+x,246+y,45,57);
  ellipse(294+x,256+y,45,45);
  ellipse(307+x,252+y,45,45);
  ellipse(309+x,266+y,45,45);
  ellipse(312+x,281+y,45,45);
  ellipse(306+x,276+y,45,45);
  ellipse(297+x,269+y,45,45);
  ellipse(323+x,294+y,20,35);
  ellipse(319+x,298+y,20,20);
  ellipse(326+x,310+y,10,10);
  
  fill(189, 179, 189);
  ellipse(243+x,294+y,29,37);
  ellipse(232+x,280+y,29,30);
  ellipse(221+x,266+y,22,37);
  ellipse(215+x,242+y,21,37);
  ellipse(208+x,214+y,18,37);
  ellipse(202+x,202+y,15,37);
  ellipse(202+x,174+y,10,37);
  ellipse(202+x,153+y,6,21);
  ellipse(252+x,312+y,21,17);
  ellipse(268+x,319+y,22,13);
  ellipse(283+x,325+y,34,13);
  ellipse(299+x,330+y,18,13);
  ellipse(310+x,337+y,11,11);
  
  ellipse(319+x,219+y,17,19);
  ellipse(325+x,228+y,17,19);
  ellipse(329+x,237+y,17,19);
  ellipse(332+x,248+y,17,19);
  ellipse(333+x,261+y,12,19);
  ellipse(337+x,275+y,10,19);
  ellipse(337+x,292+y,8,19);
  
  fill(250, 247, 247);
  ellipse(345+x,228+y,10,23);
  fill(181, 172, 172);
  ellipse(339+x,225+y,7,19);
  ellipse(339+x,236+y,7,7);
  ellipse(342+x,238+y,7,7);
  ellipse(345+x,239+y,7,7);
  ellipse(341+x,233+y,7,7);
  
  
  
  
  stroke(163, 157, 163);
  line(234+x,144+y,227+x,148+y);
  line(264+x,156+y,238+x,170+y);
  line(203+x,186+y,213+x,183+y);
  line(199+x,156+y,201+x,155+y);
  line(293+x,176+y,302+x,175+y);
  line(208+x,232+y,225+x,223+y);
  line(272+x,190+y,244+x,211+y);
  line(287+x,225+y,340+x,201+y);
  line(271+x,256+y,286+x,228+y);
  
  line(268+x,278+y,273+x,272+y);
  line(301+x,309+y,297+x,298+y);
  line(281+x,293+y,281+x,287+y);
  line(328+x,333+y,331+x,309+y);
   
   
};

var draw = function() {
    //background(255,255,255);
    drawBackground();
    drawConch(-68,0);
    drawRing(ringX,ringY);
    drawSprechblaße(width/2,358,ausgabeWort.length*55);
    zurückKehren();
    
};

var mouseDragged = function(){
    if (((pmouseX-20<ringX)&&(pmouseX+20>ringX)&&((pmouseY-20<ringY)&&(pmouseY+20>ringY)))){
        ringX=mouseX;
        ringY=mouseY;
        nichtzurück = true;
        drangezogen = true;
    }
};

var mouseReleased = function(){
    schrittX = floor((ringXStart-mouseX)/20);
    schrittY = floor((ringYStart-mouseY)/20);
    nichtzurück = false;
};

