const { StaticPool } = require('node-worker-threads-pool');

let nums = [20, 5, 25, 40];

// Create a static worker pool with 8 workers
const pool = new StaticPool({
    size: 5,
    task: './worker.js'
})
nums.map(num => {
    pool.exec({ num: num }).then(result => [
        console.log(`${result.num}th Fibonacci Number: ${result.fib}`)
    ]);
})


console.log("Execution in the parent thread complete");