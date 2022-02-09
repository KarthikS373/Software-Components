var path = "./assets/Images/";
var ext1 = ".jpeg";
var ext2 = ".jpg";
var ext3 = ".png";
$(document).ready(function () {
  $.ajax({
    url: path,
    success: function (res) {
      // console.log(res);
      $(res)
        .find("a:contains(" + ext1 + ")")
        .each(function () {
          var fileName = this.href
            .replace(window.location.host, "")
            .replace("http://", "");
          $(".carousel-inner").append(
            '<div class="carousel-item"><img class="d-block w-100" src=\'' +
              fileName +
              "' alt=\"Images here\"></div>"
          );
        });
    },
  });
  $.ajax({
    url: path,
    success: function (res) {
      $(res)
        .find("a:contains(" + ext2 + ")")
        .each(function () {
          var fileName = this.href
            .replace(window.location.host, "")
            .replace("http://", "");
          $(".carousel-inner").append(
            '<div class="carousel-item"><img class="d-block w-100" src=\'' +
              fileName +
              "' alt=\"Images here\"></div>"
          );
        });
    },
  });
  $.ajax({
    url: path,
    success: function (res) {
      $(res)
        .find("a:contains(" + ext3 + ")")
        .each(function () {
          var fileName = this.href
            .replace(window.location.host, "")
            .replace("http://", "");
          $(".carousel-inner").append(
            '<div class="carousel-item"><img class="d-block w-100" src=\'' +
              fileName +
              "' alt=\"Images here\"></div>"
          );
        });
    },
  });
  $('.carousel').carousel({
    interval: 2000
  })
});

