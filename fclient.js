function randInt(min=0, max=1000) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const faktory = require('faktory-worker');

async function createJob() {
  const client = await faktory.connect();
  const jid = await client.job('adder', randInt(), randInt()).push();
  await client.close();
  console.log("Job", jid)
  setTimeout(createJob, 1000)
}

setTimeout(createJob, 1000)
