$(document).ready(function () {
    $('.share').click(function () {
        layer_popup();
    });
});

function layer_popup() {
    $('.share').fadeOut();
    $('.dim-layer').fadeIn();

    $('#share_kakao').click(function () {

        console.log('Clicked');

        var date = new Date();
        var month = date.getMonth();
        var day = date.getDate();
        var days = ["일", "월", "화", "수", "목", "금", "토"];
        var place = '한강';

        var label_text = '[Undang]' + month + '월 '
            + day + '일 '
            + '지금 ' + place + '은 '
            + document.getElementById('temperature').textContent + '℃'
        /*
              Kakao.Link.sendTalkLink({
              label: label_text + '\n' + 'https://www.naver.com'
              });
        */

        Kakao.Link.sendTalkLink({
            label: label_text,
            image: {
                src: 'http://undang.twpower.me/images/kakaotalk-share.png',
                width: '154',
                height: '154'
            },
            appButton : {
                text : "앱으로 가기",
                webUrl : "https://play.google.com/store/apps/details?id=com.unopenlab.iamalarm"
            }
        });

        $('.share').fadeIn();
        $('.dim-layer').fadeOut();
        return false;
    });

    $('#share_facebook').click(function () {
        //[Undang]2월 25일 지금 한강은 모르겠℃

        var date = new Date();
        var month = date.getMonth();
        var day = date.getDate();
        var days = ["일", "월", "화", "수", "목", "금", "토"];
        var place = '한강';
        var label_text = '[Undang]' + month + '월 '
            + day + '일 '
            + '지금 ' + place + '은 '
            + document.getElementById('temperature').textContent + '℃'

        FB.ui({
            method: 'share',
            display: 'popup',
            href: 'https://undang.twpower.me',
            title: 'Undang',
            message: label_text,
            picture:'http://undang.twpower.me/images/url-largelink-preview.png'
        }, function(response){
        // Action after response
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
