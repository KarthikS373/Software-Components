var path = "./assets/Images/";
let ext = [".jpeg", ".jpg", ".png", ".jfif"];

$(document).ready(function () {
  $.ajax({
    async: true,
    url: path,
    success: function (res) {
      for (var i = 0; i < ext.length; ++i) {
        $(res)
          .find("a:contains(" + ext[i] + ")")
          .each(function () {
            var fileName = this.href
              .replace(this.host, "")
              .replace("http://", "");
            $(".carousel-inner").append(
              '<div class="carousel-item"><img class="d-block w-100" src=\'' +
                fileName +
                '\' alt="Images here"></div>'
            );
          });
      }
    },
  });
  $(".carousel").carousel({
    interval: 250,
  });
});
