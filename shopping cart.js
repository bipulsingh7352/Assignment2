let Cart = {
    itemName: "Cap",
    quantity: 1,
    price: 9999
  };
  
  Cart.quantity = 5;
  let total_price = Cart.quantity * Cart.price;
  Cart.discount = "10%";
  
  console.log(Cart);
  console.log(`Total price: ${total_price}`);  