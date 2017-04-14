
document.getElementById('form1').onsubmit = function(){
  var http = new XMLHttpRequest();
  http.open("POST", "/js/contacts.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("name=" + this.name.value + "&phone=" + this.phone.value);


  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
       window.location.href = "/form.html"
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
  return false;
}


document.getElementById('form2').onsubmit = function(){
  var http = new XMLHttpRequest();
  http.open("POST", "/js/contacts2.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("name2=" + this.name2.value + "&phone2=" + this.phone2.value);


  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
       window.location.href = "/form.html"
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
  return false;
}

document.getElementById('form3').onsubmit = function(){
  var http = new XMLHttpRequest();
  http.open("POST", "/js/contacts3.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("name3=" + this.name3.value + "&phone3=" + this.phone3.value);


  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
       window.location.href = "/form.html"
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
  return false;
}

document.getElementById('form4').onsubmit = function(){
  var http = new XMLHttpRequest();
  http.open("POST", "/js/contacts4.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("name4=" + this.name4.value + "&phone4=" + this.phone4.value);


  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
       window.location.href = "/form.html"
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
  return false;
}

document.getElementById('form5').onsubmit = function(){
  var http = new XMLHttpRequest();
  http.open("POST", "/js/contacts5.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("name5=" + this.name5.value + "&phone5=" + this.phone5.value + "&message5=" + this.message5.value);


  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
       window.location.href = "/form.html"
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
  return false;
}

document.getElementById('form6').onsubmit = function(){
  var http = new XMLHttpRequest();
  http.open("POST", "/js/contacts6.php", true);
  http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  http.send("name6=" + this.name6.value + "&phone6=" + this.phone6.value);


  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
       window.location.href = "/form.html"
    }
  }
  http.onerror = function() {
    alert('Извините, данные не были переданы');
  }
  return false;
}