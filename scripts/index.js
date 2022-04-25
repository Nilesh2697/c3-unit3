// Store the wallet amount to your local storage with key "amount"
document.getElementById("add_to_wallet").addEventListener("click",money);
   let wallet = JSON.parse(localStorage.getItem("amount")) || 0;

   function money(){
    let amount = document.getElementById("amount").value;
    wallet = wallet + amount

    localStorage.setItem("amount",JSON.stringify(Number(amount)))
    window.location.reload();
    document.getElementById("wallet").innerText=amount; 
   }