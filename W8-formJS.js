
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



    $("#submit").click(function () {
        if (!myFunction()) {
            swal("successful");
        }
        else {
            swal("Please Enter all details");
        }
    })
    function myFunction() {
        var valid = false

        valid = namecheck()
        if (valid == true)
            return valid


        valid = ssncheck()
        if (valid == true)
            return valid

        valid = ttncheck()
        if (valid == true)
            return valid

        valid = ReferenceNumbercheck()
        if (valid == true)
            return valid

        valid = primenamecheck()
        if (valid == true)
            return valid

        valid = capacitycheck()
        if (valid == true)
            return valid




    }
    function namecheck() {
        var valid = true
        // alert("namecheck")
        if ($("#name").val() == "") {
            $("#namefails").html("Pelase Enter Proper Name")
            valid = true
        }
        var string = /^[a-z A-Z]+$/
        if ($("#name").val().match(string)) {
            $("#namefails").html("")
            valid = false
        }
        else {
            $("#namefails").html("Pelase Enter Proper Name")
        }
        // alert(valid)
        return valid
    }


    function ssncheck() {
        var valid = true
       
        if ($("#SSN").val() == "") {
            $("#ssnvalid").html("Pelase Enter valid Number")
            valid = true
        }
        var number = /^[0-9]+$/
        if ($("#SSN").val().match(number)) {
            $("#ssnvalid").html("")
            valid = false
        }
        else {
            $("#ssnvalid").html("Pelase Enter Number")
        }
        
        return valid
    }

    function ttncheck() {
        var valid = true
       
        if ($("#TTN").val() == "") {
            $("#ttnvalid").html("Pelase Enter valid Number")
            valid = true
        }
        var number = /^[0-9]+$/
        if ($("#TTN").val().match(number)) {
            $("#ttnvalid").html("")
            valid = false
        }
        else {
            $("#ttnvalid").html("Pelase Enter Number")
        }
       
        return valid
    }

    function ReferenceNumbercheck() {
        var valid = true
        
        if ($("#ReferenceNumber").val() == "") {
            $("#ReferenceNumbervalid").html("Pelase Enter valid Number")
            valid = true
        }
        var number = /^[0-9]+$/
        if ($("#ReferenceNumber").val().match(number)) {
            $("#ReferenceNumbervalid").html("")
            valid = false
        }
        else {
            $("#ReferenceNumbervalid").html("Pelase Enter Number")
        }
       
        return valid
    }



    function primenamecheck() {
        var valid = true
        
        if ($("#printname").val() == "") {
            $("#printnamevalid").html("Pelase Enter valid Name")
            valid = true
        }
        var string = /^[a-z A-Z]+$/
        if ($("#printname").val().match(string)) {
            $("#printnamevalid").html("")
            valid = false
        }
        else {
            $("#printnamevalid").html("Pelase Enter Name")
        }
       
        return valid
    }

    function capacitycheck() {
        var valid = true
        
        if ($("#capacity").val() == "") {
            $("#capacityvalid").html("Pelase Enter valid Name")
            valid = true
        }
        var string = /^[a-z A-Z]+$/
        if ($("#capacity").val().match(string)) {
            $("#capacityvalid").html("")
            valid = false
        }
        else {
            $("#capacityvalid").html("Pelase Enter Name")
        }
        
        return valid
    }

    
})
