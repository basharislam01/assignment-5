// For Noakhali, Bangladesh


document.getElementById('donate-n')
 .addEventListener('click', function(event){
   event.preventDefault();
   const amount = getInputFieldValueById('donation-amount-n');
   const balance =getTextFieldValueById('account-balance');
   const donationAmount =getTextFieldValueById('n-donated-amount');
   if(amount <= 0 || isNaN(amount) || amount > balance){
    alert('Please check your amount')
   }
   else{
    const newBalance = balance - amount;
    document.getElementById('account-balance').innerText = newBalance;
    const newDonationAmount = donationAmount + amount;
    document.getElementById('n-donated-amount').innerText = newDonationAmount;
   }

 })


// For Feni,Bangladesh

document.getElementById('donate-f')
 .addEventListener('click', function(event){
   event.preventDefault();
   const amount = getInputFieldValueById('doation-amount-f');
   const balance =getTextFieldValueById('account-balance');
   const donationAmount =getTextFieldValueById('f-donated-amount');
   if(amount <= 0 || isNaN(amount) || amount > balance){
    alert('Please check your amount')
   }
   else{
    const newBalance = balance - amount;
    document.getElementById('account-balance').innerText = newBalance;
    const newDonationAmount = donationAmount + amount;
    document.getElementById('f-donated-amount').innerText = newDonationAmount;
   }

 })



document.getElementById('donate-q')
 .addEventListener('click', function(event){
   event.preventDefault();
   const amount = getInputFieldValueById('donation-amount-q');
   const balance =getTextFieldValueById('account-balance');
   const donationAmount =getTextFieldValueById('q-donated-amount');
   if(amount <= 0 || isNaN(amount) || amount > balance){
    alert('Please check your amount')
   }
   else{
    const newBalance = balance - amount;
    document.getElementById('account-balance').innerText = newBalance;
    const newDonationAmount = donationAmount + amount;
    document.getElementById('q-donated-amount').innerText = newDonationAmount;
   }

 })


//  onek koste korso bashar tumi oporer funtion r vulew hat dio na 