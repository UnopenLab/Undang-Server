$(document).ready(function(){
  $('.share').click(function() {
    layer_popup();
  });
});

function layer_popup() {
  $('.share').fadeOut();
  $('.dim-layer').fadeIn();

  $('#share_kakao').click(function() {
    Kakao.Link.sendTalkLink({
      label: '지금 한강은 모르겠도'
    }
  );
    $('.share').fadeIn();
    $('.dim-layer').fadeOut();
    return false;
  });

  $('.close-share').click(function() {
    $('.share').fadeIn();
    $('.dim-layer').fadeOut();
    return false;
  });
}
