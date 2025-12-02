console.log("Script loaded");

function sumInputs(){
    let sum = 0;
    for (let i = 1; i <= 4; i++) {
        let val = parseInt(document.getElementById("input-"+i).value);
        if (!isNaN(val)) {
            sum += val;
        }
    }
    return sum;
}

function updateOdds(){

    let sum = sumInputs();

    for (let i = 1; i <= 4; i++) {
            let input = document.getElementById("input-"+i);
            let result = document.getElementById("result-"+i);

            let num = parseInt(input.value);
            let odds = (num/sum) * 100

            if(!isNaN(odds)){
                result.value = odds.toFixed(1) + "%";
            } else {
                result.value = "";
            }

            result.style = "";
            if(odds >= 90){
                result.style = "border-color: #4caf50;";
                result.value += " T3";
            } else if (odds >= 60){
                result.style = "border-color: #cddc39;";
                result.value += " T2";
            } else if (odds >= 30){
                result.style = "border-color: #ff9800;";
                result.value += " T1";
            } else if (odds > 0){
                result.style = "border-color: #f44336;";
            }
    }

}

for (let i = 1; i <= 4; i++) {
    document.getElementById("input-"+i).addEventListener("input", function(e) {
        this.value = this.value.replace(/[^0-9]/g, "");
        updateOdds();
    });
}