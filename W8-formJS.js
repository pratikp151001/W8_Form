
$(document).ready(function () {


    $('.txtDate').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        dateFormat: 'mm/dd/yy'
    });
    $('.txtDate').val('');
    $('.txtDate').attr("placeholder", "MM/DD/YYYY");


    
    $('.txtDate').keydown(function(){
            
            var myDate = $('.txtDate').val();
            var dateMMDDYYYRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;
            if(dateMMDDYYYRegex.test(myDate)){
              
               $('.dateError').text('');
               return true;
            }else{
               $('.dateError').text('Enter Valid Date');
            }
         
    })

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
    }
    function namecheck(){
        var valid=true
        // alert("namecheck")
        if($("#name").val()==""){
        $("#namefails").html("Please Enter Proper Name")
        valid=true
        }
        var string=/^[a-zA-Z]+$/
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
})
