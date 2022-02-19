var	iflogin = localStorage.getItem("iflogin");
function test(){
    if (iflogin != "yes"){
        window.location.href="https://liuxia.vercel.app/index.html";
    }
}