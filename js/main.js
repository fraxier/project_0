var navs = document.getElementsByClassName('teehee');

Array.prototype.forEach.call(navs, function(nav) {
    nav.onclick = function () {
        var bgm = document.getElementById('bgm');
        bgm.play();
    };
});

const animated = document.querySelector('#splash');
var count = 0
animated.onanimationend = () => {
  count++
  if (count === 8) {
    console.log('animation end')
    window.location.href = "./home.html";
  }
};