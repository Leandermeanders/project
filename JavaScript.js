function validateForm() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const ageInput = document.getElementById("age");
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const age = ageInput.value;
  
    if (name === "" || email === "" || age === "") {
      alert("Please fill all the required fields.");
      return false;
    }
  
    // validate age between 18 and 100
    if (age < 18 || age > 100) {
      alert("Age must be between 18 and 100.");
      return false;
    }
  
    return true;
  }
  