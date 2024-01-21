async function covid(){
let res = await fetch("https://data.covid19india.org/v4/min/data.min.json");
let result = await  res.json();
let container = document.createElement("div");
container.setAttribute("class","container-md");
let select = document.createElement("select");
select.setAttribute("class","form-select");
select.setAttribute("aria-label","Default select example");
select.setAttribute("id","answer")
select.innerHTML = `<option selected>Select your area</option>`;
let button = document.createElement("button");
button.setAttribute("class","btn btn-danger");
button.innerText = "check";
button.setAttribute("onclick","getvalue()")


let states = Object.keys(result);
states.forEach(statename=>{
    let option = document.createElement("option");
    option.value = statename;
    option.text = statename;
    select.add(option);
})
container.append(select,button);
document.body.append(container);
}

function getvalue(){
    var stateSelect = document.getElementById("answer");
    var selectedState = stateSelect.value;
    fetch("https://data.covid19india.org/v4/min/data.min.json")
    .then(response=>response.json()).then(data=>{
    let selected_value = data[selectedState].total.confirmed;
    alert("confirmed cases : "+selected_value);
})
    
}
covid();