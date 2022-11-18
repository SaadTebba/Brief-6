// let gmailValidation = /([A-Za-z0-9]\w+(\.?)\w+(\.?)\w+)@(gmail|yahoo|ofppt)\.(com|ma)/;
// let phoneNumberValidation = /(05|06|07)([0-9]\d+)/;
// let nomPrenomValidation = /[a-zA-Z]{3,30}/;


{

  let email = document.getElementById("Email").value;
  let emailValidation = /([A-Za-z0-9]\w+(\.?)\w+(\.?)\w+)@(gmail|yahoo|ofppt)\.(com|ma)/g;

  if (emailValidation.test(email)) {
    document.getElementById("Email").style.borderColor = "";
    document.getElementById("outputemail").innerHTML = "Email is valid"
    return true;
  }
  else {
    document.getElementById("Email").style.borderColor = "#FF0000";
    document.getElementById("outputemail").innerHTML = "Email is not valid"
    return false
  }

}

{
  let nom = document.getElementById('Nom').value;

}