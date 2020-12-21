var products = [
  { number: 1, price: 100, name: 'Orange juice' },
  { number: 2, price: 200, name: 'Soda' },
  { number: 3, price: 150, name: 'Chocolate snack' },
  { number: 4, price: 250, name: 'Cookies' },
  { number: 5, price: 180, name: 'Gummy bears' },
  { number: 6, price: 500, name: 'Condoms' },
  { number: 7, price: 120, name: 'Crackers' },
  { number: 8, price: 220, name: 'Potato chips' },
  { number: 9, price: 80, name: 'Small snack' }
];

function vendingMachine(products, coins, number) {
  var changeCoins = [500, 200, 100, 50, 20, 10];
  var errorMessage = 'OOPS! Not enough money';
  var product = products[number - 1]
  var name = product['name'];
  var diff = coins - product['price'];
  var change = [];

  if (diff < 0) return errorMessage;

  changeCoins.forEach(function(coin) {
    if (diff >= coin) {
      change.push(coin);
      diff = diff - coin
    }
  });

  return { product: name, change: change };
};

// vendingMachine(products, 400, 9); => { product: "Small snack", change: [200,100,20] }
// vendingMachine(products, 300, 3); => { product: "Chocolate snack", change: [100,50] }
