const smoothielist = [
    { 'name': 'Green Energy',
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

    alert(textInput);
}
