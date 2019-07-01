function billcheck(){
    var a = parseInt(document.getElementById("input").value)
    if (a <= 100){
        document.getElementById("result").innerHTML = a*5
    }}