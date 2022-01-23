const time = document.querySelector("#time");

function onClock(e) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,"0");
    const miniutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
    time.innerText = `${hours}:${miniutes}:${seconds}`;
}

setInterval(onClock, 1000);