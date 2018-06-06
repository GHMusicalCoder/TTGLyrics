Storage.prototype.setObj = function(key, obj) {
	return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function(key) {
	return JSON.parse(this.getItem(key))
}

var songList = songList || [];

function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function getSong(id) {
	for (var i = -1; i++ < songList.length;) {
		if (songList[i].id === id) return songList[i]
	}
}