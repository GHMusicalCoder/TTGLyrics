$home = sessionStorage.getItem("homePage")
var songList = songList || [];

$headHtml = '<div class="col-2">' +
    `<br/><button type="button" class="btn btn-primary size" onclick="window.location.href='./${$home}'">HOME</button>` +
    '</div>' +
    '<div class="col-10">' +
    '<br/><div class="songTitle" id="songTitle"></div>' +
    '</div>';

$footHtml = '<div class="col-2">' +
	`<button type="button" class="btn btn-primary size" onclick="window.location.href='./${$home}'">HOME</button>` +
	'</div>';
	
function LoadSong() {
    $('#headerRow').html($headHtml);
    $('#songTitle').html(sessionStorage.getItem("songTitle"));
	$('#footerRow').html($footHtml)
}

function BuildButtons(page) {
	return $html;
}


function LoadButtons(page) {
	$html = '';
	counter = 0;
	songList.forEach(function (entry) {
		if (counter === 5) {
			$html += "<br/><br/>";
			counter = 0;
		}
		
		if (entry.project === page || entry.project === "all") {
			$html += `&nbsp;<button type="button" class="btn btn-primary size" onclick="LoadPage(${entry.id})">${entry.title}</button>&nbsp;`;
			counter++;
		}
	});

	$('#placeButtons').html($html);
}

function LoadPage(id) {
	song = getSong(id);
	sessionStorage.setItem("songTitle", song.title);
	window.location.href = `./${song.file}.html`;
}