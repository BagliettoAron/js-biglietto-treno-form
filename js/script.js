// INPUT





// mostro la sezione del biglietto con i risultati dei dati di imput

const outputSectionShow = document.getElementById("form-btn")
console.log(outputSectionShow)

const outputSectionNoShow = document.getElementById("cler-btn")

outputSectionShow.addEventListener("click",
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
    
    const finalPrice = routePrice - discount;
    console.log(finalPrice)
    
    let ticketClass = "Standard";
    
    if (valueAgeRange === under18) {
        ticketClass = "Minorenni";
    } else if (valueAgeRange === over65) {
        ticketClass = "Silver";
    } 
    console.log(ticketClass)
    
    // visualizzo la pagina di output
    const outputSectionShow = document.querySelector(".ms_output-section")
    console.log(outputSectionShow)
    outputSectionShow.classList.remove("d-none");
    
    const ticketNameResponse = document.querySelector (".ms_passenger-name");
    ticketNameResponse.innerHTML = `${userName}`;
    
    let ticketClassResponse = document.querySelector (".ms_discount")
    ticketClassResponse.innerHTML = `${ticketClass}`
    
    let ticketPriceResponse = document.querySelector(".ms_ticket-price")
    ticketPriceResponse.innerHTML = `€ ${finalPrice}`
}
);

outputSectionNoShow.addEventListener("click",
function(){
    
    
}






);
