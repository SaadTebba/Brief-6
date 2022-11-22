function validation() {

  let nom = document.getElementById("Nom").value;
  let prenom = document.getElementById("Prénom").value;
  let email = document.getElementById("Email").value;
  let telephone = document.getElementById("Télephone").value;

  let nomPrenomValidation = /^[a-zA-Z]{3,30}$/;
  let emailValidation = /^([A-Za-z0-9]\w+(\.?)\w+(\.?)\w+)@(gmail|yahoo|ofppt)\.(com|ma)$/;
  let phoneNumberValidation = /^(05|06|07)([0-9]{8})$|^(\+212)-?([0-9]{8})$/;
  let clubValidation = document.getElementById('club').selectedOptions;
  let red = [];

  // Nom validation

  if (nomPrenomValidation.test(nom)) {
    document.getElementById("Nom").style.borderColor = "";
    document.getElementById("nomerror").style.visibility= "hidden";
  } else {
    document.getElementById("Nom").style.borderColor = "#FF0000";
    document.getElementById("nomerror").style.visibility= "visible";
    red.push(false)
  }

  // Prénom validation

  if (nomPrenomValidation.test(prenom)) {
    document.getElementById("Prénom").style.borderColor = "";
    document.getElementById("prenomerror").style.visibility= "hidden";
  } else {
    document.getElementById("Prénom").style.borderColor = "#FF0000";
    document.getElementById("prenomerror").style.visibility= "visible";
    red.push(false)
  }

  // Email validation

  if (emailValidation.test(email)) {
    document.getElementById("Email").style.borderColor = "";
    document.getElementById("emailerror").style.visibility= "hidden";
  } else {
    document.getElementById("Email").style.borderColor = "#FF0000";
    document.getElementById("emailerror").style.visibility= "visible";
    red.push(false)
  }

  // Phone number validation

  if (phoneNumberValidation.test(telephone)) {
    document.getElementById("Télephone").style.borderColor = "";
    document.getElementById("teleerror").style.visibility= "hidden";
  } else {
    document.getElementById("Télephone").style.borderColor = "#FF0000";
    document.getElementById("teleerror").style.visibility= "visible";
    red.push(false)
  }

  // Club(s) validation

  if (clubValidation.length === 0) {
    document.getElementById("cluberror3").style.visibility= "hidden";
    document.getElementById("cluberror0").style.visibility= "visible";
  } else if (clubValidation.length > 3) {
    document.getElementById("cluberror3").style.visibility= "visible";
    document.getElementById("cluberror0").style.visibility= "hidden";
    red.push(false)
  }
  
  if (red.length === 0) {
    document.getElementById('formid').submit();
  }
}