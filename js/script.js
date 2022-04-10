// INPUT




// const ageRange = document.getElementById ("age-range").value

// mostro la sezione del biglietto con i risultati dei dati di imput

const outputSection = document.getElementById("form-btn")
console.log(outputSection)

outputSection.addEventListener("click",
function(){
    // prelevo gli imput
    const userName = document.getElementById("user-name").value;
    console.log(userName)
    
    const routeDistance = document.getElementById("route-distance").value;
    console.log(routeDistance)

    const routePrice = (routeDistance) * (0.21)
    console.log(routePrice)
    
    let ageRange = document.getElementById("age-range");
    let valueAgeRange = ageRange.value;
    console.log(ageRange)

    const under18 = document.getElementById("under18").value;

    const over65 = document.getElementById("over65").value;

    let discount = 0;
    
     if (valueAgeRange === under18) {
        discount = routePrice * 0.2;
    } else if (valueAgeRange === over65) {
        discount = routePrice * 0.4;
    }
    console.log(discount)
        



    // visualizzo la pagina di output
    const outputSection = document.querySelector(".ms_output-section")
    console.log(outputSection)
    outputSection.classList.remove("d-none");
    }

);


