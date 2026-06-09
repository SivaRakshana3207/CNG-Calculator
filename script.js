const tripEfficiency = document.getElementById('trip-distance');
const fuelEfficiency = document.getElementById('fuel-efficiency');
const fuelCost = document.getElementById('fuel-cost');
const calculateBtn = document.getElementById('calculate-btn');

calculateBtn.addEventListener("click",(event) => {
    event.preventDefault();

    if(tripEfficiency.value === "")
    {
        alert("Enter Trip Distance Value");
    }
    else
    {
        const distanceKM = tripEfficiency.value;
        const fuelEff = fuelEfficiency.value;
        const fuelPrice = fuelCost.value;

        const result = (distanceKM / fuelEff) * fuelPrice;

        const finalMsg = "Your fuel cost will be around: ₹" + result;
        alert(finalMsg);
    }
})