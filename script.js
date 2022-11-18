// let nom = document.getElementById("Nom").value;
let prenom = document.getElementById("Prénom").value;
let email = document.getElementById("Email").value;
let telephone = document.getElementById("Télephone").value;
let genre = document.getElementById("Genre").value;
let groupe = document.getElementById("Groupe").value;
let club = document.getElementById("Club").value;


let nomPrenomValidation = /[A-Za-z]{3,30}/g;
let emailValidation = /([A-Za-z0-9]\w+(\.?)\w+(\.?)\w+)@(gmail|yahoo|ofppt)\.(com|ma)/g;
let phoneNumberValidation = /(05|06|07)([0-9]\d+)/g;


function submit() {

  if (emailValidation.test(email)) {
    document.getElementById("Email").style.borderColor = "";
    document.getElementById("outputemail").innerHTML = email + " is valid";
    return true;
  } else {
    document.getElementById("Email").style.borderColor = "#FF0000";
    document.getElementById("outputemail").innerHTML = email + " is not valid";
    return false;
  }

}


function test() {

let nom = document.getElementById("Nom").value; 

  if (nomPrenomValidation.test(nom)) {
    document.getElementById("Nom").style.borderColor = "";
    document.getElementById("outputnom").innerHTML = nom + " is valid";
    return true;
  } else {
    document.getElementById("Nom").style.borderColor = "#FF0000";
    document.getElementById("outputnom").innerHTML = nom + " is not valid";
    return false;
  }

}