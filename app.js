// Listen for submit 
document.getElementById('loan-form').addEventListener('submit', calculateResults);
// calculate results
function calculateResults(e) {
    // UI vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const year = document.getElementById('year');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-paymemt');
    const totalInterest = document.getElementById('total-interest');

    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayment = parseFloat(year.value) * 12;

    // compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayment);
    const monthly = (principle * x * calculatedInterest) / (x - 1);
    console.log(calculateResults)

    if (isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayment).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayment) - principle).toFixed(2);
    }else{

    }

    
    e.preventDefault();
}