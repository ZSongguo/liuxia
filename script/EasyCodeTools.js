console.log( "EasyCodeTools JavaScript is running!" );
//操作元素
function changeElement(ElementID,Text,Disable){
    document.getElementById(ElementID).innerHTML=Text;
    if (Disable == true){
        document.getElementById(ElementID).style="display:none;";
    }
    else if (Disable == false){
        document.getElementById(ElementID).style="display:inline;";
    }
}
//获取表单数据
function getForm(FormId){
    var FORMVALUE = document.getElementById(FormId).value;
    FORMVALUE.toString();
}
