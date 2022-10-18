
const billInput = document.querySelector('.bill-value')
const peopleInput = document.querySelector('.people-value')
const tipAmount = document.querySelector('.tip-amount')
const totalAmount = document.querySelector('.total-amount')
const buttons = document.querySelector('.percentages')
const customInput = document.querySelector('.custom')
const reset = document.querySelector('.reset')
const errorText = document.querySelector('.error-text')

let billValue = ''
let peopleValue = ''
let percentToGet = ''
let customValue = ''

buttons.addEventListener('click', error)

function error(){
    if(peopleValue === 0){
    peopleInput.style.borderColor = 'rgba(255, 115, 0, 0.986)'
    errorText.innerHTML = `Can't be zero`
}else{
    peopleInput.style.borderColor = 'hsl(180, 48%, 87%)'
    errorText.innerHTML = ``
}
}

customInput.addEventListener('input', customCalculator)

function customCalculator(){
    customValue = parseFloat(customInput.value)
    if(billValue > 0 & peopleValue > 0){
    let tipCalculator = ((customValue / 100) * billValue) / peopleValue
    tipAmount.innerHTML =` $${tipCalculator.toFixed(2)}`
    let totalCalculator = (((customValue / 100) * billValue) + billValue) / peopleValue
    totalAmount.innerHTML =` $${totalCalculator.toFixed(2)}`
    }else{

    }
}

peopleInput.addEventListener('input', cal)
function cal(){
    peopleValue = parseFloat(peopleInput.value)
    if(peopleValue  <0){
        peopleInput.style.borderColor = 'border-color: rgba(255, 115, 0, 0.986)'
        errorText.innerHTML = `Can't be zero`
    }
}

buttons.addEventListener('click',function (event){
    value = event.target.innerText
    billInput.addEventListener('input', cal)
    peopleInput.addEventListener('input', cal)
    percentToGet = parseFloat(value)
    console.log(percentToGet)
    billValue = parseFloat(billInput.value)
    peopleValue = parseFloat(peopleInput.value)
    if( value === '5%' & peopleValue > 0){
        calculator()  
        error()
 } else if (value === '10%' & peopleValue > 0){
     calculator()
     error()
 } else if (value === '15%' & peopleValue > 0){
     calculator()
     error()
 } else if (value === '20%' & peopleValue > 0){
     calculator()
     error()
 } else if (value === '25%' & peopleValue > 0){
     calculator()
     error()
 } else if (value === '50%' & peopleValue > 0){
    calculator()
    error()
} else{
    
}  
})

function calculator(){
    let tipCalculator = ((percentToGet / 100) * billValue) / peopleValue
    tipAmount.innerHTML = ` $${tipCalculator.toFixed(2)}`
    let totalCalculator = (((percentToGet / 100) * billValue) + billValue) / peopleValue
    totalAmount.innerHTML =` $${totalCalculator.toFixed(2)}`
}

reset.addEventListener('click', resetAll)

function resetAll(){
    billInput.value = ''
    peopleInput.value = ''
    customInput.value = ''
    tipAmount.innerHTML = ` $0.00`
    totalAmount.innerHTML =` $0.00`
    peopleInput.style.borderColor = 'hsl(180, 48%, 87%)'
    errorText.innerHTML = ``
}


