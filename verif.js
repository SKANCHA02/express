let day = new Date().getDay();
let hours = new Date().getHours();

console.log(hours);

function verifis(req, res,next) {
    if (day > 0 && day < 6 && hours > 8 && hours < 17 ) next();
    else

        res.send(
            `<h1>Welcome service closed now....,service open 8h---17h/ Monday---fiday </h1>`
        );
        
}

module.exports = verifis;