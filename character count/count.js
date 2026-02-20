const textarea=document.querySelector('#text-input')
const input=document.querySelector('#char-count')

textarea.addEventListener('input',()=>{
    textarea.style.color="black" //default color
    
    input.textContent=`Character Count: ${textarea.value.length}/50`
    if(textarea.value.length>=50){
       input.style.color="red"
    }else{
        input.style.color = "black";
    }
     if(textarea.value.length>50){
        textarea.value=textarea.value.slice(0,50)
    }
})
