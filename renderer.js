var myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  x = myObject.fullName();
  document.getElementById("demo").innerHTML = x; 