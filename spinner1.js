process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/  ');
}, 300);

setTimeout(() => {
  process.stdout.write('\r-  ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r\\  ') //exiting the backslash since its a special character
}, 700);

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 900);

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 1100);

setTimeout(() => {
  process.stdout.write('\r/  ');
}, 1300);

setTimeout(() => {
  process.stdout.write('\r-  ');
}, 1500);

setTimeout(() => {
  process.stdout.write('\r\\  ') //exiting the backslash since its a special character
}, 1700);

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 1900);

time = 2000;
setTimeout(() => {
  console.log()
}, time);