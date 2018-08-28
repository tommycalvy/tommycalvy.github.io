function showNav(){
  console.log("This is working");
  var x = document.getElementById("responsive-nav");
  if (x.className === "responsive-nav") {
    x.className += " unfold";
  } else {
    x.className = "responsive-nav";
  }
}
