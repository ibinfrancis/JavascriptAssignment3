document.addEventListener('DOMContentLoaded', function () {
    //student ID and name
    var studentId = '200541828';
    var studentName = 'Ibin Payyappillil Francis Sherly';
    var studentInfoContainer = document.createElement('p');
    studentInfoContainer.textContent = 'Student ID: ' + studentId + ' | Student Name: ' + studentName;
    document.body.appendChild(studentInfoContainer);

    
    document.getElementById('order-button').addEventListener('click', function () {
     
        var pizzaSize = document.getElementById('pizza-size').value;
        var toppings = document.getElementById('toppings').value;
        

        // Create a Pizza object
        var pizza = new Pizza(pizzaSize, toppings );

        
        var pizzaDetailsContainer = document.getElementById('pizza-details-container');
        pizzaDetailsContainer.innerHTML = '<h2>Your Pizza Details:</h2>' +
            '<p>Size: ' + pizza.size + '</p>' +
            '<p>Toppings: ' + pizza.toppings + '</p>';
        
    });

    // Define the Pizza class
    class Pizza {
        constructor(size, toppings ) {
            this.size = size;
            this.toppings = toppings;
           
        }
    }
});
