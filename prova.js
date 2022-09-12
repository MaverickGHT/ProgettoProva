function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
  
  function LinkFunc () {
  return true;
  }
  
  
  var $btn = document.getElementById("photo-button");
  var $img = document.getElementById("photo-image");
  var $setImg = document.getElementById("set-image");
  $btn.addEventListener("change", setImage);
  $setImg.addEventListener("click", setImage2);
  
  
  function setImage(e) {
    if (this.files && this.files[0]) {
      var file = this.files[0];
      var img = safeImage(file);
      if (img) {
        var reader = new FileReader();
        reader.onload = loadImage;
        reader.readAsDataURL(this.files[0]);
      } else {
        alert("Not an accepted file type");
      }
    }
  }
  
  function safeImage(file) {
    var acceptedTypes = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
    for (var i = 0; i < acceptedTypes.length; i++) {
      if (file.type === acceptedTypes[i]) {
        return true;
      }
    }
    return false;
  }
  
  function setImage2() {
    $btn.click();
  }
  
  function loadImage(e) {
    $img.setAttribute("src", e.target.result);
  }
  
  
  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  function myFunction2() {
    document.getElementById("pippo").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
   window.onclick = function(event) {
    if (!event.target.matches('.sidenavbutton')) {
      var dropdowns = document.getElementsByClassName("sidenav-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }