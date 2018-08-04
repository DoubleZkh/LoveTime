
window.onload = function () {
    var time = document.getElementById('time');

    var loveData = new Date('2018/03/16 00:00:00');
    //定时器
    setInterval(function () {
        //现在的时机
        var nowData = new Date();
        var nowTime = nowData.getTime();
        var loveTime = loveData.getTime();

        var allTime = nowData - loveData ;

        var allSecond = parseInt(allTime/1000);

        var d = parseInt(allSecond / 3600 / 24);
        var h = parseInt(allSecond / 3600 % 24);
        var m = parseInt(allSecond / 60 % 60);
        var s = parseInt(allSecond % 60);

        time.innerText = d+"天"+h+"时"+m+"分"+s+"秒";

    },1000)
}