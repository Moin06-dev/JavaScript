const form = document.querySelector('form')

form.addEventListener('submit' , function (e){
e.preventDefault();

const height = parseInt(document.querySelector("#height").value);
const weight = parseInt(document.querySelector("#weight").value);
const result = document.querySelector('#results');

if (height < 0 || height === ''|| isNaN(height)){
result.innerHTML = "please provide valide height";
}else if(weight < 0 || weight === ''|| isNaN(weight)){
    result.innerHTML = "please provide valide weight";
}else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if(bmi  >= 24){
        result.innerHTML = `you are overweight because = ${bmi}`
    }else if(bmi  <= 18){
        result.innerHTML = `you are under weight because = ${bmi}`
    }else{
        result.innerHTML = `your BMI is normal = ${bmi}`;
    }
}
});