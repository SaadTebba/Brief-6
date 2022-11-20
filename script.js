function submit() {

  let nom = document.getElementById("Nom").value;
  let prenom = document.getElementById("Prénom").value;
  let email = document.getElementById("Email").value;
  let telephone = document.getElementById("Télephone").value;
  let genre = document.getElementById("Genre").value;
  let groupe = document.getElementById("Groupe").value;
  let club = document.getElementById("Club").value;


  let nomPrenomValidation = /^[a-zA-Z]{3,30}$/;
  let emailValidation = /^([A-Za-z0-9]\w+(\.?)\w+(\.?)\w+)@(gmail|yahoo|ofppt)\.(com|ma)$/;
  let phoneNumberValidation = /^(05|06|07)([0-9]{8})$|^(\+212)-?([0-9]{9})$/;
  let genreValidation = /^([F-f]éminin|[F-f])$|^([M-m]asculin|[M-m])$/;
  let groupeValidation = /^(DW-?(101|102|103)+)$|^(DM-?(101|102))$/;
  let clubValidation = /^[I|i]nformatique$|^[R|r]obotique$|^[J|j]eu d'échecs$|^[M|m]usique$|^[F|f]oot$|^[T|t]héatre$/;

  // Nom validation

  if (nomPrenomValidation.test(nom)) {
    document.getElementById("Nom").style.borderColor = "";
    console.log(nom + " is valid");
  } else {
    document.getElementById("Nom").style.borderColor = "#FF0000";
    console.log(nom + " is not valid");
  }

  // Prénom validation

  if (nomPrenomValidation.test(prenom)) {
    document.getElementById("Prénom").style.borderColor = "";
    console.log(prenom + " is valid");
  } else {
    document.getElementById("Prénom").style.borderColor = "#FF0000";
    console.log(prenom + " is not valid");
  }

  // Email validation

  if (emailValidation.test(email)) {
    document.getElementById("Email").style.borderColor = "";
    console.log(email + " is valid");
  } else {
    document.getElementById("Email").style.borderColor = "#FF0000";
    console.log(email + " is not valid");
  }

  // Phone number validation

  if (phoneNumberValidation.test(telephone)) {
    document.getElementById("Télephone").style.borderColor = "";
    console.log(telephone + " is valid");
  } else {
    document.getElementById("Télephone").style.borderColor = "#FF0000";
    console.log(telephone + " is not valid");
  }

  // Genre validation

  if (genreValidation.test(genre)) {
    document.getElementById("Genre").style.borderColor = "";
    console.log(genre + " is valid");
  } else {
    document.getElementById("Genre").style.borderColor = "#FF0000";
    console.log(genre + " is not valid");
  }
  
  // Groupe validation
  
  if (groupeValidation.test(groupe)) {
    document.getElementById("Groupe").style.borderColor = "";
    console.log(groupe + " is valid");
  } else {
    document.getElementById("Groupe").style.borderColor = "#FF0000";
    console.log(groupe + " is not valid");
  }

  // Club(s) validation

  if (clubValidation.test(club)) {
    document.getElementById("Club").style.borderColor = "";
    console.log(club + " is valid");
  } else {
    document.getElementById("Club").style.borderColor = "#FF0000";
    console.log(club + " is not valid");
  }

  
}