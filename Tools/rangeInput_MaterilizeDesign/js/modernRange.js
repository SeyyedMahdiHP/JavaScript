$(function () {
    //google Materialize rangeInput
    $('input[type=range]').wrap("<div class='range'></div>");
    var i = 1;

    $('.range').each(function() {
        let inputElem = this.getElementsByTagName('input')[0];
        let value = inputElem.value;
        let width = inputElem.offsetWidth;
        let max = inputElem.max;
        var position = (value / max) * (width - 8) - 12;
        let progress = (width / max) * value;
        this.id = 'range' + i;
        if (value === 0) {
            this.className = "range"
        } else {
            this.className = "range rangeM"
        }
        this.innerHTML += "<style>#" + this.id + " input[type=range]::-webkit-slider-runnable-track {background:linear-gradient(to right, #3f51b5 0%, #3f51b5 " + progress+ "%, #515151 " + progress+ "%)} #" + this.id + ":hover input[type=range]:before{content:'" + value + "'!important;left: " + position + "px;} #" + this.id + ":hover input[type=range]:after{left: " + position + "px}</style>";
        i++;
    });

    $('input[type=range]').on("input", function() {
        let value = this.value;
        let max = this.max;
        let width = this.offsetWidth;
        let position = (value / max) * (width - 8) - 12;
        let progress = (width / max) * value;
        if (value === 0) {
            this.parentNode.className = "range"
        } else {
            this.parentNode.className = "range rangeM"
        }
        this.parentNode.getElementsByTagName('style')[0].innerHTML =
            "#" + this.parentNode.id +
            " input[type=range]::-webkit-slider-runnable-track {background:linear-gradient(to right, #3f51b5 0%, #3f51b5 "
            + progress + "%, #515151 " + progress + "%)} #" + this.parentNode.id + ":hover input[type=range]:before{content:'" + value +
            "'!important;left: " + position + "px;} #" + this.parentNode.id + ":hover input[type=range]:after{left: " + position + "px}";
    })
});