function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
wishes = [
    "hdckasjkjgasj",
    "khasgcsasgkxax",
    "jdhiwhdiwsh",
    "sjahsahs",
    "zalzmlazma"
];
document.getElementById("x").addEventListener("click",  function () {
    document.getElementById("Love Wishes").innerHTML = wishes[getRandomInt(9)];
})