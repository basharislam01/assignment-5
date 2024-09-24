// For Noakhali, Bangladesh

const myModal = document.getElementById('my_modal_4');
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
    myModal.showModal();  

        //    transaction history
     const dateAndTimeZone = new Date();
     const div = document.createElement('div');
     div.classList.add('space-y-4');
     div.classList.add('w-full');
     div.classList.add('p-6');
     div.classList.add('border');
     div.classList.add('rounded-xl');
     div.classList.add('text-left');

     div.innerHTML = `
        <h4 class="lg:text-2xl md:text-2xl text-lg font-bold">${amount} Donate for Flood at Noakhali, Bangladesh</h4>
         <p>${dateAndTimeZone}</p>
     `   
       
     document.getElementById('vat-kha').appendChild(div);




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
    myModal.showModal();  
    

        //    transaction history
        const dateAndTimeZone = new Date();
        const div = document.createElement('div');
        div.classList.add('space-y-4');
        div.classList.add('w-full');
        div.classList.add('p-6');
        div.classList.add('border');
        div.classList.add('rounded-xl');
        div.classList.add('text-left');
   
        div.innerHTML = `
           <h4 class="lg:text-2xl md:text-2xl text-lg font-bold">${amount} Donate for Flood Relief in Feni,Bangladesh</h4>
            <p>${dateAndTimeZone}</p>
        `   
          
        document.getElementById('vat-kha').appendChild(div);
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
    myModal.showModal();      

        //    transaction history
        const dateAndTimeZone = new Date();
        const div = document.createElement('div');
        div.classList.add('space-y-4');
        div.classList.add('w-full');
        div.classList.add('p-6');
        div.classList.add('border');
        div.classList.add('rounded-xl');
        div.classList.add('text-left');
   
        div.innerHTML = `
           <h4 class="lg:text-2xl md:text-2xl text-lg font-bold">${amount} Aid for Injured in the Quota Movement</h4>
            <p>${dateAndTimeZone}</p>
        `   
          
        document.getElementById('vat-kha').appendChild(div);
   
   
   
   }

 })


//  onek koste korso bashar tumi oporer funtion r vulew hat dio na 


// Show Transaction histroy section

document.getElementById('show-history-section')
  .addEventListener('click', function(){
    showSectionById('mew-history')

})

document.getElementById('show-donation-section')
  .addEventListener('click', function(){
    showSectionById('dekh-shala-moja')

})