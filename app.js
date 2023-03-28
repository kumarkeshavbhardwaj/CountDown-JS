const endDate = "31 March 2023 12:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll('input');



clock();


function clock () {
    const end = new Date(endDate);
    const now = new Date();


    const diff = (end - now)/1000;

    if (diff <0) return;
    //date is below
    inputs[0].value = Math.floor(diff/3600/24);

    //hours is below
    inputs[1].value = Math.floor((diff/3600) % 24);

    //minutes is below
    inputs[2].value = Math.floor((diff/60) % 60);

    //seconds is below
    inputs[3].value = Math.floor(diff%60);

    setInterval(() => {
        clock();
    }, 1000);


}