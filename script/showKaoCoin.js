window.setInterval("changeKC()",100);
function changeKC(){
    kcview = localStorage.getItem("kaocoin");
    if (kcview == null){
        document.getElementById('kaocoinView').style="position:fixed;bottom: 0;left: 1%;";
        document.getElementById('kaocoinView').innerHTML="尻币功能未启用，请前往尻币设置页面启用";
    }
    else{
        document.getElementById('kaocoinView').innerHTML="当前尻币数量为: "+ kcview +" 个";
        document.getElementById('kaocoinView').style="position:fixed;bottom: 0;left: 1%;";
    }
}
