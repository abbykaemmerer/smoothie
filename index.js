/* eslint-disable func-names */
/* eslint-disable arrow-parens */


/* eslint-disable arrow-body-style */

const smoothieList = [
    {
        'name': 'Green Energy',
        'ingredients': [ 'Coconut milk', 'Rolled oats', 'Coconut flakes', 'Cantaloupe', 'Lime juice', 'Kale' ]
    },
    {
        'name': 'Banana Oats',
        'ingredients': [ 'Coconut water', 'Almond butter', 'Rolled oats', 'Dates', 'Banana', 'Spinach' ]
    },
    {
        'name': 'Mango Lime Chill',
        'ingredients': [ 'Coconut water', 'Lime juice', 'Kale', 'Mango', 'Banana', 'Avocado' ]
    },
    {
        'name': 'Peanut Butter Bliss',
        'ingredients': [ 'Almond milk', 'Rolled oats', 'Peanut butter', 'Honey', 'Kale', 'Banana' ]
    },
    {
        'name': 'Caramel Apple',
        'ingredients': [ 'Almond milk', 'Rolled oats', 'Green apple', 'Pear', 'Avocado', 'Spinach', 'Vanilla extract', 'Cinnamon', 'Dates' ]
    },
    {
        'name': 'Chocolate Cherry',
        'ingredients': [ 'Almond milk', 'Cocoa powder', 'Almond butter', 'Spinach', 'Banana', 'Cherries', 'Coconut oil', 'Honey' ]
    }
];

function displayIngredient(){
    let textInput = document.getElementById('ingredient').value;

    let smoothieWithSelectedIngredient = smoothieList.filter(smoothie => {
        return smoothie.ingredients.includes(textInput);
    });

    let listOfNames = [];


    for(let i = 0; i < smoothieWithSelectedIngredient.length; i++){
        let displayedList = smoothieWithSelectedIngredient[i].name;

        listOfNames.push(displayedList);
        console.log(listOfNames);
    }

    let list = document.getElementById('listWithInput');

    listOfNames.forEach((item) => {
        let li = document.createElement('li');

        li.innerText = item;
        list.appendChild(li);
    });
}

document.getElementById('myBtn').addEventListener('click', function clickClick(){
    displayIngredient();
});
