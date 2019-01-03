var script_url = "https://script.google.com/macros/s/AKfycbzsrvl58xhP6pxBk4PwR7h-ICrr5QvB_6EnmXPxHFABIGZ5YDI/exec";
    function insert_value() {
        var email = $("#email").val();
        var url = script_url + "?callback=ctrlq" + "&email=" + email + "&action=insert";
        var request = jQuery.ajax({
            crossDomain: true,
            url: url,
            method: "GET",
            dataType: "jsonp"
        });
        $("#resetForm").reset();
    }
    function ctrlq(e) {
        alert('Congrats! Registered Successfully')
    }