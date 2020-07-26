//判断浏览器
let isIE = navigator.userAgent.match(/MSIE (\d)/i);
isIE = isIE ? isIE[1] : undefined;
let isFF = /FireFox/i.test(navigator.userAgent);
if (isIE < 9) //传统浏览器使用MouseWheel事件
  attachEvent("onmousewheel", function (e) {
  //计算鼠标滚轮滚动的距离
  //一格3行，每行40像素
  let v = e.wheelDelta / 2;
  scrollLeft += v;
  //阻止浏览器默认方法
  return false;
});
else if (!isFF) //除火狐外的现代浏览器也使用MouseWheel事件
  addEventListener("mousewheel", function (e) {
  //计算鼠标滚轮滚动的距离
  let v = -e.wheelDelta / 2;
  scrollLeft += v;
  //阻止浏览器默认方法
  e.preventDefault();
}, false);
else //火狐使用DOMMouseScroll事件
  addEventListener("DOMMouseScroll", function (e) {
  //计算鼠标滚轮滚动的距离
  //一格是3行，但是要注意，这里和像素不同的是它是负值
  scrollLeft += e.detail * 80;
  //阻止浏览器默认方法
  e.preventDefault();
}, false);
