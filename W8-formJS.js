
$(document).ready(function () {
    //    console.log($("#DOB").val())
    $('.txtDate').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
    });
    $('.txtDate').val('');

    //datevalidation
    $(".txtDate").keydown(function (e) {
        IsNumeric(this, e.keyCode);
    });

    var isShift = false;
    var seperator = "/";
    function IsNumeric(input, keyCode) {

        if ($(".txtDate").val() == "") {
            $(".dateError").html("Please Enter Date(MM/DD/YYYY)")
            //$('.txtDate').val('');
        }

        if (keyCode == 16) {
            isShift = true;
        }
        //Allow only Numeric Keys.
        if (((keyCode >= 48 && keyCode <= 57) || keyCode == 8 || keyCode <= 37 || keyCode <= 39 || (keyCode >= 96 && keyCode <= 105)) && isShift == false) {
            if ((input.value.length == 2 || input.value.length == 5) && keyCode != 8) {
                input.value += seperator;
            }
            $(".dateError").html("");
            return true;
        }
        else {
            $(".dateError").html("Please Enter Date(MM/DD/YYYY)");
            $('.txtDate').val('');
            return false;
            
        }
    };

    //signature
    
    var canvas = document.getElementById("signature");
    var signaturePad = new SignaturePad(canvas);
    canvas.width = 800;
    canvas.height = 100;
    //$('canvas').attr("placeholder","Sign here");
    

    $('#clear-signature').on('click', function () {
        signaturePad.clear();
    });

    // const signatureBox = document.getElementById("signature-canvas");
    // signatureBox.width = 800;
    // signatureBox.height = 100;

    // const context = signatureBox.getContext("2d");
    // context.font = "16px Arial";
    // context.fillStyle = "#968f8f";
    // context.textAlign = "center";
    // context.fillText("Sign Here", signatureBox.width / 2, signatureBox.height / 2);

    // let isDrawing = false;
    // let x = 0;
    // let y = 0;

    // signatureBox.addEventListener("mousedown", (event) => {

    // isDrawing = true;
    // context.clearRect(0, 0, signatureBox.width, signatureBox.height);
    // x = event.clientX - signatureBox.offsetLeft;
    // y = event.clientY - signatureBox.offsetTop;
    // });

    // signatureBox.addEventListener("mouseup", () => {
    //     isDrawing = false;
    // });

    // signatureBox.addEventListener("mousemove", (event) => {
    //     if (!isDrawing) {
    //         return;
    //     }
    //     context.beginPath();
    //     context.moveTo(x, y);
    //     x = event.clientX - signatureBox.offsetLeft;
    //     y = event.clientY - signatureBox.offsetTop;
    //     context.lineTo(x, y);
    //     context.stroke();
    // });

    // const clearButton = document.getElementById("clear-button");
    // clearButton.addEventListener("click", () => {
    //     context.clearRect(0, 0, signatureBox.width, signatureBox.height);
    //     context.fillText("Sign Here", signatureBox.width / 2, signatureBox.height / 2);
    // });



    $("#submit").click(function () {
        if (!myFunction()) {
            swal("successful");
        }
        else {
            swal("Please Enter all details");
        }
    })
    $("#streetaddressfailss").hide()
    $("#streetaddressline2failss").hide()
    $("#cityfailss").hide()
    $("#statefailss").hide()
    $("#zipfailss").hide()
    $("#birthdayfailss").hide()
    $("#countryyfailss").hide()
    

   
    function myFunction() {
        var valid = false

        valid = namecheck()
        if (valid == true)
            return valid
        valid = countrycheck()
        if (valid == true)
            return valid
        valid = streetcheck()
        if (valid == true)
            return valid
        valid = streetcheck2()
        if (valid == true)
            return valid
        valid = citycheck()
        if (valid == true)
            return valid
        valid = statecheck()
        if (valid == true)
            return valid
        valid = zipcheck()
        if (valid == true)
            return valid
        valid = countryycheck()
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
        valid = birthdaycheck()
        if (valid == true)
            return valid

        valid = blankcheck()
        if (valid == true)
            return valid
        valid = tenthfield()
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
            $("#namefails").html("Please Enter Proper Name")
            valid = true
        }
        var string = /^[a-z A-Z]+$/
        if ($("#name").val().match(string)) {
            $("#namefails").html("")
            valid = false
        }
        else {
            $("#namefails").html("Please Enter Proper Name")
        }
        // alert(valid)
        return valid
    }

    function primenamecheck() {
        var valid = true
        // alert("namecheck")
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
    }
    function countrycheck() {
        var valid = true
        // alert("namecheck")
        if ($("#country").val() == "") {
            $("#countryfails").html("Pelase Enter Proper Country Name")
            valid = true
        }
        var string = /^[a-zA-Z]+$/
        if ($("#country").val().match(string)) {
            $("#countryfails").html("")
            valid = false
        }
        else {
            $("#countryfails").html("Pelase Enter Proper Country Name")
        }
        // alert(valid)
        return valid
    }
    function streetcheck() {
        var valid = true
        // alert("namecheck")
        if ($("#streetaddress").val() == "") {
            $("#streetaddressfails").html("Pelase Enter Proper Streetaddress Name")
            $("#streetaddressfailss").show()
            valid = true
        }
        else {
            $("#streetaddressfailss").hide()
            $("#streetaddressfails").html("")
            valid = false
        }
        // alert(valid)
        return valid
    }
    function streetcheck2() {
        var valid = true
        // alert("namecheck")
        if ($("#streetaddressline2").val() == "") {
            $("#streetaddressline2fails").html("Pelase Enter Proper Streetaddressline2 Name")
            $("#streetaddressline2failss").show()
            valid = true
        }
        else {
            $("#streetaddressline2failss").hide()
            $("#streetaddressline2fails").html("")
            valid = false
        }
        // alert(valid)
        return valid
    }

    function citycheck() {
        var valid = true
        // alert("namecheck")
        if ($("#city").val() == "") {
            $("#cityfails").html("Pelase Enter Proper City Name")
            $("#cityfailss").show()
            valid = true
        }
        var string = /^[a-zA-Z]+$/
        if ($("#city").val().match(string)) {
            $("#cityfailss").hide()
            $("#cityfails").html("")
            valid = false
        }
        else {
            $("#cityfailss").show()
            $("#cityfails").html("Pelase Enter Proper City Name")
        }
        // alert(valid)
        return valid
    }
    function statecheck() {
        var valid = true
        // alert("namecheck")
        if ($("#state").val() == "") {
            $("#statefails").html("Pelase Enter Proper State Name")
            $("#statefailss").show()
            valid = true
        }
        var string = /^[a-zA-Z]+$/
        if ($("#state").val().match(string)) {
            $("#statefailss").hide()
            $("#statefails").html("")
            valid = false
        }
        else {
            $("#statefailss").show()
            $("#statefails").html("Pelase Enter Proper State Name")
        }
        // alert(valid)
        return valid
    }

    function capacitycheck() {
        var valid = true
        // alert("namecheck")
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
        // alert(valid)
        return valid
    }


    // $('.onlynumber').keyup(function () {
    //     this.value = this.value.replace(/[^0-9\.]/g, '');
    // });
    function zipcheck() {
        var valid = true
        if (isNaN($("#zip").val())) {
            $("#zipfailss").show()
            $("#zipfails").html("Enter 6 Digits")
            valid = true
        }
        else {
            if ($("#zip").val().length < 5 || $("#zip").val().length > 5) {
                $("#zipfailss").show()
                $("#zipfails").html("Enter 5 Digits")
            }
            if ($("#zip").val().length == 5) {
                $("#zipfailss").hide()
                $("#zipfails").html("")
                valid = false
            }
        }
        return valid
    }
    function countryycheck() {
        // debugger
        var valid = true
        selectElement = document.querySelector('#countryy');
        output1 = selectElement.value;
        if (output1 == 0) {
            $("#countryyfailss").show()
            $("#countryyfails").html("Please Select Country")
            valid = true;
        }
        else {
            $("#countryyfailss").hide()
            $("#countryyfails").html("")
            valid = false
        }
        return valid

    }

    function ssncheck() {
        var valid = true

        if ($("#SSN").val() == "") {
            $("#ssnvalid").html("Pelase Enter valid Number")
            valid = true
        }
        var string = /^[0-9]{11}$/
        if ($("#SSN").val().match(string)) {
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
        var string = /^[a-zA-Z0-9]+$/
        if ($("#TTN").val().match(string)) {
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
        var string = /^[A-Za-z0-9]+$/
        if ($("#ReferenceNumber").val().match(string)) {
            $("#ReferenceNumbervalid").html("")
            valid = false
        }
        else {
            $("#ReferenceNumbervalid").html("Pelase Enter Number")
        }

        return valid
    }
    function birthdaycheck() {
        var valid = true
        if (!$("#DOB").val()) {
            valid = true
            $("#birthdayfailss").show()
            $("#birthdayfails").html("Pelase choose birthday")
        }
        else {
            valid = false
            $("#birthdayfailss").hide()
            $("#birthdayfails").html("")
        }
        return valid
    }
    function blankcheck() {
        var valid = true
        if ($("#blank").val() == "") {
            valid = true
            $("#balnkfails").html("Pelase Fill Blank")
        }
        else {
            valid = false

            $("#balnkfails").html("")
        }
        return valid
    }
    function tenthfield() {
        var valid = true
        if ($("#blank1").val() == "" || $("#specialRate").val() == "" || $("#blank2").val() == "" || $("#blank3").val() == "") {
            valid = true
            $("#tenthfails").html("Pelase Fill Blank")
        }
        else {
            if (isNaN($("#specialRate").val())) {
                valid = true
                $("#tenthfails").html("Pelase Enter Digits in specialrate")
                if(parseFloat($("#specialRate").val())>100){
                    $("#tenthfails").html("Enter Value less than 100")
                    valid = true
                }
            } else {
                valid = false

                $("#tenthfails").html("")
            }
        }
        return valid
    }


    $("#specialRate").on("keypress keyup blur", function (event) {

        $(this).val($(this).val().replace(/[^0-9\.]/g, ''));
        if( $("#specialRate").val()>100){
            $("#tenthfails").html("Pelase Enter value less tham 100")
            $("#specialRate").val()=""
        }
        if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
            event.preventDefault();
        }
       
    });
    $("#zip").on("keypress keyup blur", function (event) {
   
        if(isNaN($(this).val())){
            $("#zipfailss").show()
            $("#zipfails").html("Enter 5 Digits")
        }
        else{
            $("#zipfails").html("")
        }
    })
    
})
