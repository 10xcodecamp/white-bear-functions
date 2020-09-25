function getPasswordError(password, email) {
   const emailParts = email.split("@"); // ["mike", "gmail.com"]
   const localPartEmail = emailParts[0]; // "mike"
   const unacceptablePasswords = getUnacceptablePasswords(); // return a list
   console.log(unacceptablePasswords);

   if (password.length === 0) {
      return "Please create a password.";
   } else if (password.length < 9 && password.length > 0) {
      return "Your password must be at least 9 characters.";
   } else if (
      password.toLowerCase().includes(localPartEmail) &&
      localPartEmail.length >= 4
   ) {
      return "All or part of your email address cannot be used in your password.";
   } else if (unacceptablePasswords.includes(password.toLowerCase())) {
      return `Your password contains a commonly used password, “${password.toLowerCase()}” and can be easily discovered by attackers Please use something else.`;
   } else {
      return "";
   }
}

function getUnacceptablePasswords() {
   // combining mostInsecurePasswords and secondMostInsecurePasswords from their respective files
   const allInsecurePasswords = mostInsecurePasswords.concat(
      secondMostInsecurePasswords
   );

   const allFlatInsecurePasswords = allInsecurePasswords.flat();

   // getting rid of duplicates
   const allUniqueInsecurePasswords = [...new Set(allFlatInsecurePasswords)];

   const firstSliceOfInsecurePasswords = allUniqueInsecurePasswords.slice(
      0,
      allUniqueInsecurePasswords.indexOf("skywalker")
   );

   const secondSliceOfInsecurePasswords = allUniqueInsecurePasswords.slice(
      allUniqueInsecurePasswords.indexOf("1010101010"),
      allUniqueInsecurePasswords.indexOf("obama2016")
   );

   const thirdSliceOfInsecurePasswords = allUniqueInsecurePasswords.slice(
      allUniqueInsecurePasswords.indexOf("mypassword")
   );

   const unacceptablePasswordsWithBooleans = firstSliceOfInsecurePasswords.concat(
      secondSliceOfInsecurePasswords,
      thirdSliceOfInsecurePasswords
   );

   let unacceptablePasswordStrings = [];
   for (let i = 0; i < unacceptablePasswordsWithBooleans.length; i++) {
      const value = unacceptablePasswordsWithBooleans[i];
      // remove the booleans and keep numbers and strings:
      if (typeof value === "number" || typeof value === "string") {
         // convert numbers to strings:
         unacceptablePasswordStrings = unacceptablePasswordStrings.concat(
            String(value)
         );
      }
   }

   let unacceptableReversedPasswords = [];
   for (let i = 0; i < unacceptablePasswordStrings.length; i++) {
      const unaccPassStr = unacceptablePasswordStrings[i];
      const unaccPassStrChars = unaccPassStr.split("");
      const copyOfUnaccPassChars = [...unaccPassStrChars];
      const reverseUnaccPassChars = copyOfUnaccPassChars.reverse();
      const newUnaccPassStr = reverseUnaccPassChars.join("");
      unacceptableReversedPasswords = unacceptableReversedPasswords.concat(
         newUnaccPassStr
      );
   }

   const unaccStrAndReversedPasswords = [
      ...unacceptablePasswordStrings,
      ...unacceptableReversedPasswords,
   ];

   let lowerCasedUnaccPasswords = [];
   for (let i = 0; i < unaccStrAndReversedPasswords.length; i++) {
      const unacceptablePassword = unaccStrAndReversedPasswords[i];
      const lowerCasedUnaccPass = unacceptablePassword.toLowerCase();
      lowerCasedUnaccPasswords = lowerCasedUnaccPasswords.concat(
         lowerCasedUnaccPass
      );
   }

   const unacceptablePasswords = [...new Set(lowerCasedUnaccPasswords)];
   return unacceptablePasswords;
}
