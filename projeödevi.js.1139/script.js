let goalCount = 0;
let teamName = "Takımın adı ne?"
let goalNumber = "Kaç gol oldu";


function myFunction() {
    ++goalCount ;
    document.getElementById("TeamAScore").innerHTML= goalCount;
}

function myFunction2() {

    if  ( goalCount > 0  ) {
        --goalCount ;
    }
    
    document.getElementById("TeamAScore").innerHTML= goalCount;
}

function myFunction3() {
    let score = prompt(goalNumber);
    if( score == null || score == "" || score < 0 || score!= Math.trunc(score) ) {
        goalCount = 0; 
        alert("lütfen geçerli bir sayı giriniz")
    } else {
        goalCount = score;
    }
    
    document.getElementById("TeamAScore").innerHTML = Number(goalCount);
  
}

function myFunction4() {
    let team = prompt(teamName);
    if (team == null || team == "") {
      text = "Takım A";
    } else {
      text = team;
    }
    document.getElementById("TeamA").innerHTML = text;
}
function myFunction5() {
    ++goalCount ;
    document.getElementById("TeamBScore").innerHTML= goalCount;
}

function myFunction6() {
    if  (goalCount > 0){
        --goalCount ; 
    } 
    document.getElementById("TeamBScore").innerHTML= goalCount;    
}

function myFunction7() {
    let score = prompt(goalNumber);
    if( score == null || score == "" || score < 0 || score != Math.trunc(score)  )  {
        goalCount = "0"; 
        alert("lütfen geçerli bir sayı giriniz")
    } else {
    goalCount = score;
    }
    
  document.getElementById("TeamBScore").innerHTML = Number(goalCount);
  
}

function myFunction8() {
    let team = prompt(teamName);
    if (team == null || team == "") {
      text = "Takım B";
    } else {
      text = team;
    }
    document.getElementById("TeamB").innerHTML = text;
}




