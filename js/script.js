window.onload = function() {
  var a = document.getElementById("html");
  var scroll_width = 10; //滚动一下的距离
  if(document.addEventListener){
    document.addEventListener('DOMMouseScroll', mousewheel_event, false); // FF
  }
  a.onmousewheel = mousewheel_event; // IE/Opera/Chrome
  function mousewheel_event(e) {
    var e = e || window.event, v;
    e.wheelDelta ? v=e.wheelDelta : v=e.detail;
    if(v>3||-v>3) v=-v;
    v>0 ? a.scrollLeft+=scroll_width : a.scrollLeft-=scroll_width;     
    e.preventDefault(); //阻止浏览器的默认滚动
  }
};
