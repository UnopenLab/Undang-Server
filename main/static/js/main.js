/**
* Facebook API Setting
*/
window.fbAsyncInit = function () {
    FB.init({
        appId: '190548778359119',
        xfbml: true,
        version: 'v2.12'
    });
    FB.AppEvents.logPageView();
};

(
    function (document, script, id) {
        var js, fjs = document.getElementsByTagName(scripts)[0];

        if (document.getElementById(id)) {
            return;
        }
        js = document.createElement(script);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";

        fjs.parentNode.insertBefore(js, fjs);
    }
    (document, 'script', 'facebook-jssdk')
);


/**
 * Base Setting
 * - kakaotalk setting
 * - get temperatures from api
 * - clipboard.js setting
 */
$(document).ready(function () {
    console.log("Start");
    Kakao.init('73429a7e8e2d3b899fae11eb62e102ae');

    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    var days = ["일", "월", "화", "수", "목", "금", "토"];

    document.getElementById('date').innerHTML = (month + 1) + "월 " + day + "일 " + days[date.getDay()] + "요일";

    $.ajax({

        type: "GET",
        url: "/temperatures",
        dataType: "json",
        error: function () {
            document.getElementById('temperature').value = "통신오류";
        },
        success: function (data) {
            console.log("통신데이터 값 : " + JSON.stringify(data));
            var obj = JSON.parse(JSON.stringify(data));
            document.getElementById('temperature').innerHTML = obj["구리"];
        }

    });

    var imgs = document.querySelectorAll('img');
    var clip = new Clipboard(imgs);

    clip.on('success', function (e) {
        console.log("Success");

        $('.popup-box').fadeIn();
        $('.popup-box').delay(1000).fadeOut();
        var selection = window.getSelection();
        selection.removeAllRanges();

    });


});