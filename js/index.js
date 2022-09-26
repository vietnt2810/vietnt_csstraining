$(document).ready(function () {
  $(document).on("click", ".likeholder", function () {
    let likeHolder = $(this);
    let textChild = likeHolder.children("span");
    let iconChild = likeHolder.children("i");
    let counter = textChild.text().replace(/\D/g, "");
    let isLiked = likeHolder.hasClass("notliked");
    isLiked ? ++counter : --counter;
    textChild.text(`${counter} likes`);
    if (isLiked) {
      likeHolder.removeClass("notliked").addClass("liked");
      iconChild.removeClass("fa-regular").addClass("fa-solid");
    } else {
      likeHolder.removeClass("liked").addClass("notliked");
      iconChild.removeClass("fa-solid").addClass("fa-regular");
    }
  });
  $(document).on("click", ".fa-comment", function () {
    $(".typing-input").focus();
  });
});
