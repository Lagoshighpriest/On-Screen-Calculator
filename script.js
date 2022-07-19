const numberButtons = document.querySelectorAll('number');
const operationButtons = document.querySelectorAll('operation');
const equalsButton = document.querySelector('equals');
const deleteButton = document.querySelector('del');
const clearButton = document.querySelector('clear');
const prevOperation = document.querySelector('prev-op');
const currentOperation = document.querySelector('current-op');

class Calculator{
    constructor(prevOperation, currentOperation){
        this.prevOperation = prevOperation;
        this.currentOperation = currentOperation;
        
    }
}

const clear = ()=>{
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;

};

const calculator = new Calculator(prevOperation, currentOperation)

numberButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay()
    })
})

const del = ()=>{
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    deleteButton.addEventListener('click', button=>{
        calculator.delete();
        calculator.updateDisplay();
    })

}



const appendNumber = (number)=>{
    if(number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()

}
operationButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        calculator.chooseOperaton(button.innerHTML);
        calculator.updateDisplay()
    })
})

const chooseOperaton = (operation)=>{
    if(this.currentOperand === '') return 
    if(this.previousOperand !== ''){
        this.compute()
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand ='';

}

equalsButton.addEventListener('click', button=>{
    calculator.compute();
    calculator.updateDisplay()
})

const compute = ()=>{
    let computation
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand)
    if (isNan(prev) || isNaN(current)) return
    switch(this.operation){
        case '+':
            computation = prev + current
            break;
        case '-':
            computation = prev - current
            break;
        case '*':
            computation = prev * current
            break;
        case '/':
            computation = prev / current
            break;
        default:
            return
        
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = ''   

}
clearButton.addEventListener('click', button =>{
    calculator.clear();
    calculator.updateDisplay();
})

const updateDisplay = ()=>{
    if(this.operation != null){
        this.previousOperation.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    }
    this.currentOperation.innerText = this.getDisplayNumber(this.currentOperand)
    if(this.operation != null){
        this.previousOperation.innerText= `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    }else{
        this.prevOperation.innerText=''
    }
    

}

const getDisplayNumber = (number)=>{
    const floatNumber = parseFloat(number);
    if(isNaN(floatNumber)) return ''
    return floatNumber.toLocaleString('en')
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay 
    if(isNaN(integerDigits)){
        integerDisplay = ''
    }else{
        integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits:0})

    }
    if (decimalDigits != null){
        return `${integerDisplay}.${decimalDigits}`
    }else{
        return integerDisplay

    }
    if(decimalDigits != null){
        return `${integerDisplay}.${decimalDigits}`
    }else{
        return integerDisplay;
    }
}
