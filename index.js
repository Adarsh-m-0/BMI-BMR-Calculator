function calculateBMI() {
  const height = document.getElementById("heightInput").value;
  const weight = document.getElementById("weightInput").value;
  const Age = document.getElementById("Age").value;
  const genderMale = document.getElementById("Male").checked;
  const genderFemale = document.getElementById("Female").checked;
  const activityLevel = document.getElementById("activityLevel").value;

  if (!(genderMale || genderFemale)) {
    alert("Please select your gender.");
    return;
  }

  const heightInMeter = height / 100;
  const bmi = weight / (heightInMeter * heightInMeter);
  const bmiIn = bmi.toFixed(2);

  let bmr;

  if (genderMale) {
    bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * Age;
  } else if (genderFemale) {
    bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * Age;
  }

  

  const bmrIn = bmr.toFixed(2);

  let adjustedBMR;
  switch (activityLevel) {
      case "sedentary":
          adjustedBMR = bmr * 1.2;
          break;
      case "lightlyActive":
          adjustedBMR = bmr * 1.375;
          break;
      case "moderatelyActive":
          adjustedBMR = bmr * 1.55;
          break;
      case "veryActive":
          adjustedBMR = bmr * 1.725;
          break;
      case "extremelyActive":
          adjustedBMR = bmr * 1.9;
          break;
      default:
          adjustedBMR = bmr; 
  }

  const adjustedBMRIn = adjustedBMR.toFixed(2);

  document.getElementById("result").innerHTML = `Your BMI is ${bmiIn}`;
  document.getElementById("result").innerHTML += `<br>Your BMR is ${bmrIn}`;
  document.getElementById("result").innerHTML += `<br>Adjusted BMR based on activity: ${adjustedBMRIn}`;
  

  if (bmiIn < 18.5) {
    document.getElementById("result").innerHTML +=
      "<br><br>You are underweight.";
  } else if (bmiIn < 25) {
    document.getElementById("result").innerHTML +=
      "<br><br>You are in the normal weight range.";
  } else if (bmiIn < 30) {
    document.getElementById("result").innerHTML +=
      "<br><br>You are overweight.";
  } else {
    document.getElementById("result").innerHTML += "<br><br>You are obese.";
  }

  const RecalUnder = (adjustedBMR + 500).toFixed(2);
  const RecalOver = (adjustedBMR - 500).toFixed(2);
  

  if(bmiIn < 18.5){
    document.getElementById("result").innerHTML += `<br>Recommended calorie intake: ${RecalUnder}`;
  }else if (bmiIn < 30) {
    document.getElementById("result").innerHTML += `<br>Recommended calorie intake: ${RecalOver}`;
  }else {

    if(genderMale){
        document.getElementById("result").innerHTML += `<br>Recommended calorie intake: 1500-1800`;
    }else if (genderFemale) {
        document.getElementById("result").innerHTML += `<br>Recommended calorie intake: 1200-1500 `;
    }
  }


}



//Dark mode

var icon = document.getElementById("icon");
icon.onclick = function () {
  document.body.classList.toggle("dark_mode");
  if (document.body.classList.contains("dark_mode")) {
    icon.classList = "fa-solid fa-moon";
  } else {
    icon.classList = "fa-solid fa-sun";
  }
};
