const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')

    if (height < 0 || isNaN(height) || height === '') {
        result.innerHTML = `Please enter a valid height ${height}`;
    }
    else if (weight < 0 || isNaN(weight) || weight === '') {
        result.innerHTML = `Please enter a valid height ${weight}`;
    }
    else {

        const BMI = (weight) / ((height * height) / 10000).toFixed(2);
        //  result.innerHTML = `${BMI}`
        if (BMI < 18) {
            result.innerHTML = `under weight with bmi ${BMI}`
        }
        else if (BMI < 24 && BMI > 18) {
            result.innerHTML = `under normal range with bmi ${BMI}`
        }
        else {
            result.innerHTML = `under over with bmi ${BMI}`
        }


    }






});

