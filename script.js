function showCard() {
    document.getElementById("imgg").setAttribute("class", "toggleOnImg");
    document.getElementById("cardBody").style.width = "350px";
    document.getElementById("btn").setAttribute("class", "toggleOnImg");
    document.querySelector('#cardBody span').style.left="30px";
}
function hideCard() {
    document.querySelector('#cardBody span').setAttribute("class","hide");
    document.getElementById("btn").setAttribute("class", "toggleOff");
    document.getElementById("cardBody").style.width = "0px";
}