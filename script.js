function clickButton(value){
    document.getElementById("input").value+=value;
}
function fullReset(){
    document.getElementById("input").value="";
}
function backSpace(){
    let text = document.getElementById("input").value;
    document.getElementById("input").value = text.slice(0, -1);
}
var firstNum, secondNum,globalOperation;

function clickOperation(operationVariable){
    let onscreen = document.getElementById("input").value;
        this.firstNum = onscreen;
        this.globalOperation = operationVariable;
        document.getElementById("input").value = "";
}
function equalOperation() {
    this.secondNum = document.getElementById("input").value;
    let result;
    switch(this.globalOperation){
        case "mod" : result = (this.firstNum) % (this.secondNum);
                     break;
        case "div" : result = (this.firstNum) / (this.secondNum);
                     break;
        case "mul" : result = (this.firstNum) * (this.secondNum);
                     break;
        case "sub" : result = (this.firstNum) - (this.secondNum);
                     break;
        case "plus": let plusFirst = parseFloat(this.firstNum);
                     let plusSecond = parseFloat(this.secondNum);
                     result = plusFirst + plusSecond;
                     break;
        default    : window.alert("IMPOSSIBLE");
    }
    document.getElementById("input").value = result;
    this.firstNum = "";
    this.secondNum = "";
    this.globalOperation = "";
}