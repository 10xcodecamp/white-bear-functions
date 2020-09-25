const maxChar = 240;
$("#save-card").click(function () {
   $("#overlay-success").toggleClass("d-flex d-none");
});
$("#back-to-answer").click(function () {
   $("#overlay-error").toggleClass("d-flex d-none");
});

$("#show-delete").click(function () {
   $("#delete-button").removeClass("d-none");
});

$("#sign-up-button").click(function () {
   $("#intro-card").addClass("d-none");
   $("#create-account-card").removeClass("d-none");
});

$("#create-imagery-input").keyup(function (e) {
   const text = e.target.value;

   if (text.length <= maxChar && text.length > 0) {
      $("#save-card").removeAttr("disabled");
      $("#imagery-characters").removeClass("text-danger");
      $("#imagery-characters").addClass("text-muted");
   } else if (text.length > maxChar) {
      $("#save-card").attr("disabled", "disabled");
      $("#imagery-characters").removeClass("text-muted");
      $("#imagery-characters").addClass("text-danger");
   } else if (text.length === 0) {
      $("#save-card").attr("disabled", "disabled");
      $("#imagery-characters").removeClass("text-danger");
      $("#imagery-characters").addClass("text-muted");
   }
   $("#imagery-char-count").html(text.length);
});

$("#create-answer-input").keyup(function (e) {
   const text = e.target.value;

   if (text.length <= maxChar && text.length > 0) {
      $("#next").removeAttr("disabled");
      $("#answer-characters").removeClass("text-danger");
      $("#answer-characters").addClass("text-muted");
   } else if (text.length > maxChar) {
      $("#next").attr("disabled", "disabled");
      $("#answer-characters").removeClass("text-muted");
      $("#answer-characters").addClass("text-danger");
   } else if (text.length === 0) {
      $("#next").attr("disabled", "disabled");
      $("#answer-characters").removeClass("text-danger");
      $("#answer-characters").addClass("text-muted");
   }
   $("#answer-char-count").html(text.length);
});

$("#edit-imagery-input, #edit-answer-input").keyup(function (e) {
   const imageryInput = $("#edit-imagery-input").val();

   const answerInput = $("#edit-answer-input").val();

   if (imageryInput.length <= maxChar && imageryInput.length >= 0) {
      $("#edit-imagery-characters").removeClass("text-danger");
   } else {
      $("#edit-imagery-characters").addClass("text-danger");
   }
   if (answerInput.length <= maxChar && answerInput.length >= 0) {
      $("#edit-answer-characters").removeClass("text-danger");
   } else {
      $("#edit-answer-characters").addClass("text-danger");
   }

   if (
      imageryInput.length > 0 &&
      imageryInput.length <= maxChar &&
      answerInput.length > 0 &&
      answerInput.length <= maxChar
   ) {
      $("#edit-save").removeAttr("disabled");
   } else {
      $("#edit-save").attr("disabled", "disabled");
   }
   $("#edit-imagery-char-count").html(imageryInput.length);
   $("#edit-answer-char-count").html(answerInput.length);
});

$("#lets-go").click(function () {
   const emailInput = $("#sign-up-email-input").val();
   const email = emailInput.trim().toLowerCase();
   const password = $("#sign-up-password-input").val();

   if (email.length === 0) {
      $("#sign-up-email-input").addClass("is-invalid");
      $("#sign-up-email-error").removeClass("d-none");
      $("#sign-up-email-error").html("Please enter your email address.");
   } else {
      $("#sign-up-email-input").removeClass("is-invalid");
      $("#sign-up-email-input").addClass("is-valid");
      $("#sign-up-email-error").addClass("d-none");
   }

   const passwordError = getPasswordError(password, email); // getPasswordError should return a string
   console.log(passwordError);

   if (passwordError !== "") {
      $("#sign-up-password-input").addClass("is-invalid");
      $("#sign-up-password-error").html(passwordError);
   } else {
      $("#sign-up-password-input").removeClass("is-invalid");
      $("#sign-up-password-error").html(passwordError); // ""
   }

   const emailError = getEmailError(email);
   console.log(emailError);

   if (emailError !== "") {
      $("#sign-up-email-input").addClass("is-invalid");
      $("#sign-up-email-error").html(emailError);
   } else {
      $("#sign-up-email-input").removeClass("is-invalid");
      $("#sign-up-email-error").html(emailError); // ""
   }

   // showError(element, errorMessage) // TODO: Make work for both email and email

   let today = new Date(Date.now());
   // to test other days:
   //today = new Date(2020, 6, 2);
   const year = today.getFullYear();
   const month = today.getMonth();
   const day = today.getDate();
   const hour = today.getHours();
   const minutes = today.getMinutes();
   const seconds = today.getSeconds();
   const milliseconds = today.getMilliseconds();

   const yearPart = String(year);

   const monthPart = String(month + 1);
   let paddedMonth = monthPart;
   if (monthPart.length < 2) {
      paddedMonth = "0" + monthPart;
   }

   const dayPart = String(day);
   let paddedDay = dayPart;
   if (dayPart.length < 2) {
      paddedDay = "0" + dayPart;
   }
   const createdAt = yearPart + paddedMonth + paddedDay;
});
