function generateRandomUsername() {
    const characters = "abcdefghijklmnopqrstuvwxyz";
    let randomUsername = "";
  
    for (let i = 0; i < 5; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomUsername += characters.charAt(randomIndex);
    }
  
    return randomUsername;
  }
  
  function generateRandomPassword() {
    const randomPassword = Math.floor(100000 + Math.random() * 900000);
    return randomPassword.toString();
  }

  module.exports = {
    generateRandomUsername,
    generateRandomPassword
  };