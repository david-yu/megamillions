function randomInt(low, high) {
  // return number between low(inclusive) and high(exclusive)
  return Math.floor(Math.random() * (high - low) + low);
}

function sortNumber(a, b) {
  return a - b;
}

function generateTicket() {
  ticket = []
  // create balls within the simulator
  numbers = []
  for(j = 1; j < 76; j++) {
    numbers.push(j);
  }

  // select balls from the simulator and do not replace
  for(j = 0; j < 5; j++) {
    idx = randomInt(0,numbers.length);
    ticket.push(numbers[idx]);
    numbers.splice(idx, 1);
  }

  // sort numbers before adding moneyball
  ticket.sort(sortNumber);

  // select final moneyball number from 1 to 15
  ticket.push(randomInt(1,16));
  console.log(ticket);
}

function generateTickets(num) {
  for(i = 0; i < num; i++) {
    generateTicket();
  }
}

var args = process.argv.slice(2);
generateTickets(args[0]);
