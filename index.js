function calculateBMI() {
    const height = document.getElementById("heightInput").value;
    const weight = document.getElementById("weightInput").value;
    const Age = document.getElementById("Age").value;
    const genderMale = document.getElementById("Male").checked;
    const genderFemale = document.getElementById("Female").checked;

    if (!(genderMale || genderFemale)) {
        alert("Please select your gender.");
        return;
    }

    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);
    const bmiIn = bmi.toFixed(2);

    let bmr;

    if (genderMale) {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * Age);
    } else if (genderFemale) {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * Age);
    }

    const bmrIn = bmr.toFixed(2);

    document.getElementById("result").innerHTML = `Your BMI is ${bmiIn}`;
    document.getElementById("result").innerHTML += `<br>Your BMR is ${bmrIn}`;

    if (bmiIn < 18.5) {
        document.getElementById("result").innerHTML += '<br><br>You are underweight.';
    } else if (bmiIn < 25) {
        document.getElementById("result").innerHTML += '<br><br>You are in the normal weight range.';
    } else if (bmiIn < 30) {
        document.getElementById("result").innerHTML += '<br><br>You are overweight.';
    } else {
        document.getElementById("result").innerHTML += '<br><br>You are obese.';
    }
}
