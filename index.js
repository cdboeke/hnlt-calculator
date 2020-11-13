document.querySelector('form').addEventListener('change', () => {
    let income = parseInt(document.querySelector('#income').value);
    let rent = parseInt(document.querySelector('#rent').value);
    let debt = parseInt(document.querySelector('#debt').value);
    let wealth = parseInt(document.querySelector('#wealth').value);
    let edu = parseInt(document.querySelector('#edu').value);
    let dependents = parseInt(document.querySelector('#dependents').value);
    let savings = parseInt(document.querySelector('#savings').value);
    
    let choices = 0;
    choices += income += rent += debt += wealth += edu += dependents += savings;

    let level = Math.round(choices/7);
    //console.log(`${choices} / 7 is ${level}`)

    if (level !== NaN){
        switch (level) {
            case 1:
                showSuggestion(240);
                break;
            case 2:
                showSuggestion(360);
                break;
            case 3:
                showSuggestion(480);
                break;
            case 4:
                showSuggestion(900);
                break;
            case 5: 
                showSuggestion(1800);
                break;
            case 6:
                showSuggestion(2400);
                break;
            case 7:
                showSuggestion(3600);
                break;
            deafult:
                console.log('Error.')
        }
    } 
});

const showSuggestion = (annual) => {
    document.querySelector('.output').innerHTML = `<p><b>Suggested Donation:</b> $${annual}.00 a year, or $${annual/12}.00 a month.</p>`;
};

const showInfo = category => {
    document.querySelector(`#${category}`).addEventListener('focus', () =>{
        document.querySelector(`.${category}Info`).style.display = 'block';
    });

    document.querySelector(`#${category}`).addEventListener('blur', () =>{
        document.querySelector(`.${category}Info`).style.display = 'none';
    });
};

showInfo('income');
showInfo('rent');
showInfo('debt');
showInfo('wealth');
showInfo('edu');
showInfo('dependents');
showInfo('savings');