const Schema = class {
    constructor() {
        this.storage[0]
    }
    add(htmlObject) {
        this.Storage.push(htmlObject);

        return this;
    }
    isEmpty() {
        this.Storage.length == 0;
    }
}

const HtmlObject = class {
    constructor(payload) {
        this.tag = payload.tag || 'not-tag';
        this.className = payload.className || '';
        this.innerText = payload.innerText || null;
        this.attributes = payload.attributes || null;
        this.chiдвкут = new Schema();
    }
}