const jsonServer  = require('json-server')
const process = require('process');

const server      = jsonServer.create()
const router      = jsonServer.router(process.argv[2])
const middlewares = jsonServer.defaults()

function random (low, high) {
    return parseInt(Math.random() * (high - low) + low);
}

function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

server.use(middlewares)

server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    const randomNumber = random(1,15);
    console.log(randomNumber);

    switch (randomNumber) {
        case 3:
            let randomWait = random(2000, 7000);
            console.log("Slow request: " + randomWait);
            sleep(randomWait).then(next);
            return;

        case 11:
            throw "Oh no! Something broke!";
    }
    next()
})

// Use default router
server.use(router)
server.listen(3001, () => {
    console.log('JSON Server is running')
})