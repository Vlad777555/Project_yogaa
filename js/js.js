// class options {
//     constructor (height, width, bg, fontSize, textAlign) {
//         this.height = height;
//         this.width = width;
//         this.bg = bg;
//         this.fontSize = fontSize;
//         this.textAlign = textAlign;
//     }
//     createDiv() {
//         let elem = document.createElement('div');
//         document.body.appendChild(elem);
//         let param = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
//         elem.style.cssText = param;
//     }
// }

// const item = new options(300, 350, 'red', 14, 'center');

// const square = new options(150, 700, 'green', 12, 'center');
// item.createDiv();
// square.createDiv();

// JSON

let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};

console.log(JSON.stringify(options)); // Превращает в JSON объект
console.log(JSON.parse(JSON.stringify(options))); // Превращает из JSON объекта в обычный

// {"width":1366,"height":768,"background":"red","font":{"size":"16px","color":"#fff"}}
// {
//   width: 1366,
//   height: 768,
//   background: 'red',
//   font: { size: '16px', color: '#fff' }
// }
