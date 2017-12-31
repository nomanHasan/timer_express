const endDate = new Date('6 Jan, 2018');
const startDate = new Date('25 Dec, 2017');
let now = new Date();

const getPercentage = (startDate, endDate, now) => {
    return (now - startDate) / (endDate - startDate) * 100
}


const getDays = date => Math.floor(date / (1000 * 60 * 60 * 24 ));

const getHours = date => Math.floor((date % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60));

const getTotalHours = date => Math.floor((date) / (1000 * 60 * 60 ));

const getMinutes = date => Math.floor((date % (1000 * 60 * 60 ) )/ (1000 * 60 ));

const getSeconds = date => Math.floor((date % (1000 * 60 )) / (1000));

const getMilliSeconds = date => Math.floor(date % (1000 * 60)) % 1000;


let difference = endDate  - now;

var watch = document.querySelector('#watch');

var bar = document.querySelector('#bar');

const getTime =  time => ({
    days : getDays(time),
    hours : getHours(time),
    totalHours : getTotalHours(time),
    minutes: getMinutes(time),
    seconds : getSeconds(time),
    milliseconds: getMilliSeconds(time),
})


setInterval(() => {
    let now = new Date();
    let time = getTime(endDate  - now);
    watch.innerHTML = `${time.totalHours} Hours ${time.minutes} Minutes ${time.seconds} Seconds Remaining !`
    bar.style.width = `${getPercentage(startDate, endDate, now)}%`
}, 1)