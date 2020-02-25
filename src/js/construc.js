const Schema = class {
    constructor() {
        this.storage = []
    }
    
    add(htmlObject) {
        this.storage.push(htmlObject);

        return this;
    }
    
    isEmpty() {
        return this.storage.length == 0;
    }
}

const HtmlObject = class {
    constructor(payload) {
        this.tag = payload.tag || 'not-tag';
        this.className = payload.className || '';
        this.innerText = payload.innerText || null;
        this.attributes = payload.attributes || null;
        this.children = new Schema();
    }
}

const htmlFactory = (parent, schema) => {
    for (let HtmlObject of schema.storage) {
        let element = document.createElement(HtmlObject.tag);

        if (HtmlObject.className) {
            element.className = HtmlObject.className;
        }

        if (HtmlObject.innerText) {
            element.innerText = HtmlObject.innerText;
        }

        if (HtmlObject.attributes) {
            for (let attribute in HtmlObject.attributes) {
                element.setAttribute(attribute, HtmlObject.attributes[attribute]);
            }
        }

        parent.append(element);

        if (!HtmlObject.children.isEmpty()) {
            htmlFactory(element, HtmlObject.children);
        }
    }
}



let main = new Schema();

let mainProfile = new HtmlObject({tag: 'main', className: 'profile'});
let mainSection = new HtmlObject({tag: 'section', className: 'section main-section section_black'});
let mainArticle = new HtmlObject({tag: 'article', className: 'main-article main-article_white'});
let mainH1 = new HtmlObject({tag: 'h1', className: 'main-article__title', innerText: 'Григорий Селезнев'});
let mainUl = new HtmlObject({tag: 'ul', className: 'main-article__list'});
let mainList0 = new HtmlObject({tag: 'li', className: 'main-article__item', innerText: '+380506850218'});
let mainList1 = new HtmlObject({tag: 'li', className: 'main-article__item', innerText: 'sgp0389@gmail.com'});
let mainList2 = new HtmlObject({tag: 'li', className: 'main-article__item', innerText: '+380506850218'});
let mainList3 = new HtmlObject({tag: 'li', className: 'main-article__item', innerText: 'sgp0389@gmail.com'});
let mainImg = new HtmlObject({
     tag: 'img',
     className: 'section__img',
     attributes: {
         src: './img/me.png',
     }});

mainUl.children.add(mainList0);
mainUl.children.add(mainList1);
mainUl.children.add(mainList2);
mainUl.children.add(mainList3)
mainArticle.children.add(mainUl);
mainArticle.children.add(mainH1);
mainSection.children.add(mainArticle);
mainSection.children.add(mainImg);
mainProfile.children.add(mainSection);
main.add(mainProfile);        


let body = document.querySelector('body');
htmlFactory(body, main);