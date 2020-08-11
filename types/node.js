// Node.PROTOTYPE
Object.defineProperty(Node.prototype, 'insert', {
    writable: false,
    configurable: false,
    enumerable: false,
    value: function(node, index) {
        if(arguments.length < 2) this.appendChild(node);
        else if(index) {
            const nextSibling = this.children.length > index ? this.children[index] : null;
            this.insertBefore(node, nextSibling);
        }
        else this.prepend(node);
        //
        // return ???
    }
});
Object.defineProperty(Node.prototype, 'inset', {
    writable: false,
    configurable: false,
    enumerable: false,
    value: function() {
        this.innerHTML = null;
        this.append(...arguments);
        //
        // return ???
    }
});
Object.defineProperty(Node.prototype, 'isInPage', {
    writable: false,
    configurable: false,
    enumerable: false,
    value: function() {
        // return (this === document.body) ? false : document.body.contains(this);
        return document.body.contains(this);
    }
});