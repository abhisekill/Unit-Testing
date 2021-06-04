const calFareBtn = document.getElementById('cal-fare-btn');
const km = document.getElementById('km');
const min = document.getElementById('min');
const displayFare = document.getElementById('display-fare');
const showFareRates = document.getElementById('show-fare-rates');
const showFareBtn = document.getElementById('show-fare-btn');

calFareBtn.addEventListener('click',async()=>{
    const res = await axios.post('/cal',{km:km.value,min:min.value});

    displayFare.innerText = `Total Fare for the Trip is ${res.data.totalFare}`;
})

showFareBtn.addEventListener('click',async()=>{
    const res = await axios.get('/rates');
    console.log(res);
    showFareRates.innerHTML = `Fixed Price Upto : ${res.data.initialKm}Km <br> 
                                Fixed Price : Rs${res.data.fixedPrice} <br>
                                Price PerKm  : Rs${res.data.perKm} <br>
                                free Minutes : Rs${res.data.freeMin} <br>
                                Price PerMin : Rs${res.data.perMin}`
})