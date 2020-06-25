var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  x = myObject.fullName();
  document.getElementById("demo").innerHTML = x; 

  var myVar;

            function myFunction() {
            myVar = setTimeout(showPage, 3000);
            }

            function showPage() {
            document.getElementById("loader").style.display = "none";
            document.getElementById("myDiv").style.display = "block";
            }