//出力先
const output = document.querySelector('#output');
//マウス移動時
document.addEventListener('onmousemove', onmousemove);
onmousemove = function(e) {
  output.innerHTML = `x:` + e.pageX + ` y:` + e.pageY;
}
//マウス離脱時
document.addEventListener('onmouseout', onmouseout);

onmouseout = function(e) {
  output.innerHTML = ``;
}

onload = function(){
  let video = document.getElementById('remote_video');
  let canvas = document.getElementById("my-canvas");
  let videoWidth = 0;
  let videoHeight = 0;
  let canvasWidth = document.documentElement.clientWidth;
  let canvasHeight = document.documentElement.clientHeight;
  let scale = 0;
  let shiftX = 0;
  const FRAMERATE = 1000/30;
  let ctx = canvas.getContext('2d');
  video.style.display ="none";
  video.style.minWidth = "100%";
  video.style.minHeight = "100%";

 
  setInterval(function(){
    scale = canvasHeight / videoHeight;
    shiftX = (canvasWidth - videoWidth*scale) / 2;
    
    canvas.style.display ="block";

	  ctx.drawImage(video, shiftX, 0, videoWidth*scale, videoHeight*scale);
    if ( video.readyState >= HTMLMediaElement.HAVE_METADATA ) {
      videoWidth = video.videoWidth ;
      videoHeight = video.videoHeight ;
    }
  }, FRAMERATE);
}

