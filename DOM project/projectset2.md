#Project 2 

##BMI Calculator

[click here](https://stackblitz.com/edit/web-platform-27wfnc?file=BMI%20%20Calculator%2Findex.html)

##Solution Code

```javascript
const form = document.querySelector('form');
const results = document.querySelector('#results');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `<span>Please provide a valid height</span>`;
    return;
  }

  if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `<span>Please provide a valid weight</span>`;
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  results.innerHTML = `<span>Your BMI is ${bmi}</span>`;

  if (bmi < 18.6) {
    results.innerHTML += `<br><span>You are underweight</span>`;
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    results.innerHTML += `<br><span>You are in the normal weight range</span>`;
  } else if (bmi > 24.9) {
    results.innerHTML += `<br><span>You are overweight</span>`;
  }
});



```