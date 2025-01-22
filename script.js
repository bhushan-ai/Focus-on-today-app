const checkBoxList=document.querySelectorAll('.custom-checkbox')
const inputFields =document.querySelectorAll('.goal-input')

checkBoxList.forEach((checkbox)=>{
    checkbox.addEventListener('click',(e)=>{
        const allFiledFilled =[...inputFields].every((input)=>{
            return input.value
        })
        
        if(allFiledFilled){
      checkbox.parentElement.classList.toggle('completed')
      }
    })
})
