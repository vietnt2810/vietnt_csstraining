$(document).ready(function () {
  $(document).on("click", ".likeholder", function () {
    var likeHolder = $(this);
    var textChild = likeHolder.children("span");
    var text = textChild.text();
    var counter = text.replace(/\D/g, "");
    var iconChild = likeHolder.children("i");
    likeHolder.hasClass("notliked")
      ? (likeHolder.removeClass("notliked"),
        likeHolder.addClass("liked"),
        counter++,
        iconChild.removeClass("fa-regular"),
        iconChild.addClass("fa-solid"))
      : (likeHolder.removeClass("liked"),
        likeHolder.addClass("notliked"),
        counter--,
        iconChild.removeClass("fa-solid"),
        iconChild.addClass("fa-regular"));
    textChild.text(`${counter} likes`);
  });
  $(document).on("click", ".fa-comment", function () {
    $(".typing-input").focus();
  });
});
