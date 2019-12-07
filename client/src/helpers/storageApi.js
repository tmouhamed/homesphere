export default {
  /**
   * Gets the email value from localStorage
   * @returns {string}
   */
  getEmailFromStore: function() {
    return sessionStorage.getItem('email');
  },
  /**
   * Sets the email key and value in localStorage.
   * @param {string} emailVal if empty or undefined, will unset.
   */
  setEmailInStore: function(emailVal) {
    if (emailVal && emailVal !== '') {
      sessionStorage.setItem('email', emailVal);
      return true;
    } else {
      sessionStorage.removeItem('email');
      return false;
    }
  },
  /**
   * Gets the login timestamp from localStorage.
   * @returns {string}
   */
  getLoginStamp: function() {
    return localStorage.getItem('loginDate');
  },
  /**
   * Sets the login timestamp to the current date on localStorage
   */
  setLoginStamp: function() {
    localStorage.setItem('loginDate', new Date().toISOString());
  },
  /**
   * Removes the login timestamp from localStorage
   */
  unsetLoginStamp: function() {
    localStorage.removeItem('loginDate');
  }
}