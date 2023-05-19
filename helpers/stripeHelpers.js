const stripe = require('stripe')(process.env.REACT_APP_STRIPE_SECRET_KEY);

module.exports = (stripe) => {
  return {
    chargeCustomer: async (amount, currency, paymentMethod) => {
      try {
        console.log("I am here", amount, currency, paymentMethod)
        const paymentIntent = await stripe.paymentIntents.create({
          amount,
          currency,
          automatic_payment_methods: {enabled: true},
          payment_method: paymentMethod?.id,
          off_session: true,
          confirm: true,
        });
    console.log("*****", stripe)
        return paymentIntent.client_secret;
      } catch (error) {
        throw new Error('Payment intent error : ', error.message);
      } 
    },
    
  };
};
