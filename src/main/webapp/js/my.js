k = [ 8, 8, 5, 0 ];
console.log(k);
d = _(k).map(function(el, index, list) {
	if (0 == index)
		return 0;
	else
		return _(list.slice(0, index)).foldr(function(x, y) {
			return x + y;
		});
});
console.log(d);
_(_(d).map(function(el, index, list) {
	
	try {
		return list[index + 1] - el
	} catch (e) {
		return 0;
	}
	;
}).slice(0, this.length - 1)).push(0);