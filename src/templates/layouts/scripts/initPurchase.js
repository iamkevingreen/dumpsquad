$(document).ready(function(){
   if ($('#iPhoneImg').length){
        $('.lineSM').css("width", "143px");
        $('#iphoneName').css("width", "143px");
   } else {
        $('.lineSM').css("width", "100%");
        $('#companyTag').css("width", "100%");
   }



    $.fn.placeholder();

    // Get a darker color for the border of the buttons

    var pad = function(num, totalChars) {
    var pad = '0';
    num = num + '';
    while (num.length < totalChars) {
        num = pad + num;
        }
        return num;
    };

    // Ratio is between 0 and 1
    var changeColor = function(color, ratio, darker) {
        var difference = Math.round(ratio * 255) * (darker ? -1 : 1),
            minmax     = darker ? Math.max : Math.min,
            decimal    = color.replace(
                /^#?([a-z0-9][a-z0-9])([a-z0-9][a-z0-9])([a-z0-9][a-z0-9])/i,
                function() {
                    return parseInt(arguments[1], 16) + ',' +
                        parseInt(arguments[2], 16) + ',' +
                        parseInt(arguments[3], 16);
                }
            ).split(/,/);
        return [
            '#',
            pad(minmax(parseInt(decimal[0], 10) + difference, 0).toString(16), 2),
            pad(minmax(parseInt(decimal[1], 10) + difference, 0).toString(16), 2),
            pad(minmax(parseInt(decimal[2], 10) + difference, 0).toString(16), 2)
        ].join('');
    };
    var lighterColor = function(color, ratio) {
        return changeColor(color, ratio, false);
    };
    var darkerColor = function(color, ratio) {
        return changeColor(color, ratio, true);
    };

    // Custom borders for additional social media links on the preview pages

    var socialicons = $('.social_head').size();
    if (socialicons == 2) {
        $('#social1').css("border-bottom", "1px solid #F1F2F2");
    } else if (socialicons == 3) {
        $('#social1').css("border-bottom", "1px solid #F1F2F2");
        $('#social2').css("border-bottom", "1px solid #F1F2F2");
    } else if (socialicons == 4) {
        $('#social1').css("border-bottom", "1px solid #F1F2F2");
        $('#social2').css("border-bottom", "1px solid #F1F2F2");
        $('#social3').css("border-bottom", "1px solid #F1F2F2");
    }

    // custom scaling for social buttons on the iphone

    var socialwraps = $('#iphoneSocial .socialcons').size();
    if (socialwraps == 4) {
        $('#iphoneSocial .socialcons').css("width", "54px");
        $('#sb1').css("margin-right", "4px");
        $('#sb2').css("margin-right", "4px");
        $('#sb3').css("margin-right", "4px");
    } else if (socialwraps ==3) {
        $('#iphoneSocial .socialcons').css("width", "74px");
        $('#sb1').css("margin-right", "4px");
        $('#sb2').css("margin-right", "4px");
    } else if (socialwraps == 2) {
        $('#iphoneSocial .socialcons').css("width", "113px");
        $('#sb1').css("margin-right", "4px");
        $('#iphoneSocial i').css("left", "40%");
    } else if (socialwraps == 1) {
        $('#iphoneSocial .socialcons').css("width", "232px");
        $('#iphoneSocial i').css("left", "46%");
    }

    // Custom Colors

    var coloredText = $('#colorText').css("background-color");
    var internalText = $('#colorText').css("color");
    var borderText = $('#colorText').css("border-color");
    $('#iphoneName').css("color", coloredText);
    $('#website, #contact').css("background", coloredText);
    $('#website, #contact').css("border-color", borderText);
    $('#website, #contact').css("color", internalText);


    // Color Picker for Edit Page

    $('#color_text').spectrum({
        color: "#fff",
        showInput: true,
        showInitial: true,
        change: function(color) {
            $("#colorText, #website, #contact").css("color", color.toHexString());
        }
    });
    $('#color_button').spectrum({
        color: "#7EBF3D",
        showInput: true,
        showInitial: true,
        change: function(color) {
            $("#colorText, #website, #contact").css("background", color.toHexString());
            $("#companyName").css("color", color.toHexString());
            var darkenBack = darkerColor(color.toHexString(), .2);
            $("#colorText, #website, #contact").css("border-color", darkenBack);
        }
    });
        var user = 1;
    // Add Users
    $(".addUser").live("click", function(){
        $('#inviteBlock').append("<div class='infoTriple newTriple triple"+user+"'><div class='info name threeItems floatleft'><div class='infoContent'><input onblur='if (this.placeholder == '') {this.placeholder = 'First Name';}'  onfocus='if (this.placeholder == 'First Name') {this.placeholder = '';}' name='editFirstName"+user+"' id='editFirstName"+user+"' placeholder='First Name'></div></div><div class='info threeItems name floatleft'><div class='infoContent'><input onblur='if (this.placeholder == '') {this.placeholder = 'Last Name';}'  onfocus='if (this.placeholder == 'Last Name') {this.placeholder = '';}' name='editLastName"+user+"' id='editLastName"+user+"' placeholder='Last Name'></div></div><div class='info threeItems floatleft'><div class='infoContent locked-content'><input class='required' onblur='if (this.placeholder == '') {this.placeholder = 'Email';}'  onfocus='if (this.placeholder == 'Email') {this.placeholder = '';}' name='editEmail"+user+"' id='editEmail"+user+"' placeholder='Email'></div></div><div class='info threeItems floatleft'><div class='infoContent'><select class='selectUser0 chzn-select department'><option></option><optgroup label='Overlords'><option>Financial Department</option><option>Business And Research</option><optgroup label='Wizards'><option>Financial Department</option><option>Business And Research</option></select></div></div><div class='info threeItems checkbox floatleft'><div class='infoContent'><input type='checkbox' name='adminUnit' value='no'></div></div><div class='info threeItems delete floatright'><div class='infoContent'><a class='removeUser remove"+user+"'><img src='img/bigX.png' class='removeInvite' alt='Remove Row' /></a></div> </div><div class='clear'></div></div>");

            var config = {
          '.chzn-select'           : {},
        }
        for (var selector in config) {
          $(selector).chosen(config[selector]);
        }

        $("#editEmail"+user).rules("add", {required:true, email:true});

        user++;

    })


    $('.removeUser').live("click", function() {
        $(this).parent().parent().parent().remove();
    })


    // Add buttons
    $("#button1").css("display", "none");
    $("#button2").css("display", "none");
    $("#button3").css("display", "none");
    var opened = "false";
    var button1 = 0;
    var button2 = 0;
    var button3 = 0;
    $(".removeButton").click( function() {
        var clicked = $(this).attr('id');
        if (clicked == "remove3") {
            $("#button3").hide();
            $("#remove2").show();
            $("#button2").css("margin-bottom", "none");
            $("#button2").css("padding-bottom", "none");
            $("#button2").css("border-bottom", "none");
            $("#add2").show();
            button3 = 0;
            if (button3 == 0 && button2 == 0 && button1 == 0) {
                $("#addFirst").show();
            }

        } else if (clicked == "remove2") {
            $("#button2").hide();
            $("#button1").css("margin-bottom", "none");
            $("#button1").css("padding-bottom", "none");
            $("#button1").css("border-bottom", "none");
            $("#remove1").show();
            $("#add1").show();
            button2 = 0;
            if (button3 == 0 && button2 == 0 && button1 == 0) {
                $("#addFirst").show();
            }

        } else if (clicked == "remove1") {
            // $("#addFirst").show();
            $("#button1").hide();
            button1 = 0;
            if (button3 == 0 && button2 == 0 && button1 == 0) {
                $("#addFirst").show();
            }
        }

    });
    $(".addButton").click( function() {

        var clicked = $(this).attr('id');
        if (clicked == "add1") {
            $("#button2").show();
            $("#button1").css("margin-bottom", "20px");
            $("#button1").css("padding-bottom", "12px");
            $("#button1").css("border-bottom", "1px solid #f4f5f5");
            button3 = 1;
            $("#add1").hide();
        } else if (clicked == "add2") {
            $("#button3").show();
            $("#button2").css("margin-bottom", "20px");
            $("#button2").css("padding-bottom", "12px");
            $("#button2").css("border-bottom", "1px solid #f4f5f5");
            button2 = 1;
            $("#add2").hide();
        } else if (clicked == "addFirst") {
            button1 = 1;
            $("#button1").show();
            $("#addFirst").hide();
        }

    });

    // Social buttons

    $("#cardhub .socialwrap").click(function() {
        var clicked = $(this).attr('id');
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("#"+clicked +" .socialcons").css("opacity", ".5");
            $("#"+clicked +" .checkbox img").css("display", "none");
            $(".sb"+clicked).css("display", "none");
            $(".sb"+clicked+" input").removeClass("required");
            $('#limitSocial').css("display", "none");
            var track = $('.socialwrap.active').size();

            if (parseInt(track) == 0) {
                $('#socialHide').css("display", "none");
            }
        } else {
            var track = $('.socialwrap.active').size();
            if (parseInt(track) >= 4) {
                $('#limitSocial').css("display", "block");
            } else {
                $("#socialHide").css("display", "block");
                $("#"+clicked +" .socialcons").css("opacity", "1");
                $(this).addClass("active");
                $("#"+clicked +" .checkbox img").css("display", "inline");
                $(".sb"+clicked).css("display", "block");
                $(".sb"+clicked+" input").addClass("required");
            }
        }
    });

   // CardPack Animations

    $(".cardHeader.details").click(function() {
        $(".cardpackInfo").css("display", "none");
        $(".cardHeader.layout, .cardHeader.logo").removeClass("active")
        $(this).addClass("active");
        $(".cardpackInfo.details").toggle();
         var Height = $("html").height();
         var allHeight = $("#header").height() + $("#main").height() + $("#footer").height() + 80;
           if (Height >= allHeight) {
        //  $('#footer').css("position", "absolute");
         } else {
        //  $('#footer').css("position", "relative");
         }
    });
    $(".cardHeader.layout").click(function() {
        $(".cardpackInfo").css("display", "none");
        $(".cardHeader.details, .cardHeader.logo").removeClass("active")
        $(this).addClass("active");
        $(".cardpackInfo.layout").toggle();

            $('#footer').css("position", "absolute");

    })
    $(".cardHeader.logo").click(function() {
        $(".cardpackInfo").css("display", "none");
        $(".cardHeader.details, .cardHeader.layout").removeClass("active")
        $(this).addClass("active");
        $(".cardpackInfo.logo").toggle();

            $('#footer').css("position", "absolute");

    })
    $(".cardpackInfo input").click(function() {
        $(".cardpackInfo .infoContent").removeClass("active");
        $(".cardpackInfo .editRow").removeClass("active");
        $(".cardpackInfo .rowDouble").removeClass("active");
        $(this).parent().addClass("active");
    });

    $(".passTool").hover(function() {
        $(".tooltipPass").toggle();
    })
    $(".contactTool").hover(function() {
        $(".tooltipContact").toggle();
    })

    // Form validation

    $("#cardStyleList li a").click(function() {
        $("#cardStyleList li a").removeClass("active");
        $(this).addClass("active");
    })
    $('.infoContent .tooltip a.font_style').click(function() {
        $(this).toggleClass('active');
    });
    $("#editForm").validate({
        groups: {
            Address: "editCompanyCountry, editCompanyZip, editCompanyCity, editCompanyAddress, editCompanyState"
        },
        rules: {
            editEmployeeEmail: {
                required: true,
                email: true
            },
            editDetailsEmail: {
                required: true,
                email:true
            },
            lostEmail: {
                required: true,
                email: true
            },
            firstName: {
                required: true
            },
            editEmail: {
                required: true,
                email: true
            },
            editEmail0: {
                required: true,
                email: true
            },
            lastName: {
                required: true
            },
            editAdminEmail: {
                required: true,
                email: true
            },
            editcardhubWeb: {
                required: true,
                url: true
            },
            editcardhubCusSite_1: {
                url: true
            },
            editcardhubCusSite_2: {
                url: true
            },
            editcardhubCusSite_3: {
                url: true
            },
            editDetailsURL: {
                url:true,
                required: true
            },
            editCompanyName: {
                required: true
            },
            editcardhubZip: {
                required: true
            },
            editcardhubCountry: {
                required: true
            },
            login: {
                required: true
            },
            password: {
                required: true
            },
            editcardhubCity: {
                required: true
            },
            editcardhubState: {
                required: true
            },
            editcardhubAddress:  {
                required: true
            },
            editLeadName: {
                required: true
            },
            editLeadEmail: {
                required: true,
                email:true
            },
            editMobilePhone: {
                digits:true,
                required: true
            },
            editDetailsPhone2:  {
                required: true,
                digits: true
            },
            editDetailsPhone1:  {
                required: true,
                digits: true
            },
            editAccessName: {
                required: true
            },
            editAccessEmail: {
                required: true,
                email: true
            },
            editPassword: {
                required: true,
                minlength: 7
            },
            confirmPassword: {
                required: true,
                minlength: 7,
                equalTo: "#editPassword"
            },
            editEmployeeName: {
                required: true
            },
            editEmployeeEmail: {
                required: true,
                email: true
            },
            editcardhubPhone: {
                required: true,
                digits: true
            }

        },
        messages: {
            editEmployeeEmail: {
                required: "<p>&#42;Please specify an email address.",
                email: "<p>&#42;The email address you entered is not properly formatted."
            },
            editEmail: {
                email: "<p>&#42;The email address you entered is not properly formatted."
            },

            editEmail0: {
                email: "Please enter a valid email address."
            },
            editDetailsEmail: {
                required: "<p>&#42;Please specify an email address.",
                email: "<p>&#42;The email address you entered is not properly formatted."
            },
            editcardhubPhone: {
                required: "<p>&#42;Please specify a phone number.",
                digits: "<p>&#42;The phone number you entered is not properly formatted."
            },
            editDetailsPhone1:  {
                required: "<p>&#42;Please specify a phone number.",
                digits: "<p>&#42;The phone number you entered is not properly formatted."
            },
            editDetailsPhone2:  {
                required: "<p>&#42;Please specify a phone number.",
                digits: "<p>&#42;The phone number you entered is not properly formatted."
            },
            lostEmail: {
                required: "<p>&#42;Please specify an email address.",
                email: "<p>&#42;The email address you entered is not properly formatted."
            },
            editAdminEmail: {
                required: "<p>&#42;Please specify an email address.",
                email: "<p>&#42;The email address you entered is not properly formatted."
            },
            editLeadEmail: {
                required: "<p>&#42;Please specify an email address.",
                email: "<p>&#42;The email address you entered is not properly formatted."
            },
            firstName: {
                required: "<p>&#42;Please include your first name."
            },
            lastName: {
                required: "<p>&#42;Please include your last name."
            },
            editcardhubWeb: {
                required: "<p>&#42;Please enter a company URL</p>",
                url: "<p>&#42;Please enter a valid URL</p>"
            },
            editDetailsURL: {
                required: "<p>&#42;Please enter a company URL</p>",
                url: "<p>&#42;Please enter a valid URL</p>"
            },
            editcardhubCusSite_1: {
                required: "<p>&#42;Please enter a company URL</p>",
                url: "<p>&#42;Please enter a valid URL</p>"
            },
            editcardhubCusSite_2: {
                required: "<p>&#42;Please enter a company URL</p>",
                url: "<p>&#42;Please enter a valid URL</p>"
            },
            editcardhubCusSite_3: {
                required: "<p>&#42;Please enter a company URL</p>",
                url: "<p>&#42;Please enter a valid URL</p>"
            },
            editCompanyName: {
                required: "<p>&#42;Please specify a name</p>"
            },
            editAccessName: {
                required: "<p>&#42;Please include your full name."
            },
            editAccessEmail: {
                required: "<p>&#42;Please specify an email address.",
                email: "<p>&#42;The email address you entered is not properly formatted."
            },
            editPassword: {
                required: "<p>&#42;Please provide a password.",
                minlength: "<p>&#42;Your password must be at least 6 characters long."
            },
            confirmPassword: {
                required: "<p>&#42;Please provide a password.",
                minlength: "<p>&#42;Your password must be at least 6 characters long.",
                equalTo: "<p>&#42;Please enter the same password as before."
            },
            editcardhubZip: {
                required: ""
            },
            editcardhubCountry: {
                required: ""
            },
            editcardhubCity: {
                required: ""
            },
            editcardhubState: {
                required: ""
            },
            editcardhubAddress:  {
                required: ""
            },
            login:  {
                required: ""
            },
            password:  {
                required: ""
            },
            editLeadName: {
                required: ""
            },
            editMobilePhone: {
                required: "<p>&#42;Please provide a mobile phone number.",
                digits: "<p>&#42;Please provide a mobile phone number."
            }

        },
     //   showErrors: function() {
     //       $("#errorReport").html("<img src=\"img/alert.png\" class=\"floatleft\" alt=\"\" /><p>Fill in required fields before saving.</p>");
      //      this.defaultShowErrors();
      //    }
        errorContainer: $('#errorReport')
    });

    $('#errorReport').html('<img src=\"img/alert.png\" class=\"floatleft\" alt=\"\" /><p>Fill in required fields before saving.</p>');
        if ($('#inviteBlock').length) {
        var config = {
          '.chzn-select'           : {},
        }
        for (var selector in config) {
          $(selector).chosen(config[selector]);
        }
    }
    // Tooltip for the edit locks

    $('.edit .head img').each(function()
    {
      $(this).qtip(
      {
         content: '<img src="img/adminonly.png" alt="" />',
         position: {
            adjust: { x: -58, y: 0 }
         },
         hide: {
            fixed: true
         },
         style: {
            padding: '0px 0px',
            tip: {
                corner: 'topMiddle',
                size: {
                    x: 0,
                    y: 2
                }
            },
            background: 'none',
            border: {
                width: 1,
                color: 'none'
            },
            name: 'light'
         }
      });
    });

    // selectBox

    if ($('.selectBox').length > 0) {
        $('.selectBox').selectBox();
    }

    if ($('.cf').hasClass('nestable-lists')) {
        var unit = 0;
        $("#addUsers .saveChanges").live("click", function(){
          $('#nestable > ol').append("<li class='dd-item' data-id='"+unit+"''><div class='dd-handle closed'><span class='item item"+unit+"'>Unit Name</span> <span class='dot'>&#149;</span>  <span class='adminSpan admin"+unit+"'>Admin</span></div><div class='edit'>Edit <div class='down-arrow down'></div></div><div class='hidden'><div class='unitEdit'><div class='unitTitle'><label>Unit Title</label><input required='true' onblur='if (this.placeholder == '') {this.placeholder = 'Unit Title';}'  onfocus='if (this.placeholder == 'Unit Title') {this.placeholder = '';}'' name='unitName"+unit+"' class='unitName' id='unitName"+unit+"' placeholder='Unit Title'></div><div class='unitAdmin'> <label>Admin</label><input onblur='if (this.placeholder == '') {this.placeholder = 'Admin';}'  onfocus='if (this.placeholder == 'Admin') {this.placeholder = '';}' name='adminName"+unit+"' class='adminName' id='adminName"+unit+"' placeholder='Admin'></div><a class='removeUnit remove"+unit+"'><img src='img/remove.png' alt=''>Remove</a></div></div></li>");
          unit++;
          unitNames();
          updateOutput();
        })
        $('.removeUnit').live("click", function() {
          $(this).parent().parent().parent().remove();
          updateOutput();
        })

        function unitNames() {
              $( ".dd-item").each(function( index ) {
                $('#unitName'+index).live('keyup', function(e) {
                  $('.item'+index).text($(this).val());
                  });
              });

               $( ".dd-item" ).each(function( index ) {
                $('#adminName'+index).live('keyup', function(e) {
                  $('.admin'+index).text($(this).val());
                  });
              });
        }

        var updateOutput = function(e)
            {
                var list   = e.length ? e : $(e.target),
                    output = list.data('output');
                if (window.JSON) {
                    output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
                } else {
                    output.val('JSON browser support required for this demo.');
                }
            };



        // activate Nestable for list 1
        $('#nestable').nestable({
            group: 1,
            maxDepth: 14
        })
         $('#nestable').on('change', updateOutput);


        updateOutput($('#nestable').data('output', $('#nestable-output')));
    }

    // Set the price for the lamination buttons

    var priceChange = false;
    $('input:radio[name=lamination]').click(function() {

        if ($(this).val() == 'yes') {
            if (priceChange == false) {
                var currentPrice = $(".updatePrice span.num").html();
                var Price = parseFloat(currentPrice);
                Price = Price * 100;
                Price = Price + 400;
                var output = (Price/100).toFixed(2);
                $(".updatePrice span.num").html(output);
                priceChange = true;
            }
        } else if ($(this).val() == 'no') {
            if (priceChange == true) {
                var currentPrice = $(".updatePrice span.num").html();
                var Price = parseFloat(currentPrice);
                Price = Price * 100;
                Price = Price - 400;
                var output = (Price/100).toFixed(2);
                $(".updatePrice span.num").html(output);
                priceChange = false;
            }
        }
    });

    // add toggle animation to the front and back
    // buttons under the cardpack

    $('.buttonToggle .front').click(function() {
       if ($(this).hasClass('active')) {
           $(this).removeClass('active');
           $('.buttonToggle .back').addClass('active');
       } else {
           $(this).addClass('active');
           $('.buttonToggle .back').removeClass('active');
       }
    });
    $('.buttonToggle .back').click(function() {
       if ($(this).hasClass('active')) {
           $(this).removeClass('active');
           $('.buttonToggle .front').addClass('active');
       } else {
           $(this).addClass('active');
           $('.buttonToggle .front').removeClass('active');
       }
    });

    // Create the jquery style drop down boxes as
    // well as listen for changes made in those boxes
    // and update the price with live changes

    var pricePaper = 'standard';
    if ($('.selectBoxPurchase').length > 0) {
        $('.selectBoxPurchase').selectBox()
                    .change( function() {
                        if ($(this).val() == '1000') {
                            var currentPrice = $(".updatePrice span.num").html();
                            var Price = parseFloat(currentPrice);
                            Price = Price * 100;

                            if (Price > 6800) {
                                Price = Price + 8000;
                            } else {
                                Price = Price + 11000;
                            }
                            var output = (Price/100).toFixed(2);
                            $(".updatePrice span.num").html(output);
                        } else if ($(this).val() == '400') {
                            var currentPrice = $(".updatePrice span.num").html();
                            var Price = parseFloat(currentPrice);
                            Price = Price * 100;
                            if (Price > 10000) {
                                Price = Price - 8000;
                            } else {
                                Price = Price + 3000;
                            }
                            var output = (Price/100).toFixed(2);
                            $(".updatePrice span.num").html(output);
                        } else if ($(this).val() == '200') {
                            var currentPrice = $(".updatePrice span.num").html();
                            var Price = parseFloat(currentPrice);
                            Price = Price * 100;
                            if (Price > 10000) {
                                Price = Price - 11000;
                            } else {
                                Price = Price - 3000;
                            }
                            var output = (Price/100).toFixed(2);
                            $(".updatePrice span.num").html(output);
                        }
                        if ($(this).val() == 'Standard') {
                            var currentPrice = $(".updatePrice span.num").html();
                            var Price = parseFloat(currentPrice);
                            Price = Price * 100;
                            if (pricePaper == 'premium') {
                                Price = Price - 400;
                            } else if (pricePaper == 'green') {
                                Price = Price - 200;
                            }
                            pricePaper = 'standard';
                            var output = (Price/100).toFixed(2);
                            $(".updatePrice span.num").html(output);
                        }else if ($(this).val() == 'Premium $4.00') {
                            var currentPrice = $(".updatePrice span.num").html();
                            var Price = parseFloat(currentPrice);
                            Price = Price * 100;
                            if (pricePaper == 'standard') {
                                Price = Price + 400;
                            } else if (pricePaper == 'green') {
                                Price = Price + 200;
                            }
                            pricePaper = 'premium';
                            var output = (Price/100).toFixed(2);
                            $(".updatePrice span.num").html(output);
                        }else if ($(this).val() == 'Green (Recyclable) $2.00') {
                            var currentPrice = $(".updatePrice span.num").html();
                            var Price = parseFloat(currentPrice);
                            Price = Price * 100;
                            if (pricePaper == 'standard') {
                                Price = Price + 200;
                            } else if (pricePaper == 'premium') {
                                Price = Price - 200;
                            }
                            pricePaper = 'green';
                            var output = (Price/100).toFixed(2);
                            $(".updatePrice span.num").html(output);
                        }


                    });
    }

    //dropdown lists for the units pages

    var activeDD = false;

    $('.nestable-lists').live("click", function() {
            if ($('.dd-handle').hasClass('opened')) {
                $('.dd-handle').animate({height: '26px'});
                $('.hidden').animate({height: '0px'});
                $('.dd-handle').removeClass('opened');
                $(".dd-item .edit").removeClass('active');
                $('.dd-handle').addClass('closed');
            }
    })
    $(".unitEdit").live("click", function(){
        e.stopPropagation();
    })
     $(".dd-item .edit").live("click", function(){

        if ($(this).siblings('.dd-handle').hasClass('closed')) {
            $('.dd-handle').addClass('closed');
            $('.dd-handle').animate({height: '26px'});
            $('.hidden').animate({height: '0px'});
            $(".dd-item .edit").removeClass('active');
            $(this).addClass('active');
            $('.dd-handle').removeClass('opened');
            $(this).siblings('.dd-handle').animate({height: '230px'});
            $(this).siblings(".hidden").animate({height: '200px'});
            $(this).siblings('.dd-handle').removeClass('closed');
            $(this).siblings('.dd-handle').addClass('opened');
        } else {
            $('.dd-handle').animate({height: '26px'});
            $('.hidden').animate({height: '0px'});
            $('.dd-handle').addClass('closed');
            $(".dd-item .edit").removeClass('active');
            $('.dd-handle').removeClass('opened');
        }
        e.stopPropagation();
    })



});

$('#tw.socialcons').click(function() {
    $('#tw.socialcons').css("background", "#000");
});

$(window).load(sizeContent);

//Every resize of window
$(window).resize(sizeContent);

//Dynamically assign height

function sizeContent() {
    var Height = $("html").height();
    var allHeight = $("#header").height() + $("#main").height() + $("#footer").height() + 80;
    if (Height >= allHeight) {
    //  $('#footer').css("position", "absolute");
    } else {
    //  $('#footer').css("position", "relative");
    }
    var Width = $("html").width();
    var DocHeight = $('html').height();
        if (DocHeight < 830) {

                $("#cardhub-snapshot").removeClass('hasScrolled');
                $("#cardhub-snapshot").removeClass('bottomScrolled');
        } else {
        }
};

$.fn.scrollBottom = function() {
  return $(document).height() - this.scrollTop() - this.height();
};
/*
$(window).scroll(function () {
    var bottomHeight = $('html').height() - 700;
    var DocHeight = $('html').height();
    var cardpackInfoH = $('.cardpackInfo').height();

    if (cardpackInfoH < 700) {
        if ($(this).scrollTop() > 90) {
            $("#progressBar").stop().animate({ top: "0px", padding: "10px 0 0 0"}, 100);
            $("#progressBar, #cardhub #cardhubHead").css("position", "fixed");
            $("#cardhub #cardhubHead").stop().animate({ top: "80px"}, 100);

            if (DocHeight > 730) {
                $("#cardhub-snapshot").addClass('hasScrolled');
                $("#cardGradient").addClass('hasScrolled');
                if ($(this).scrollBottom() < 40) {
                    if (DocHeight < 860) {
                        $("#cardhub-snapshot").removeClass('hasScrolled');
                        $("#cardhub-snapshot").addClass('bottomScrolled');
                    }
                }
            }


        }  else {
            $("#progressBar").stop().animate({ top: "0px"}, 100);

            $("#progressBar, #cardhub #cardhubHead").css("position", "static");
            $("#cardhub-snapshot").removeClass('hasScrolled');
            $("#cardGradient").removeClass('hasScrolled');
            $("#cardhub-snapshot").removeClass('bottomScrolled');
        }
    }
}); */
(function($) {
  $.fn.placeholder = function() {
    if(typeof document.createElement("input").placeholder == 'undefined') {
      $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
          input.removeClass('placeholder');
        }
      }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
          input.addClass('placeholder');
          input.val(input.attr('placeholder'));
        }
      }).blur().parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
            input.val('');
          }
      })
    });
  }
}
})(jQuery);

$(document).scroll(function() {
    if ($(this).scrollTop() > 210) {
        $(".units #addUsers").addClass('fixed');
        $(".units #finalizeButtons").addClass('fixed');
        $(".units #barBG").css('width', '900px');
    }  else {

        $(".units #barBG").css('width', '0px');
        $(".units #addUsers").removeClass('fixed');
        $(".units #finalizeButtons").removeClass('fixed');
    }

    if ($(this).scrollTop() > 70) {
        $(".bulk #addUsers").addClass('fixed');
        $(".bulk #finalizeButtons").addClass('fixed');
        $(".bulk .infoTriple.fixed").css('position', 'fixed');
        $(".bulk #inviteBlock").css('margin-top', '100px');
        $(".bulk #barBG").css('width', '900px');
    }  else {

        $(".bulk #barBG").css('width', '0px');
        $(".bulk .infoTriple.fixed").css('position', 'initial');
        $(".bulk #inviteBlock").css('margin-top', '40px');
        $(".bulk #addUsers").removeClass('fixed');
        $(".bulk #finalizeButtons").removeClass('fixed');
    }
});
$(window).load(function() {
    $('.choosecolor span').each(function() {
        var color = $(this).text();
        $(this).text('').append('<div style="background-color:' + color + ';">&nbsp;</div>');
    });
});

