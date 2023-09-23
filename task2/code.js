//get the elements from the DOM
const inputs = document.querySelectorAll(".panel input");
const c = document.querySelector("#celsius");
const f = document.querySelector("#fahrenheit");
const k = document.querySelector("#kelvin");

//loop through all inputs
inputs.forEach(input => {
    //add an input event on all inputs
    input.addEventListener("input", e => {
      /*get the id from the
      input the event takes place on*/
      const unit = e.target.id;
      /* get the values from the
      input the event takes place on*/
      const v = parseInt(e.target.value);
      /* if the inputs even takes
      place in the celsius input*/
      if(unit === "celsius") {
        f.value = parseFloat((v * 1.8) + 32).toFixed(4);
        k.value = parseFloat(v + 273.15).toFixed(4);
      }
      else if(unit === "fahrenheit") {
        c.value = parseFloat((v - 32) * 5 / 9).toFixed(4);
        k.value = parseFloat(((v - 32) * 5 / 9) + 273.15).toFixed(4);
      }
      else if(unit === "kelvin") {
        c.value = parseFloat(v - 273.15).toFixed(4);
        f.value = parseFloat((v - 273.15) * 9 / 5 + 32).toFixed(4);
      }   
    });
}); 