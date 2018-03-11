$(function () {
    $(".thumbnailImage").on("click", function (event) {
        let imageSrc = $(this).attr('src');
        $("#ImageShowCase").attr('src', imageSrc);
        $("#LightBoxModal").modal("show");
    });
});