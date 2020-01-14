process.stdout.write('hello from spinner2.js... \rheyyy\n');

let symbols = ["\r|  ", "\r/  ", "\r-  ", "\r\\  "]
let increment = 0;
for (const char of symbols) {
  
  setTimeout(() => {
    process.stdout.write(char)
  }, increment)

  increment += 100;
}

time = 1000;
setTimeout(() => {
  console.log()
}, time);