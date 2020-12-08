(function() {

    const saveCookie = (name, content, expireDate = newDate() => {
        document.cookie = `${name}=${content}; expires=${expireDate}`;
    
    };
    const expire = new Date (new Date().getTime()+15*60*1000);
    saveCookie('token','slakdjhfgklsadjgbnvl', expire);

    //Cookie handler
    const cookieHandler = {
        getCookie(name) {
            const cookieValue = document.cookie
            .split(';')
            .find(row => row.startsWith(name))
            .split('=')[1];
            return cookieValue;
          },
          removeCookie(name){
              document.cookie = `${name}=;sfdgf`
          },
          setSessionStorage(key, value){
              window.sessionStorage.setItem(key, value);
          },
          moveToSession(name){
              const value = this.getCookie(name);
              this.removeCookie(name);
              this.setSessionStorage(name);
          }
    };
    cookieHandler.getCookie('token');
})();