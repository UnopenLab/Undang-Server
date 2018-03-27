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
        var month = date.getMonth()+1;
        var day = date.getDate();
        var days = ["일", "월", "화", "수", "목", "금", "토"];
        var place = '한강';

        var share_text = '[Undang]' + month + '월 '
            + day + '일 '
            + '지금 ' + place + '은 '
            + document.getElementById('temperature').textContent + '℃';

        Kakao.Link.sendTalkLink({
            label: share_text
        });

        $('.share').fadeIn();
        $('.dim-layer').fadeOut();
        return false;
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
