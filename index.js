document.querySelector('form').addEventListener('change', () => {
    let monthSuggestion = document.querySelector('#month');
    let yearSuggestion = document.querySelector('#year');

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

const addInfoEffect = (idName, text) => {
    document.querySelector(`#${idName}`).addEventListener('focus', () =>{
        document.querySelector('.tooltip').style.display = 'inline-block';
        document.querySelector('.tooltipText').style.visibility = 'visible';
        document.querySelector('.tooltipText').style.opacity = 1;
        document.querySelector('.tooltipText').innerHTML = text;
    });

    document.querySelector(`#${idName}`).addEventListener('blur', () =>{
        document.querySelector('.tooltip').style.display = 'none';
        document.querySelector('.tooltipText').style.visibility = 'collapse';
        document.querySelector('.tooltipText').style.opacity = 0;
    })
}

addInfoEffect('income', '<span><b>Individual Income:</b> Consider all sources of income including, but not limited to: jobs, gigs, rental income, dividends, commissions, money you currently get from family members etc.</span>');
addInfoEffect('rent', '<span><b>Housing:</b> Consider your current living situation, including whether you rent or own.</span>');
addInfoEffect('debt', '<span><b>Debt:</b> Consider all student, medical, and consumer debt that you currently have. Do not include mortgage debt, this is accounted for in the housing category.</span>');
addInfoEffect('wealth', '<span><b>Family Wealth:</b> Consider wealth that you currently have access to because of family or other relationships, as well as what you might inherit or owe when family members pass away. Wealth you have access to or may inherit includes: money, gifts, stocks, land and property, trusts, cars, etc. Negative family wealth means you don’t inherit anything of value and have responsibility to pay expenses that come up when a family member dies, like funeral, casket, legal fees, clergy, etc.</span>');
addInfoEffect('edu', '<span><b>Level of Education:</b> Consider your current status. We acknowledge that not all advanced degrees are created equally—some have higher earning potential and social capital than others. We’ve tried to account for this and we also encourage you to think about your degree(s) in terms of social hierarchy (e.g. MDs and JDs often have higher earning potential than MFAs).</span>');
addInfoEffect('dependents', '<span><b>Number of Dependents:</b> Consider the people who rely on you for financial support, including children, elders, or others.</span>');
addInfoEffect('savings', '<span><b>Savings:</b> Consider the money that is in your savings account, retirement funds (401k, IRA, SEP, etc), investments in stocks, bonds, and mutual funds.</span>');

