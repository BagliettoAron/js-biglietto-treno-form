// INPUT

// mostro la sezione del biglietto con i risultati dei dati di imput
const formBtn = document.getElementById("form-btn")
console.log(formBtn)

formBtn.addEventListener("click",
    function(){
        const resultContainer = document.querySelector(".ms_output-section")
        console.log(resultContainer)
        resultContainer.classList.remove("d-none");
    }
);

