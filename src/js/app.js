(function() {
    window.addEventListener('load', function() {
        alert('loaded');
    });

    test("text");
    myFunc();

    var test = hello();
    test(test);
})();

function test(text) {
    console.log(text);
}

function myFunc(){
    myTbl = new Array("日","月","火","水","木","金","土");
    myD = new Date();

    myYear = myD.getFullYear();
    myMonth = myD.getMonth() + 1;
    myDate = myD.getDate();
    myDay = myD.getDay();
    myHours = myD.getHours();
    myMinutes = myD.getMinutes();
    mySeconds = myD.getSeconds();

    myMess1 = myYear + "年" + myMonth + "月" + myDate + "日";
    myMess2 = myTbl[myDay] + "曜日";
    myMess3 = myHours + "時" + myMinutes + "分" + mySeconds + "秒";
    myMess = myMess1 + " " + myMess2 + " " + myMess3;
    document.write( myMess );
}

function hello() {
    var a = 10;

    return a;
}
