console.log( "EasyCodeTools JavaScript is running!" );
function changeElement(ElementID,Text,Disable){
    document.getElementById(ElementID).innerHTML=Text;
    if (Disable == true){
        document.getElementById(ElementID).style="display:none;";
    }
    else if (Disable == false){
        document.getElementById(ElementID).style="display:inline;";
    }
}
