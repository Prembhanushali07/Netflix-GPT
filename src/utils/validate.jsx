export const checkValidateData = (email, password,fullname) => {

    // Validate full name using a regular expression for names with a minimum of 3 characters
    const isFullNameValid = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(fullname);
    // Validate email using a regular expression for common email formats
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  
    // Validate password to ensure it contains at least one digit, one lowercase letter,
    // one uppercase letter, and is at least 8 characters long.
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  
    // Return corresponding error message if validation fails
    if(!isFullNameValid){
        return "Invalid Full Name"
    };

    if (!isEmailValid) {
      return "Invalid Email";
    };
  
    if (!isPasswordValid) {
      return "Invalid Password";
    };
  
    // Return null if both validations are successful
    return null;
  };
  