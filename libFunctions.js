songList = songList || [];

$(document).ready(function() {
    $html = '';
    counter = 0;
    songList.forEach(function (entry) {
        if (counter === 5) {
            $html += "<br/><br/>";
            counter = 0;
        }
        $html += `&nbsp;<a class="btn btn-primary size" href="./${entry[0]}.html">${entry[1]}</a>&nbsp;`;
        counter++;
    });

    $('#placeButtons').html($html);
});

