

$(document).ready(function(){
   if ($('#iPhoneImg').length){
        $('.lineSM').css("width", "143px");
        $('#iphoneName').css("width", "143px");
   } else {
        $('.lineSM').css("width", "100%");
        $('#companyTag').css("width", "100%");
   }

   // selectBox

    if ($('.selectBox').length > 0) {
        $('.selectBox').selectBox();
    }

    if ($('table').hasClass('tablesorter')) {
    	// Employee sort listing

        $.tablesorter.defaults.widgets = ['zebra'];
        $.tablesorter.defaults.sortList = [[0,0]];
        $("table").tablesorter();
    }

    $.fn.placeholder();

    // Modal Load Close

    $('.close_modal').on("click", function() {
        $('html').removeClass('fixed');
    })

 $(function() {
    $( ".datepicker" ).datepicker();
  });
    $(".passTool").hover(function() {
        $(this).siblings(".tooltipPass").toggle();
    })
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
    if ($('#color_text').length) {
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
    }


    // Add buttons
    $("#button1").css("display", "none");
    $("#button2").css("display", "none");
    $("#button3").css("display", "none");
    $(".removeButton").click( function() {
        var clicked = $(this).attr('id');
        if (clicked == "remove3") {
			$("#button3").hide();
            $("#remove2").show();
            $("#button2").css("margin-bottom", "none");
            $("#button2").css("padding-bottom", "none");
            $("#button2").css("border-bottom", "none");
            $("#add2").show();
		} else if (clicked == "remove2") {
            $("#button2").hide();
            $("#button1").css("margin-bottom", "none");
            $("#button1").css("padding-bottom", "none");
            $("#button1").css("border-bottom", "none");
            $("#remove1").show();
            $("#add1").show();
        } else if (clicked == "remove1") {
            $("#button1").hide();
            $("#addFirst").show();
        }

    });
    $(".addButton").click( function() {

        var clicked = $(this).attr('id');
		if (clicked == "add1") {
			$("#button2").show();
            $("#button1").css("margin-bottom", "20px");
            $("#button1").css("padding-bottom", "12px");
            $("#button1").css("border-bottom", "1px solid #f4f5f5");
            $("#add1").hide();
		} else if (clicked == "add2") {
            $("#button3").show();
            $("#button2").css("margin-bottom", "20px");
            $("#button2").css("padding-bottom", "12px");
            $("#button2").css("border-bottom", "1px solid #f4f5f5");
            $("#add2").hide();
        } else if (clicked == "addFirst") {
            $("#button1").show();
            $("#addFirst").hide();
        }

    });

    // Social buttons

    $(".socialwrap").click(function() {
        var clicked = $(this).attr('id');
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("#"+clicked +" .socialcons").css("opacity", ".5");
            $("#"+clicked +" .checkbox img").css("display", "none");
            $(".sb"+clicked).css("display", "none");
            $(".sb"+clicked+" input").removeClass("required");
            $('#limitSocial').css("display", "none");
            var track = $('.active').size();
            if (parseInt(track) == 0) {
                $('#socialHide').css("display", "none");
            }
        } else {
            var track = $('.active').size();
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




    // Form validation

if ($('#editForm').length) {
    $("#editForm").validate({


        groups: {
            Address: "editCompanyCountry, editCompanyZip, editCompanyCity, editCompanyAddress, editCompanyState"
        },
        rules: {
            editEmployeeEmail: {
                required: true,
                email: true
            },
            registerEmail: {
                required: true,
                email: true
            },
            editCampaignName: {
                required: true
            },
            editCampaignURL: {
                required: true,
                url: true
            },
            lostEmail: {
                required: true,
                email: true
            },
            editEmployeeName: {
                required: true
            },
            editAdminEmail: {
                required: true,
                email: true
            },
            editCompanyWeb: {
                required: true,
                url: true
            },
            editCompanyCusSite_1: {
                url: true
            },
            editCompanyCusSite_2: {
                url: true
            },
            editCompanyCusSite_3: {
                url: true
            },
            editCompanyName: {
                required: true
            },
            editCompanyZip: {
                required: true
            },
            editCompanyCountry: {
                required: true
            },
            login: {
                required: true
            },
            password: {
                required: true
            },
            editCompanyCity: {
                required: true
            },
            editCompanyState: {
                required: true
            },
            editCompanyAddress:  {
                required: true
            },
			editLeadName: {
				required: true
			},
			editLeadEmail: {
                required: true,
				email:true
			},
			editLeadPhone: {
				digits:true
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
                minlength: 6
            },
            confirmPassword: {
                required: true,
                minlength: 6,
                equalTo: "#editPassword"
            },
            editEmployeeName: {
                required: true
            },
            editEmployeeEmail: {
                required: true,
                email: true
            },
            editJobTitle: {
                required: true
            }

        },
        messages: {
            editEmployeeEmail: {
                required: "<p>&#42;Please specify an email address.",
                email: "<p>&#42;The email address you entered is not properly formatted."
            },
            registerEmail: {
                required: "<p>&#42;Please specify an email address.",
                email: "<p>&#42;The email address you entered is not properly formatted."
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
            editEmployeeName: {
                required: "<p>&#42;Please include your full name."
            },
            editJobTitle: {
                required: "<p>&#42;Please enter a job title."
            },
            editCampaignName: {
                required: "<p>&#42;Please enter a campaign name."
            },
            editCampaignURL: {
                required: "<p>&#42;Please enter a company URL</p>",
                url: "<p>&#42;Please enter a valid URL</p>"
            },
            editCompanyWeb: {
                required: "<p>&#42;Please enter a company URL</p>",
                url: "<p>&#42;Please enter a valid URL</p>"
            },
            editCompanyCusSite_1: {
                required: "<p>&#42;Please enter a company URL</p>",
                url: "<p>&#42;Please enter a valid URL</p>"
            },
            editCompanyCusSite_2: {
                required: "<p>&#42;Please enter a company URL</p>",
                url: "<p>&#42;Please enter a valid URL</p>"
            },
            editCompanyCusSite_3: {
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
                equalTo: "<p>&#42;Please enter the same password as above."
            },
            editCompanyZip: {
                required: ""
            },
            editCompanyCountry: {
                required: ""
            },
            editCompanyCity: {
                required: ""
            },
            editCompanyState: {
                required: ""
            },
            editCompanyAddress:  {
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
			editLeadPhone: {
				digits: ""
			}

        },
     //   showErrors: function() {
     //       $("#errorReport").html("<img src=\"img/alert.png\" class=\"floatleft\" alt=\"\" /><p>Fill in required fields before saving.</p>");
      //      this.defaultShowErrors();
      //    }
        errorContainer: $('#errorReport')
    });
    $('#errorReport').html('<img src=\"img/alert.png\" class=\"floatleft\" alt=\"\" /><p>Fill in required fields before saving.</p>');
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

    // admin tools


    var config = {
      '.chzn-select'           : {},
    }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }

    //iphone social button widths
    //determines the width of the buttons depending on how many are enabled


});

$('#tw.socialcons').click(function() {
    $('#tw.socialcons').css("background", "#000");
});

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

$(window).load(sizeContent);

//Every resize of window
$(window).resize(sizeContent);

//Dynamically assign height

function sizeContent() {
    var Height = $("html").height();
    var allHeight = $("#header").height() + $("#main").height() + $("#footer").height() + 100;
    if (Height >= allHeight) {
		$('#footer').css("position", "fixed");
	} else {
		$('#footer').css("position", "relative");
	}
};


