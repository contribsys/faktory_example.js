const faktory = require('faktory-worker');

faktory.register('adder', async (a, b) => {
  console.log(`${a} + ${b} = ${a+b}`)
});

faktory.work();
// send INT signal to shutdown gracefully
