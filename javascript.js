
let bodytag=document.querySelector('body')
let timer=setInterval(function(){
    let randomnum1= Math.floor((Math.random()*255)+0);
    let randomnum2= Math.floor((Math.random()*255)+0);
    let randomnum3= Math.floor((Math.random()*255)+0);
    bodytag.style.backgroundColor="rgb("+randomnum1+","+randomnum2+","+randomnum3+")"
    // switch(randomnum){
    //     case 1:
    //     bodytag.style.backgroundColor="#ffff00"
    //     break;
    //     case 2:
    //     bodytag.style.backgroundColor="#ff0000"
    //     break;        
    //     case 3:
    //     bodytag.style.backgroundColor="#000000"
    //     break;       
    //     case 4:
    //     bodytag.style.backgroundColor="#ffffff"
    //     break;        
    //     case 5:
    //     bodytag.style.backgroundColor="#00ff00"
    //     break;        
    //     case 6:
    //     bodytag.style.backgroundColor="#0000ff"
    //     break;        
    //     case 7:
    //     bodytag.style.backgroundColor="#00ffff"
    //     break;        
    //     case 8:
    //     bodytag.style.backgroundColor="#aaa"
    //     break;        
    //     case 9:
    //     bodytag.style.backgroundColor="#aa5599"
    //     break;        
    //     case 10:
    //     bodytag.style.backgroundColor="#ff00ff"
    //     break;
    //     default:
    //     alert("error")
    // }
},500)