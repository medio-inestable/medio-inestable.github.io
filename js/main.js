$(document).ready(()=>{
  var color_r = 0;
  var seno;

  setInterval(()=>{
    color_r += 1;
    seno = ((Math.sin(color_r*0.01)*0.5)+0.5)*360;
    if(seno>=356){
      color_r = -120;
    }
    $('body').css('background-color','hsl('+seno+',100%,50%)');
    // console.log(seno);
  }, 200)
});
