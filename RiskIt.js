let RiskItButtonID = "riskItButton";
var RiskItButton = window.top.document.getElementById(RiskItButtonID);

export default function makeVisible() {
    console.log("WINDOW TOP DOCUMENT: ", window.top.document);
    RiskItButton.style.visibility = 'visible';
}



window.top.document.getElementById(RiskItButtonID).addEventListener('click', function () {
    window.alert("Move with the spinner for a chance to get a different card or key! You will not recieve a card for the coloured tile you are currently on unless you move with the dice.");
});
