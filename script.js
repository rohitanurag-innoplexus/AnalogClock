function startClock() {
  var angle = 360/60;
  var date = new Date();
  var hour = date.getHours();
  if(hour > 12) {
    hour = hour - 12;
  }
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var hourAngle = (360/12)*hour + (360/(12*60))*minute;
  $("#m").css("transform",'rotate('+angle*minute+'deg)');
  $("#s").css("transform",'rotate('+angle*second+'deg)');
  $("#h").css("transform",'rotate('+hourAngle+'deg)');


}
// $(document).ready(function(){
// startClock();
//
// });

window.setInterval(function(){
  /// call your function here
  startClock();
}, 1000);
