$(document).ready(function () {
    $('.share').click(function () {
        layer_popup();
    });
});

function layer_popup() {

    $('.share').fadeOut();
    $('.dim-layer').fadeIn();

    $('#share_kakao').click(function () {

        var label_text = document.getElementById('temperature-info');
        var converted = (label_text.innerText || label_text.textContent).replace(/\s+/g, ' ');

        Kakao.Link.sendTalkLink({
            label: converted
        });

        $('.share').fadeIn();
        $('.dim-layer').fadeOut();
        return false;
    });
    $('#share_facebook').click(function () {

        var label_text = document.getElementById('temperature-info');
        var converted = (label_text.innerText || label_text.textContent).replace(/\s+/g, ' ');
     

        FB.ui({
            method: 'share_open_graph',
            action_type: 'og.shares',
            action_properties: JSON.stringify({
                object: {
                    'og:url': 'https://undang.twpower.me',
                    'og:title': '[Undang]',
                    'og:description': converted,
                    'og:image': 'http://undang.twpower.me/images/url-largelink-preview.png',
                }
            })
        }, function (response) {

        });
        $('.share').fadeIn();
        $('.dim-layer').fadeOut();
    });

    $('#share_link').click(function () {
        $('.share').fadeIn();
        $('.dim-layer').fadeOut();
        return false;
    });

    $('.close-share').click(function () {
        $('.share').fadeIn();
        $('.dim-layer').fadeOut();
        return false;
    });
}
