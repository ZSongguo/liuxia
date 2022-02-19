kcview = localStorage.getItem("kaocoin");
window.setInterval("changeKC()",1000);
function changeKC(){
    document.getElementById('kaocoinView').innerHTML="当前尻币数量为: "+ kcview +" 个";
}
