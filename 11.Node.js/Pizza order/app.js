const EventEmitter = require('events');
const pizzaEmitter = new EventEmitter();

const listener1 = () => {
    console.log('Order processed');
  };
  
  const listener2 = () => {
    console.log('You get fries');
  };

  
pizzaEmitter.on('order-pizza', listener1);
pizzaEmitter.on('order-pizza', listener2);

const order = () => {
    console.log('Ordering pizza...');
    pizzaEmitter.emit('order-pizza');
  };

 order();

