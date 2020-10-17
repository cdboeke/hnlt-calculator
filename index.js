document.querySelector('form').addEventListener('change', () => {
    let monthSuggestion = document.querySelector('#month');
    let yearSuggestion = document.querySelector('#year');

    let income = parseInt(document.querySelector('#income').value);
    let rent = parseInt(document.querySelector('#rent').value);
    let debt = parseInt(document.querySelector('#debt').value);
    let wealth = parseInt(document.querySelector('#wealth').value);
    let edu = parseInt(document.querySelector('#edu').value);
    let kids = parseInt(document.querySelector('#kids').value);
    let savings = parseInt(document.querySelector('#savings').value);
    
    let choices = 0;
    choices += income += rent += debt += wealth += edu += kids += savings;

    let level = Math.round(choices/7);
    console.log(`${choices} / 7 is ${level}`)

    if (level !== NaN){
        if (level === 1){
            monthSuggestion.innerText = '$20.00'
            yearSuggestion.innerText = '$240.00'
        }
        if (level === 2){
            monthSuggestion.innerText = '$30.00'
            yearSuggestion.innerText = '$360.00'
        }
        if (level === 3){
            monthSuggestion.innerText = '$40.00'
            yearSuggestion.innerText = '$480.00'
        }
        if (level === 4){
            monthSuggestion.innerText = '$75.00'
            yearSuggestion.innerText = '$900.00'
        }
        if (level === 5){
            monthSuggestion.innerText = '$150.00'
            yearSuggestion.innerText = '$1,800.00'
        }
        if (level === 6){
            monthSuggestion.innerText = '$200.00'
            yearSuggestion.innerText = '$2,400.00'
        }
        if (level === 7){
            monthSuggestion.innerText = '$300.00'
            yearSuggestion.innerText = '$3,600.00'
        }
    } 
});