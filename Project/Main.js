// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code goes here
    alert("Welcome to our Perfume website!");
});

document.addEventListener('DOMContentLoaded', function () {

    // Check if the user has closed the modal before
    if (!localStorage.getItem('promoModalClosed')) {
        showModal();
    }
});

function showModal() {
    var modal = document.getElementById('promoModal');
    modal.style.display = 'block';
}

function closeModal() {
    var modal = document.getElementById('promoModal');
    modal.style.display = 'none';
    // Set a flag in local storage to remember that the user closed the modal
    localStorage.setItem('promoModalClosed', 'true');
}

document.addEventListener('DOMContentLoaded', function () {
    // Sample product data, replace this with your actual product data
    const products = [
        { id: 1, name: 'Product 1', price: 29.99 },
        { id: 2, name: 'Product 2', price: 49.99 },
        { id: 3, name: 'Product 3', price: 39.99 },
        { id: 4, name: 'Product 4', price: 59.99 },
        // Add more products as needed
    ];

    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });

    // Function to add product to the cart (replace this with your actual cart logic)
    window.addToCart = function (productId) {
        alert(`Product with ID ${productId} added to the cart!`);

        // Update the URL to point to the desired page (replace 'AnotherPage.html' with your desired page)
        window.location.href = 'Shipping.html';
    };
});

    document.addEventListener('DOMContentLoaded', function () {
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });

    function login() {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
    
        // Check login credentials (replace with your authentication logic)
        if (email === 'user@example.com' && password === 'password') {
            alert('Login successful!');
        } else {
            alert('Invalid credentials. Please try again.');
        }
    }
    
    function register() {
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
    
        // Store user data (replace with your registration logic)
        // For simplicity, using localStorage in this example
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = { name, email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    
        alert('Registration successful! Please login.');

    }

    