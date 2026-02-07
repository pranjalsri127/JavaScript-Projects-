const button=document.getElementById('age')  
button.addEventListener('click', ()=> {
   
    const input = document.getElementById('dob').value
    const result = document.getElementById('result')

    // To give alert message for empty date field
    if (!input) {
        result.style.color = "red"
        result.innerText = "Please fill Date of Birth" // if dob field is empty this message will come in red color
        return;
    }

    // TO check that 
    const dob = new Date(input) // This represent the date in the input field
    const today = new Date() // creates date object containing date & time. This represents Present day Date.

    if (dob > today) {
        result.style.color = "red"
        result.innerText = "Date of Birth can't be in the future"
        return;
    }

    let years = today.getFullYear() - dob.getFullYear() //.getFullYear() returns the 4-digit year of a date.Ex=2026
    let month = today.getMonth() - dob.getMonth() //.getMonth() returns month number of date 
    let days = today.getDate() - dob.getDate() //.getDate() returns any number of date in a month 

    if (days < 0) {
        month--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (month < 0) { //to check if the birthday month has gone or about to arrive.
        years--;
        month += 12;
    }

    result.style.color = "green"
    result.innerText = `You are ${years} years,${month} months and ${days} days old.`
}

)

