function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}


const dialogTile = document.querySelector(".modal");
const btnContact = document.querySelector(".contact-btn");
const closeBtn = document.querySelector(".close-btn");
closeBtn.href = "#";

closeBtn.addEventListener("click", () => closeModal());
btnContact.addEventListener("click", () => displayModal());
closeBtn.addEventListener("keydown", (e) => {
alert(10);
if (e.key === "Escape") {
displayModal();
}
})

function toValidate(tagName, errorlabel, errorMsg, regex) {
    if (regex) {
      if (tagName.value == "") {
        document.getElementById(errorlabel).innerHTML = "Ce champ ne peut être vide";
        tagName.focus();
        return false;
      } else if (!regex.test(tagName.value)) {
        document.getElementById(errorlabel).innerHTML = errorMsg;
        tagName.focus();
        return false;
      } else {
        document.getElementById(errorlabel).innerHTML = "";
        return true;
      }
    } else {
      if (tagName.value == '') {
        document.getElementById(errorlabel).innerHTML = errorMsg;
        if (tagName.length == undefined) {
          tagName.focus();
        }
        return false;
      } else {
        document.getElementById(errorlabel).innerHTML = "";
        return true;
      }
    }
  
  }

function validate() {
    //avec regex
    let surname = document.forms["formulaire"]["surname"];
    let regexsurname = /^[A-za-z]{3,12}$/;
    let errorsurname = 'errorsurname';
    let errorMsgsurname = 'Veuillez entrez un prénom valide';
    if (!toValidate(surname,errorsurname,errorMsgsurname,regexsurname)) return false;}
  
   /* //avec regex
    let name = document.forms["reserve"]["last"];
    let regexlast = /^[A-za-z]{3,12}$/;
    let errorlast = 'errorlast';
    let errorMsglast = 'Veuillez entrez un nom valide';
    if (!toValidate(surname, errorlast, errorMsglast, regexlast)) return false;
  
    //avec regex
    let email = document.forms["reserve"]["email"];
    let regexemail = /(.+)@(.+){2,}\.(.+){2,}/;
    let erroremail = 'erroremail';
    let errorMsgemail = 'Veuillez entrez un em@il valide';
    if (!toValidate(email, erroremail, errorMsgemail, regexemail)) return false;
  
    //sans regex
    let birthdate = document.forms["reserve"]["birthdate"];
    let errorbirthdate = 'errorbirthdate';
    let errorMsgbirthdate = "Veuillez entrez une date valide";
    if (!toValidate(birthdate, errorbirthdate, errorMsgbirthdate)) return false;
  
    //sans regex
    let quantity = document.forms["reserve"]["quantity"];
    let errorquantity = 'errorquantity';
    let errorMsgquantity = "Veuillez entrez une quantitée valide";
    if (!toValidate(quantity, errorquantity, errorMsgquantity)) return false;
  
    //sans regex
    let location = document.forms["reserve"]["location"];
    let errorlocation = 'errorlocation';
    let errorMsglocation = "Veuillez choisir une ville";
    if (!toValidate(location, errorlocation, errorMsglocation)) return false;
    closeForm();
    return false;*/