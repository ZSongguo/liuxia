window.setInterval("test()",1);
function test(){
    var	iflogin = localStorage.getItem("iflogin");
    if (iflogin != "true"){
        window.location.href="../index.html";
    }
}
//判断日期是否属于开放时间
var today = new Date().getDay();
if (today != "6" && today !="0"){
    window.location.href="../closetime.html";
}
