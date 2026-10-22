const Table = [["be", "been"], ["become", "become"], ["begin", "begun"], ["break", "broken"], ["bring", "brought"], ["build", "built"], ["buy", "bought"], ["catch", "caught"], ["choose", "chosen"], ["come", "come"], ["cost", "cost"], ["cut", "cut"], ["do", "done"], ["draw", "drawn"], ["drink", "drunk"], ["drive", "driven"]];

var alwaysCorrect = []
var random_index = Math.floor(Math.random() * Table.length);
var infinitiv = Table[random_index][0];

function show_question(INf){
    document.getElementById("infinitiv").textContent = INf;
}

function check() {
    var past_participle = document.getElementById("past_participle").value;
    var correct_past_participle = Table[random_index][1];

    if (past_participle === correct_past_participle) {
        alwaysCorrect.push([infinitiv, past_participle]);
        document.getElementById("feedback").textContent = "Correct!";
    } else {
        document.getElementById("feedback").textContent = "Incorrect. The correct past participle is: " + correct_past_participle;
    }
    
    document.getElementById("past_participle").value = "";
    random_index = Math.floor(Math.random() * Table.length);
    for (const i of alwaysCorrect) {
        if (i !== Table[random_index]) {
            document.getElementById("infinitiv").textContent = Table[random_index][0]
            break
        }
    }
    console.log(alwaysCorrect)
    show_question(infinitiv)
}
show_question(infinitiv)
