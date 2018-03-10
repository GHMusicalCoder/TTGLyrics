$html = '<div class="col-2">' +
    '<br/><a class="btn btn-primary size" href="./index.html">HOME</a>' +
    '</div>' +
    '<div class="col-10">' +
    '<br/><div class="songTitle" id="songTitle"></div>' +
    '</div>';

function LoadTitle(title) {
    $('#headerRow').html($html);
    $('#songTitle').html(title);
}