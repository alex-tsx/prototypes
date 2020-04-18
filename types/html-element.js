// HTMLElement.PROTOTYPE
HTMLElement.prototype.eventWithin = function(event) {
    let target = event.target;
    while(target && target !== document.body) { // || !== window || !== document
        if(target === this) return true; else target = target.parentNode;
    }
    return false;
};
HTMLElement.prototype.setAttributes = function(attrs) {
    for(let key in attrs) this.setAttribute(key, attrs[key]);
};
HTMLElement.prototype.blink = function(color='var(--c-green, green)') {
	this.animate(
		[ {backgroundColor: color}, {backgroundColor:'transparent'} ],
		{duration: 1000}
	);
}
HTMLElement.prototype.attract = function() {
	this.scrollIntoView({behavior:'smooth', block:'center', inline:'nearest'});
}