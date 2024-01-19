$('.banner_pagination').slick({
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: 3000,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.Generation_Firewalls_slider').slick({
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow:1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: 3000,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
$('.Happy_Customers_slider').slick({
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow:2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: 3000,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
// --------------table_tab_button-------------------------------
function tab_function(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab_links");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
//---------------------------End table_tab_button------------------------


$(document).ready(function () {
    $.validator.addMethod(
        'validPhone',
        function (value, element) {
            return this.optional(element) || /^[6-9][0-9]{9}$/.test(value);
        },
        'Valid Number only please'
    );

    $("#cisco_form").validate({
        rules: {
            name: 'required',
            phone: {
                required: true,

            },
            email: {
                required: true,

            },
            Select_plan:{
                required:true,
            }

        },
        messages: {
            name: "Name Field is Required",
            email: {
                required: "Email Field is Required",

            },
            phone: {
                required: "Mobile No. field is Required",
            },
            Select_plan:{
                required: ""
            }
        },

        errorPlacement: function (error, element) {
            // Custom placement of error messages
            if (element.attr("name") === "name") {
                element.attr("placeholder", error.text());
            } else if (element.attr("name") === "email") {
                element.attr("placeholder", error.text());
            } else if (element.attr("name") === "phone") {
                element.attr("placeholder", error.text());
            } else if (element.attr("name") === "Select_plan") {
                element.attr("placeholder", error.text());
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function (form, e) {
            initiateOTPFormSubmit(form, e);
        }
    });

});