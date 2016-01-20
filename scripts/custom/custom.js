$('.app').on('submit', '.login-form', function() {
    var login = $.mockjax({
        url: "login",
        responseTime: 1000,
        responseText: "Credentials Matched",
        data: {
            username: 'rahul',
            password: 'test'
        }
    });

    $.ajax({

        url: "login",
        data: {
            username: $('input[name=Username]').val(),
            password: $('input[name=password]').val()
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
$('.app').on('submit', '.forget-container', function() {
    var resetpass = $.mockjax({
        url: "reset",
        responseTime: 1000,
        responseText: "Password Reset",
        data: {
            email: 'rahulv@techaspect.com'
        }
    });

    $.ajax({

        url: "reset",
        data: {
            email: $('input[name=email]').val()
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
