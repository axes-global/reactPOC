// fetching from local storage
var c = new Backbone.Collection();
c.localStorage = new Backbone.LocalStorage("credentials");
c.fetch();

// for sign up
$('.app').on('submit', '.signup-form', function() {
    var subscribe = $.mockjax({
        url: "subscribe",
        responseTime: 1000,
        responseText: "Subscribe"
    });

    $.ajax({
        url: "subscribe",
        success: function(response) {
            $(".signup-form .msg-subscribe").css('display', 'block');
        },
        error: function(response) {
            $(".signup-form .msg-subscribe").css('display', 'none');
        }
    }).done(function(response) {
        $.mockjax.clear(subscribe);
    });
    return false;
});
// for login in 
$('.app').on('submit', '.login-form', function() {
    var username, password, email,userId,passId;
    username = c.pluck('username');
    password = c.pluck('password');
    // for matching user entered email and password with the one stored in storage and passing them to ajax request
    for (var i = 0; i < username.length; i++) {
        if (($('input[name=Username]').val() == username[i]) && ($('input[name=password]').val() == password[i])) {
            userId = username[i];
            passId = password[i];
        }
    }
    var login = $.mockjax({
        url: "login",
        responseTime: 1000,
        responseText: "Credentials Matched",
        data: {
            userval: userId,
            passval: passId
        }
    });

    $.ajax({
        url: "login",
        data: {
            userval: $('input[name=Username]').val(),
            passval: $('input[name=password]').val()
        },
        success: function(response) {
            window.location.href = '/#/list';
            $(".error-msg").css('display', 'none');

        },
        error: function(xhr, ajaxOptions, thrownError) {
            $(".error-msg").css('display', 'block');
        }
    }).done(function(response) {
        $.mockjax.clear(login);
    });

    return false;
});
// for forget password
$('.app').on('submit', '.forget-container', function() {
    var username, password, email,emaildata;
    email = c.pluck('email');
    // for matching user entered email with the one stored in storage
    for (var i = 0; i < email.length; i++) {
        if (($('input[name=email]').val() == email[i])) {
            emaildata = email[i]
        }
    }
    var resetpass = $.mockjax({
        url: "reset",
        responseTime: 1000,
        responseText: "Password Reset",
        data: {
            id: emaildata
        }
    });
    $.ajax({
        url: "reset",
        data: {
            id: $('input[name=email]').val()
        },
        success: function(response) {
            $(".forget-container .msg-resetpass").css('display', 'block');
            $(".forget-container .msg-resetpass-error").css('display', 'none');
        },
        error: function() {
            $(".forget-container .msg-resetpass-error").css('display', 'block');
            $(".forget-container .msg-resetpass").css('display', 'none');
        }
    }).done(function(response) {
        $.mockjax.clear(resetpass);
    });
    return false;
});
// for post-ad 
$('.app').on('submit', '.postad-form', function() {
    var postad = $.mockjax({
        url: "postad",
        responseTime: 1000,
        responseText: "Ad Posted"
    });

    $.ajax({

        url: "postad",
        success: function(response) {
            $(".postad-form .msg-postad").css('display', 'block');
        },
        error: function(response) {
            $(".postad-form .msg-postad").css('display', 'none');
        }
    }).done(function(response) {
        $.mockjax.clear(postad);
    });
    return false;
});
