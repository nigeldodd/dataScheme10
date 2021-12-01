window.onload = () => {
    'use strict';
  
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
               .register('./sw.js');
    }
    //document.getElementById("pplaceholder").innerHTML="replacement text"
  }

/*function replaceHolder() {
  document.getElementById("pplaceholder").innerText="replacement text"
}

replaceHolder();*/
//document.getElementById("pplaceholder").innerHTML="replacement text"