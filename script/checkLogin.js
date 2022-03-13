window.setInterval("test()",1);
function test(){
    var	iflogin = localStorage.getItem("iflogin");
    if (iflogin != "yes"){
        window.location.href="../index.html";
    }
}