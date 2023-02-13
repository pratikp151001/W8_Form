
$(document).ready(function () {

    //$('.dateError').hide();
    $('.txtDate').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
       
        
    });
    $('.txtDate').val('');
    //$('.txtDate').attr("placeholder", "MM/DD/YYYY");

    $(".txtDate").keydown(function (e) {
        IsNumeric(this, e.keyCode);
    });
    var isShift = false;
    var seperator = "/";
    function IsNumeric(input, keyCode) {
        if (keyCode == 16) {
            isShift = true;
        }
        //Allow only Numeric Keys.
        if (((keyCode >= 48 && keyCode <= 57) || keyCode == 8 || keyCode <= 37 || keyCode <= 39 || (keyCode >= 96 && keyCode <= 105)) && isShift == false) {
            if ((input.value.length == 2 || input.value.length == 5) && keyCode != 8) {
                input.value += seperator;
            }
            return true;
        }
        else {
            return false;
        }
    };
    
    // $('.txtDate').keyup(function(){
            
    //         var myDate = $('.txtDate').val();
    //         var dateMMDDYYYRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{4}$/ ;
    //         if(dateMMDDYYYRegex.test(myDate)){
    //             return true;
    //         }else{
    //            $('.dateError').text('Enter Valid Date');
    //         }
         
    // })

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



    $("#submit").click(function(){
        if(!myFunction()){
            swal("successful");
        }
        else{
            swal("Please Enter all details");
        }
    })
    function myFunction() { 
        var valid=false
        
            valid= namecheck()
            if(valid==true)
                return valid
            
                valid= primenamecheck()
                if(valid==true)
                    return valid

                    valid= capacitycheck()
                    if(valid==true)
                        return valid
    

    }
    function namecheck(){
        var valid=true
        // alert("namecheck")
        if($("#name").val()==""){
        $("#namefails").html("Please Enter Proper Name")
        valid=true
        }
        var string=/^[a-z A-Z]+$/
        if($("#name").val().match(string)){
        $("#namefails").html("")
        valid=false
        }
        else{
            $("#namefails").html("Please Enter Proper Name")
        }
        // alert(valid)
        return valid
    }

    function primenamecheck(){
        var valid=true
        // alert("namecheck")
        if($("#printname").val()==""){
        $("#printnamevalid").html("Pelase Enter valid Name")
        valid=true
        }
        var string=/^[a-z A-Z]+$/
        if($("#printname").val().match(string)){
        $("#printnamevalid").html("")
        valid=false
        }
        else{
            $("#printnamevalid").html("Pelase Enter Name")
        }
        // alert(valid)
        return valid
    }

    function capacitycheck(){
        var valid=true
        // alert("namecheck")
        if($("#capacity").val()==""){
        $("#capacityvalid").html("Pelase Enter valid Name")
        valid=true
        }
        var string=/^[a-z A-Z]+$/
        if($("#capacity").val().match(string)){
        $("#capacityvalid").html("")
        valid=false
        }
        else{
            $("#capacityvalid").html("Pelase Enter Name")
        }
        // alert(valid)
        return valid
    }

   
    $('.onlynumber').keyup(function () { 
        this.value = this.value.replace(/[^0-9\.]/g,'');
    });
})
