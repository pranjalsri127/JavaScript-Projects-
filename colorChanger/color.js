// using loops to select any button-condition could be colors.



// selecting buttons using DOM document
const buttons=document.querySelectorAll('.button');
//select body tag too 
const body=document.querySelector('body');

// using for each as since the return is as node list
buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target)
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }

    if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }

    if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }

    if(e.target.id==='yellow'){
      body.style.backgroundColor=e.target.id;
    }
  })

  

});
// now writing a callback function on buttons since foreach is used

//applying event listener on buttons

//events- tagname.addEventListener('click','function inside which events is')...parameter inside the funciton is an event object

//e.target-tells from where an event comes for ex-in console we get the id or class of the specific html node 

//write an if statement in which the coditions are given as-using e.target.id
//in if block acc to the condition change the background color using DOM





