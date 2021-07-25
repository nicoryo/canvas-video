onload = function outputVideo2(){
  var video = document.getElementById("remote_video");
  video.style.display ="none";
 
  setInterval(function(){
    var canvas = document.getElementById("my-canvas");
    canvas.style.display ="block";
    var ctx = canvas.getContext('2d');
	  ctx.drawImage(video, 0, 0, 1280, 720);
  //  ctx.globalAlpha = 0.5;
  //  ctx.fillStyle = "rgb(0, 0, 255)";
  //  ctx.fillRect(20,20,50,50);
    ctx.beginPath();
    ctx.globalAlpha = 0.5;
    ctx.fillStyle = "rgb(0, 0, 255)";
    ctx.moveTo(600, 720);
    ctx.lineTo(640, 180);
    ctx.lineTo(680, 720);
    ctx.fill();

    for(let i = 0; i < 5; i++) {
      lineY = 3 / (i + 4) * 720;
      ctx.beginPath();
      ctx.globalAlpha = 0.5;
      ctx.fillStyle = "rgb(0, 0, 255)";
      ctx.moveTo(600, lineY );
      ctx.lineTo(680, lineY);
      ctx.lineWidth = 5 - i;
      ctx.stroke();
    }
  }, 1000/30);
}

