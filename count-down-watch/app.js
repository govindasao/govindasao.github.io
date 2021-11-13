//const countDownData = new Date("Mon DD YYYY HH:MM:SS");

const dateTime = document.querySelector('input[name="datetime"]').value;
console.log(dateTime);
const countDownData = new Date(dateTime).getTime();
const div = document.querySelector("h1");
//div.innerHTML = countDownData;

//current date

const x = setInterval(() => {



        const currentDate = new Date().getTime();

        //difference between time

        const difference = countDownData - currentDate;

        //time into days hours, minutes and seconds conversion

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        const seconds = Math.floor((difference % (1000 * 60) / 1000));

        div.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";



        if (difference < 0) {
            clearInterval(x);

            div.innerHTML = "Congrats!!!"
        }

    },
    1000);