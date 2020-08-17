document.getElementById('container').onchange = function(){

    var bill = document.getElementById('billTotal').value;
    var split = document.getElementById('split').value;
    var tips = document.getElementsByName('tips')
    var tipValue;
    let sign;
            if(document.getElementById("US").checked) {
                sign = "$"
                tipValue = 15 
                var newBillPerPerson = bill*(1+(tipValue/100))/split;
                var tipsPerPerson = bill*tipValue/100/split;
            } else if (document.getElementById("EU").checked){
                sign = "€"
                tipValue = 7
                var newBillPerPerson = bill*(1+(tipValue/100))/split;
                var tipsPerPerson = bill*tipValue/100/split;
            } else if (document.getElementById("TR").checked){
                sign = "₺"
                if(bill<150 && split <4){
                var newBillPerPerson = (Math.ceil((bill)/10)*10/split)+15;
                var tipsPerPerson = newBillPerPerson-(bill/split);}
                else {
                tipValue = 10    
                var newBillPerPerson = bill*(1+(tipValue/100))/split;
                var tipsPerPerson = bill*tipValue/100/split;
                }
            }
    
    document.getElementById("splitOutput").innerHTML = split; 
    document.getElementById("newBill").innerHTML = sign + " " +newBillPerPerson.toFixed(1) 
    document.getElementById("tipAmount").innerHTML = sign + " "  + tipsPerPerson.toFixed(1) 
    document.getElementById("billSign").innerHTML = sign
}



