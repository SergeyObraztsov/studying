'use strict';
const DomElement = function(){
    this.selector = '';
    this.height = '';
    this.width = '';
    this.background = '';
    this.fontSize = '';
    
};
DomElement.prototype.create = function(selector, height, width, background, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.background = background;
    this.fontSize = fontSize;

    if (selector[0] === '.'){
        let div = document.createElement('div');
        div.className = selector.slice(1);
        div.innerHTML = 'We are created div';
        div.style.fontSize = fontSize;
        div.style.height = height;
        div.style.width = width;
        div.style.background = background;
        document.body.append(div);
    } else if(selector[0] === '#'){
        let p = document.createElement('p');
        p.className = selector.slice(1);
        p.innerHTML = 'We are created paragraph';
        p.style.fontSize = fontSize;
        p.style.height = height;
        p.style.width = width;
        p.style.background = background;
        document.body.append(p);
    } else{
        alert('something went wrong');
    }
};
let obj = new DomElement();
obj.create('.kek','30%', '100%', '#aaa', '100px');
obj.create('#shpek','30%', '100%', '#aaa', '100px');
