let userInput = document.getElementById("userInput");


userInput.addEventListener("change", function() {
    let paraValue = document.getElementById("para").value;
    paraValue = paraValue.split(' ');
    userTypeValue = userInput.value;
    console.log("clicked");
    document.getElementById("print").innerText = `${userTypeValue}`
    document.getElementById("print").style.color = "blue";
    if (userTypeValue == para) {
        alert("good")
    }
    console.log(para);
})