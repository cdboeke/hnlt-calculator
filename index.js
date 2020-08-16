document.querySelector('#proto1Form').addEventListener('submit', (event) => {
    event.preventDefault();
    // get the income
    const income = document.querySelector('#income').value;
    const section = document.querySelector('#proto1');
    // make sure it's a number
    const regex = /\D+/g;
    const found = income.match(regex);
    if (found){
        console.log('oops')
        section.innerText = 'Please enter numbers only';
        section.style.color ='red'
    } else {
        // calculate suggested donation amount
        const suggestedDonation = income * 0.02;
        // Show user
        section.innerText = `$${suggestedDonation.toFixed(2)}`;
        section.style.color ='black'
    }
})

document.querySelector('#proto1Form').addEventListener('change', (event) => {
    const section = document.querySelector('#proto1');
    section.innerText = '__________';

});

document.querySelector('#proto2Form').addEventListener('change', (event) => {
    event.preventDefault();
    // get income tier
    const incomeTier = document.querySelector('#incomeTier').value;
    const section = document.querySelector('#proto2');
    if (incomeTier === 'low'){
        section.innerText = 'some amount';
    } else if (incomeTier === 'medium'){
        section.innerText = 'some other amount';
    } else if (incomeTier == 'high'){
        section.innerText = 'some other other amount';
    } else {
        section.innerText = 'Unexpected error.';
    } 
})

document.querySelector('#proto3Form').addEventListener('change', () => {
    // event.preventDefault();
    // get income tier
    const relationship = document.querySelector('#relationship').value;

    const section = document.querySelector('#proto3');
    const form = document.querySelector('#proto3Form')
    const p = document.querySelector('#p');
    const section3 = document.querySelector('#section3')

    section.innerText = '__________';

    if (document.querySelector('#rentForm')){
        document.querySelector('#rentForm').remove()
    }
    if (document.querySelector('#bedroomForm')){
        document.querySelector('#bedroomForm').remove()
    }


    if (relationship === 'rent'){



        const newForm = document.createElement('form');
        newForm.id = 'rentForm'

        const newInput = document.createElement('select');
        newInput.id = 'monthlyRent'

        const newLabel = document.createElement('label')
        newLabel.for = 'monthlyRent';
        newLabel.innerText = 'How much is your rent?';

        const selectionOne = document.createElement('option');
        selectionOne.innerText = ' -- select an option --';
        selectionOne.disabled=true;
        selectionOne.value = true;
        selectionOne.selected = true;

        const low = document.createElement('option');
        low.innerText = 'XXX - X,XXX';
        low.value='low';

        const med = document.createElement('option');
        med.innerText = 'X,XXX - XX,XXX';
        med.value='med';

        newInput.appendChild(selectionOne)
        newInput.appendChild(low);
        newInput.appendChild(med);
        newForm.appendChild(newLabel);
        newForm.appendChild(newInput)
            
        section3.insertBefore(newForm,p)

        document.querySelector('#rentForm').addEventListener('change', (event) => {
            event.preventDefault();
            const value = document.querySelector('#monthlyRent').value;
            if (value === 'low'){
                section.innerText = 'rent option 1';
            } else if (value === 'med'){
                section.innerText = 'rent option 2';
            }
        })

    
    } else if (relationship === 'own'){

        
        const newForm = document.createElement('form');
        newForm.id = 'bedroomForm'


        const newInput = document.createElement('select');
        newInput.id = 'bedrooms'


        const newLabel = document.createElement('label')
        newLabel.for = 'bedrooms';
        newLabel.innerText = 'How many bedrooms?';

        const selectionOne = document.createElement('option');
        selectionOne.innerText = ' -- select an option --';
        selectionOne.disabled=true;
        selectionOne.value = true;
        selectionOne.selected = true;

        const low = document.createElement('option');
        low.innerText = 'X - X';
        low.value='low';

        const med = document.createElement('option');
        med.innerText = 'X - XX';
        med.value='med';

        newInput.appendChild(selectionOne)
        newInput.appendChild(low);
        newInput.appendChild(med);
        newForm.appendChild(newLabel);
        newForm.appendChild(newInput)

        section3.insertBefore(newForm,p)

        document.querySelector('#bedroomForm').addEventListener('change', (event) => {
            event.preventDefault();
            const value = document.querySelector('#bedrooms').value;
            if (value === 'low'){
                section.innerText = 'own option 1';
            } else if (value === 'med'){
                section.innerText = 'own option 2';
            }
        })
    } else {
        section.innerText = 'Unexpected error.';
    } 
})



