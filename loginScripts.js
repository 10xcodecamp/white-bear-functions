const dbUserDetails = ["mike@gmail.com", "javascriptiscool"];

$("#login-button").click(function () {
   const emailInput = $("#email-input").val();
   const passwordInput = $("#password-input").val();

   const isUserInDb = checkIsUserInDb(dbUserDetails, emailInput, passwordInput);

   if (isUserInDb === true) {
      disableElement("#login-button");
      disableElement("#email-input");
      disableElement("#password-input");
   } else {
      console.log("This user is not found.");
   }
});

function disableElement(id) {
   $(id).attr("disabled", "disabled"); // side effect
}

function checkIsUserInDb(dbUserDetails, emailInput, passwordInput) {
   if (dbUserDetails[0] === emailInput && dbUserDetails[1] === passwordInput) {
      return true;
   } else return false;
}
