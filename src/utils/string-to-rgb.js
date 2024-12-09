String.prototype.toRGB = function () {
	var hash = 0;
	if (this.length === 0) return hash;
	for (var i = 0; i < this.length; i++) {
		hash = this.charCodeAt(i) + ((hash << 5) - hash);
		hash = hash & hash;
	}
	var rgb = [0, 0, 0];
	for (var i = 0; i < 3; i++) {
		var value = (hash >> (i * 8)) & 255;
		rgb[i] = value;
	}
	return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, .9)`;
}