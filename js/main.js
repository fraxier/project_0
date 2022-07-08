var navs = document.getElementsByClassName('teehee');

Array.prototype.forEach.call(navs, function(nav) {
    nav.onclick = function () {
        var bgm = document.getElementById('bgm');
        bgm.play();
    };
});