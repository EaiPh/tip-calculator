let billtopay= document.querySelector("#billtopay")
let howManyPeople= document.querySelector("#howManyPeople")
let tipValue= document.querySelector("#tipValue")
let customButton= document.querySelector("#custombutton")
let percent= Number(customButton.value)
let p5= document.querySelector("#p5")
p5.addEventListener("click", () => {
   canIcalculate(billtopay, howManyPeople)
   if (Number(billtopay.value) !== 0 && Number(howManyPeople.value) !== 0) {
   percent= 5
   console.log(gorjetaBruta(billtopay, percent, howManyPeople))
   tipValue.innerText= '$ ' + gorjetaBruta(billtopay, percent, howManyPeople).toFixed(2)
   totalByPerson(billtopay, percent, howManyPeople)
   total.innerText= "$ " + totalByPerson(billtopay, percent, howManyPeople).toFixed(2)
   }
})
let p10= document.querySelector("#p10")
p10.addEventListener("click", () => {
   canIcalculate(billtopay, howManyPeople) 
   if (Number(billtopay.value) !== 0 && Number(howManyPeople.value) !== 0) {
   percent= 10
   console.log(gorjetaBruta(billtopay, percent, howManyPeople))
   tipValue.innerText= '$ '+ gorjetaBruta(billtopay, percent, howManyPeople).toFixed(2)
   totalByPerson(billtopay, percent, howManyPeople)
   total.innerText= "$ " + totalByPerson(billtopay, percent, howManyPeople).toFixed(2)
   }
})
let p15= document.querySelector("#p15")
p15.addEventListener("click", () => {
   canIcalculate(billtopay, howManyPeople)
   if (Number(billtopay.value) !== 0 && Number(howManyPeople.value) !== 0) {
   percent= 15
   console.log(gorjetaBruta(billtopay, percent, howManyPeople))
   tipValue.innerText= '$ '+ gorjetaBruta(billtopay, percent, howManyPeople).toFixed(2)
   totalByPerson(billtopay, percent, howManyPeople)
   total.innerText= "$ " + totalByPerson(billtopay, percent, howManyPeople).toFixed(2)
   }
})
let p25= document.querySelector("#p25")
p25.addEventListener("click", () => {
   canIcalculate(billtopay, howManyPeople)
   if (Number(billtopay.value) !== 0 && Number(howManyPeople.value) !== 0) {
   percent= 25
   console.log(gorjetaBruta(billtopay, percent, howManyPeople))
   tipValue.innerText= '$ '+ gorjetaBruta(billtopay, percent, howManyPeople).toFixed(2)
   totalByPerson(billtopay, percent, howManyPeople)
   total.innerText= "$ " + totalByPerson(billtopay, percent, howManyPeople).toFixed(2)
   }
}) 
let p50= document.querySelector("#p50")
p50.addEventListener("click", () => {
   canIcalculate(billtopay, howManyPeople)
   if (Number(billtopay.value) !== 0 && Number(howManyPeople.value) !== 0) {
   percent= 50
   console.log(gorjetaBruta(billtopay, percent, howManyPeople))
   tipValue.innerText= '$ '+ gorjetaBruta(billtopay, percent, howManyPeople).toFixed(2)
   totalByPerson(billtopay, percent, howManyPeople)
   total.innerText= "$ " + totalByPerson(billtopay, percent, howManyPeople).toFixed(2)
   }
})
customButton.addEventListener("keyup", () => {
   canIcalculate(billtopay, howManyPeople)
   if (Number(billtopay.value) !== 0 && Number(howManyPeople.value) !== 0) {
  percent= Number(customButton.value)
   console.log(gorjetaBruta(billtopay, percent, howManyPeople))
   tipValue.innerText= '$ '+ gorjetaBruta(billtopay, percent, howManyPeople).toFixed(2)
   totalByPerson(billtopay, percent, howManyPeople)
   total.innerText= "$ " + totalByPerson(billtopay, percent, howManyPeople).toFixed(2)
   }
}) 
let total= document.querySelector("#total")
let reset= document.querySelector("#reset")
reset.addEventListener("click", () => {
   billtopay.value= ""
   customButton.value= ""
   howManyPeople.value= ""
   tipValue.innerText= "$ 0.00"
   total.innerText= "$ 0.00" 
})  

function canIcalculate(billtopay, howManyPeople) {
  if (Number(billtopay.value) == 0 || Number(howManyPeople.value) == 0) {
     alert("Por favor ,adicione o numero de pessoas e o valor a pagar") 
  }
}

function gorjetaBruta(billtopay, percent, howManyPeople) {
   return (Number(billtopay.value) * percent / 100) /  Number(howManyPeople.value)
   // billtopay * porcentagem / 100
} 

function totalByPerson(b, p, qp) {
   let d= p / 100
  return Number(b.value) * (d + 1) / Number(qp.value)
}