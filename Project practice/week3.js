let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log(`Count: ${count}`);
  
  if (count === 5) {
    clearInterval(intervalId);
    console.log('Interval cleared after 5 counts.');
  }
}, 1000);
console.log('Interval started. It will log every second until count reaches 5.');