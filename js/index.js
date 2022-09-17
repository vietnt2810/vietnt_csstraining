$(document).ready(function () {
  $(document).on("click", ".notliked", function () {
    var $this = $(this);
    $this.removeClass("notliked");
    $this.addClass("liked");
    var $textchild = $this.children("span");
    var text = $textchild.text();
    var count = text.match(/(\d+)/)[0];
    count++;
    $textchild.text(`${count} likes`);
    var $iconchild = $this.children("i");
    $iconchild.removeClass("fa-regular");
    $iconchild.addClass("fa-solid");
  });

  $(document).on("click", ".liked", function () {
    var $this = $(this);
    $this.removeClass("liked");
    $this.addClass("notliked");
    var $textchild = $this.children("span");
    var text = $textchild.text();
    var count = text.match(/(\d+)/)[0];
    count--;
    $textchild.text(`${count} likes`);
    var $iconchild = $this.children("i");
    $iconchild.removeClass("fa-solid");
    $iconchild.addClass("fa-regular");
  });
});
