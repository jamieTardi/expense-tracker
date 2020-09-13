const expenseBtn = document.querySelector('.expense-add');
const inputBoxes = document.querySelectorAll('.input-box');
const containerDiv = document.querySelector('.container')


expenseBtn.addEventListener('click', () => {
   
    inputBoxes.forEach((box) => {
        let values = box.value;
        newExpense = () => {
            let newDiv = document.createElement('div')
            let newPara = document.createElement('p')
            containerDiv.appendChild(newDiv)
            newDiv.appendChild(newPara)
            newDiv.classList.add('expense-list') 
            newPara.classList.add('expense-para')
            newPara.innerText = values 
        }
        newExpense()
    })
})

