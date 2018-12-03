//Globals
var ti_TIE2 = 'false';
function TIE2Changes(){

    //Adding class to the email row for easier targeting
    $("input[name='EmailAddress']").parent().addClass("ti-Email");

    //Adding a class to the comments row for easier targeting
    $("textarea[name='Comments']").parent().addClass("ti-Comments");

    //Moving the comments section to the bottom of the form
    $(".ti-Comments").insertAfter(".ti-Email");
    $("label[for='Comments']").insertBefore("textarea[name='Comments']");

    //Wrapping the submit btn with a row so it can be center
    var ti_btnContainer = $("body").find(".g-recaptcha").parent().next().next();
    $(ti_btnContainer).wrap("<div class='row' id='tiContainer'></div>");

}

function TIE2Tracking(){

}

vwo_$(document).ready(function(){
    if ( ti_TIE2 == 'false' ){
        TIE2Changes();
        TIE2Tracking();
        ti_TIE2 = 'true';
    } 
});


