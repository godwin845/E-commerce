document.addEventListener('DOMContentLoaded', function () {
    // JavaScript logic for the checkout process
});

function proceedToPayment() {
    document.getElementById('shipping-step').style.display = 'none';
    document.getElementById('payment-step').style.display = 'block';
}

function confirmOrder() {
    document.getElementById('payment-step').style.display = 'none';
    document.getElementById('confirmation-step').style.display = 'block';

    console.log("Order Confirmed!");

}
