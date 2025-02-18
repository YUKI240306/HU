function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
wishes = [
    "Happy Valentine’s Day! May your day be filled with love, laughter, and special moments with those who mean the most to you. 💖",
    "Wishing you a Valentine’s Day filled with sweet moments, warm hugs, and endless love. You deserve all the happiness in the world! ❤️",
    "On this day of love, I just want to remind you how special you are. May your heart be filled with love today and always! 💕",
    "Happy Valentine’s Day! May your life be surrounded by love, joy, and beautiful memories with the ones you cherish.",
    "Sending you all my love on this special day! May your heart be full, your smile bright, and your day as wonderful as you are. 💘"
];
document.getElementById("x").addEventListener("click",  function () {
    document.getElementById("Love Wishes").innerHTML = wishes[getRandomInt(4)];
})