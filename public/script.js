const calFareBtn = document.getElementById('cal-fare-btn');
const km = document.getElementById('km');
const min = document.getElementById('min');
const displayFare = document.getElementById('display-fare');

calFareBtn.addEventListener('click',async()=>{
    const res = await axios.post('/cal',{km:km.value,min:min.value});

    displayFare.innerText = `Total Fare for the Trip is ${res.data.totalFare}`;
})