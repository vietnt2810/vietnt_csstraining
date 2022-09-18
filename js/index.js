$(document).ready(function () {
  $(document).on("click", ".likeholder", function () {
    var likeHolder = $(this);
    var textChild = likeHolder.children("span");
    var text = textChild.text();
    var count = text.replace(/\D/g, "");
    var iconChild = likeHolder.children("i");
    if (likeHolder.hasClass("notliked")) {
      likeHolder.removeClass("notliked");
      likeHolder.addClass("liked");
      count++;
      iconChild.removeClass("fa-regular");
      iconChild.addClass("fa-solid");
    } else if (likeHolder.hasClass("liked")) {
      likeHolder.removeClass("liked");
      likeHolder.addClass("notliked");
      count--;
      iconChild.removeClass("fa-solid");
      iconChild.addClass("fa-regular");
    }
    textChild.text(`${count} likes`);
  });
});
