// let sendData = document.getElementById("sendData");


// sendData.addEventListener("submit", function (e) {
//     e.preventDefault();
//     let temp = {};
//     let userInput = document.getElementById("userInput").value;
//     let imgURL = URL.createObjectURL(e.target.files[0]);
//     let pdfURL = URL.createObjectURL(e.target.files[0]);

//     if (userInput.value === imgURL) {
//         show.innerHTML = `<img src= ${imgURL} alt="">`
//     } else if (userInput.pdfURL === pdfURL) {
//         show.innerHTML = `<video src=${pdfURL} autoplay ></video>`
//     } else {
//         show.innerHTML = `<p>{userInput.value}</p>`
//     }
// })
function handleSubmit() {
    let userInput = document.getElementById("userInput").value;
    let show = document.getElementById("show");
    show.innerHTML = '';

    if (userInput.match(/\.(jpeg|jpg|png|gif)$/i)) {
        show.innerHTML = `<img src= "${userInput}">`;
    } else if (userInput.match(/\.(mp4|webm)$/i)) {
        show.innerHTML = `<video src="${userInput}" autoplay ></video>`;
    } else {
        show.innerHTML = `<p>${userInput}</p>`
    }
}