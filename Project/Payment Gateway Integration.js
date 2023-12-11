document.addEventListener('DOMContentLoaded', function () {
    var stripe = Stripe('pk_test_51OM58KSGdFROryLccHR5GUX5IADvJC6xm9rtKSQz1LQbhn00NJh1vCu9D2uRba3hlpodeMNOIaUW5eF6lhEr2M5K00I973OYz5');
    var elements = stripe.elements();

    // Create an instance of the card Element.
    var card = elements.create('card');

    // Add an instance of the card Element into the `card-element` div.
    card.mount('#card-element');

    // Handle real-time validation errors from the card Element.
    card.addEventListener('change', function (event) {
        var displayError = document.getElementById('card-errors');
        if (event.error) {
            displayError.textContent = event.error.message;
        } else {
            displayError.textContent = '';
        }
    });

    // Handle form submission.
    var form = document.getElementById('payment-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Use the test card number for testing purposes
        stripe.createPaymentMethod({
            type: 'card',
            card: card,
        }).then(function (result) {
            if (result.error) {
                // Show error to the user.
                var errorElement = document.getElementById('card-errors');
                errorElement.textContent = result.error.message;
            } else {
                // Send the payment method ID to your server.
                // This is where you would handle the server-side processing.
                var paymentMethodId = result.paymentMethod.id;
                alert('Payment successful! Payment Method ID: ' + paymentMethodId);

                document.getElementById('confirmation-step').style.display = 'block';
            }
        });
    });
});

