const expenseBtn = document.querySelector('.expense-add');
const inputBoxes = document.querySelectorAll('.input-box');
const containerDiv = document.querySelector('.container')
const inputBox1 = document.querySelector('.input-box-1')
const inputBox2 = document.querySelector('.input-box-2')
const inputBox3 = document.querySelector('.input-box-3')
const inputBox4 = document.querySelector('.input-box-4')


expenseBtn.addEventListener('click', () => {
  let newValues = inputBox1.value;
  let newValues2 = inputBox2.value;
  let newValues3 = inputBox3.value;
  let newValues4 = inputBox4.value;
  let allValues = `📋Name: ${newValues}, 🔥Type: ${newValues2}, ⏱️Frequency: ${newValues3}, 💰Amount: ${newValues4}`
  newExpense = () => {  
    let newDiv = document.createElement('div')
    let newPara = document.createElement('p')
    containerDiv.appendChild(newDiv)
    newDiv.appendChild(newPara)
    newDiv.classList.add('expense-list') 
    newPara.classList.add('expense-para')
    newPara.innerText = allValues
  }
  newExpense()
})

