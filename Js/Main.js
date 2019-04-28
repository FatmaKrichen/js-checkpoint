console.log("14 04 2019");

function changeBold() {
    document.getElementById("text").style.fontWeight = "bold";
}
function ChangeItalic() {
    document.getElementById("text").style.fontStyle = "italic";

}
function Underline(){
    document.getElementById("text").style.textDecoration ="underline";
}

function changeFontFamily(event) {
    document.getElementById("text").style.fontFamily = event.value;
};
 function changeTailleText(event) {
   document.getElementById("text").style.fontSize = event.value;
 }