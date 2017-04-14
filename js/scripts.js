// loading icon while the page loads
$(window).on('load', function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;
});

// twitter button
! function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'twitter-wjs');

// // facebook button
// (function(d, s, id) {
//   var js, fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8";
//   fjs.parentNode.insertBefore(js, fjs);
// }(document, 'script', 'facebook-jssdk'));


// Google map API
var marker;

function initMap() {
  var myLatLng = { lat: 52.4758665, lng: 13.4301728 };

  var map = new google.maps.Map(document.getElementById('map'), {
    scrollwheel: false,
    center: myLatLng,
    zoom: 10
  });

  marker = new google.maps.Marker({
    icon: 'img/custom_marker.png',
    position: myLatLng,
    map: map,
    title: 'My Address: Kopfstr. 47 Berlin',
    draggable: false,
    animation: google.maps.Animation.DROP
  });
  marker.addListener('click', toggleBounce);

  var lineSymbol = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    scale: 5,
    strokeColor: '#66C547'
  };

  // Create the polyline and add the symbol to it via the 'icons' property.
  var line = new google.maps.Polyline({
    path: [{ lat: 52.605572, lng: 13.423597 }, { lat: 52.510811, lng: 13.4269013 }],
    icons: [{
      icon: lineSymbol,
      offset: '100%'
    }],
    map: map
  });

  animateArrow(line);
}

function animateArrow(line) {
  var count = 0;
  window.setInterval(function() {
    count = (count + 1) % 200;

    var icons = line.get('icons');
    icons[0].offset = (count / 2) + '%';
    line.set('icons', icons);
  }, 20);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

// starts when the whole dom has loaded
$(document).ready(function() {
  // smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function() {
      window.location.hash = href;
    });
    return false;
  });

  // tooltip learn more
  $(function() {
    $('#linkedin').tooltip();
  });

  // tooltip github button
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // button GitHub link - open new window
  $('.git-button').click(function() {
    window.open('https://github.com/albertoboz', '_blank');
  });

  // message box background color
  $('.message-box').css('background-color', '#c7e2de');

  // hide form once the message has been submitted
  $('#submit-btn').on('click', function() {
    var comment = $('.message-box').val();
    var name = $('#name').val();
    var email = $('#email').val();
    if (comment === "" && name === "" && email === "") {
      $('.message-box, #name, #email').css("border-color", "red");
    } else {
      if (comment === "" && name === "" && email != "") {
        $('.message-box, #name').css("border-color", "red");
      } else {
        if (name === "" && email === "" && comment != "") {
          $('#name, #email').css("border-color", "red");
        } else {
          if (email === "" && comment === "" && name != "") {
            $('#email, .message-box').css("border-color", "red");
          } else {
            if (comment === "") {
              $('.message-box').css("border-color", "red");
            } else {
              if (name === "") {
                $('#name').css("border-color", "red");
              } else {
                if (email === "") {
                  $('#email').css("border-color", "red");
                } else {
                  $('#contact-form').submit();
                }
              }
            }
          }
        }
      }
    };
    $('#visible-comment').html("Hello " + name + " I received your message! </br> Your message: " + comment);
    $('.message-box, #name, #phone, #email, #submit-btn, #char-count').hide('slow');
    return false;
  });

  // character count
  $(".message-box").on("keyup", function() {
    console.log("keyup happened"); //here we make sure we're catching the keyup
    var charCount = $('.message-box').val().length;
    console.log(charCount); //here we make sure we set it to the right value
    $("#char-count").html("Character count: " + charCount); //here we show a running character count to the user
    if (charCount > 150) {
      $("#char-count").css("color", "red");
      // need to turn character count red
    } else {
      $("#char-count").css("color", "yellow");
      // need it to be yellow
    };
  });

  $(".flag").lettering();

  var index = 0;
  var profession = ['W','e','b',' ','D','e','v','e','l','o','p','e','r'];
  var sentence = '';

  var intervalId1 = setInterval(nameIn, 300);

  function nameIn(){
    console.log("index = " + index);
    sentence += profession[index];
    $('#title h2').text(sentence);
    index++;
    if (index == profession.length) {
      clearInterval(intervalId1);
    }
  }


  // work1 section
  // for (var i = 0; i < work1.length; ++i) {
  //   $("#row-work1").append("\
  //     <div class='col-xs-12 col-sm-6 col-md-3'>\
  //       <div class='work-layout'>\
  //         <a href='" + work1[i].url + "' class='work-img'>\
  //           <img class='img-responsive' src='" + work1[i].pic + "'>\
  //           <span class='info'> " + work1[i].title + " </span>\
  //         </a>\
  //       </div>\
  //     </div>\
  //     ");
  //   var images = $("#row-work1 img");
  //   if (i % 2 === 0) {
  //     $(images[i]).css("border", "2px solid DodgerBlue");
  //   } else {
  //     $(images[i]).css("border", "2px solid salmon");
  //   };
  // };

  // work2 section with while loop
  // var i = 0;
  // while (i < work2.length) {
  //   $("#work2").append("\
  //     <div class='col-xs-12 col-sm-6 col-md-4'>\
  //       <div class='work-layout'>\
  //         <a href='" + work2[i].url + "' class='work-img'>\
  //           <img class='img-responsive' src='" + work2[i].pic + "'>\
  //           <span class='info'> " + work2[i].title + " </span>\
  //         </a>\
  //       </div>\
  //     </div>\
  //    ");
  //   var images = $("#work2 img");
  //   if (i % 2 === 0) {
  //     $(images[i]).css("border", "2px solid DodgerBlue");
  //   } else {
  //     $(images[i]).css("border", "2px solid salmon");
  //   };
  //   i++;
  // };

  // show info when mouse enters element
  $(".work-img").mouseenter(function() {
    $('.info', this).show('fast');
  }).mouseleave(function() {
    $('.info', this).hide('slow');
  });

  // smooth scrolling
  $('.work-img').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function() {
      window.location.hash = href;
    });
    return false;
  });
});
