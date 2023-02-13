
$(document).ready(function () {


    $('.txtDate').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        dateFormat: 'mm/dd/yy'
    });
    $('.txtDate').val('');
    $('.txtDate').attr("placeholder", "MM/DD/YYYY");


    //signature
    const signatureBox = document.getElementById("signature-canvas");
    signatureBox.width = 800;
    signatureBox.height = 100;

    const context = signatureBox.getContext("2d");
    context.font = "16px Arial";
    context.fillStyle = "#968f8f";
    context.textAlign = "center";
    context.fillText("Sign Here", signatureBox.width / 2, signatureBox.height / 2);

    let isDrawing = false;
    let x = 0;
    let y = 0;

    signatureBox.addEventListener("mousedown", (event) => {
        debugger
    isDrawing = true;
    context.clearRect(0, 0, signatureBox.width, signatureBox.height);
    x = event.clientX - signatureBox.offsetLeft;
    y = event.clientY - signatureBox.offsetTop;
    });

    signatureBox.addEventListener("mouseup", () => {
    isDrawing = false;
    });

    signatureBox.addEventListener("mousemove", (event) => {
    if (!isDrawing) {
        return;
    }
    context.beginPath();
    context.moveTo(x, y);
    x = event.clientX - signatureBox.offsetLeft;
    y = event.clientY - signatureBox.offsetTop;
    context.lineTo(x, y);
    context.stroke();
    });

    const clearButton = document.getElementById("clear-button");
    clearButton.addEventListener("click", () => {
    context.clearRect(0, 0, signatureBox.width, signatureBox.height);
    context.fillText("Sign Here", signatureBox.width / 2, signatureBox.height / 2);
    });



    

})
