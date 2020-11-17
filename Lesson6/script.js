const handleClick = (event) => {
    const src = event.target.getAttribute('src');
    const oldImg = document.querySelector('.full-picture-item');

    if (oldImg && oldImg.getAttribute('src') === src) {
        console.log("Stopped");
        return;
    }
    
    const wrapper = document.querySelector('.full-picture');
    
    const img = document.createElement('img');
    img.classList.add("full-picture-item");
    img.setAttribute('src', src);
    
    if (oldImg) {
        wrapper.replaceChild(img, oldImg);
        console.log("Pucture changed");
    } else {
        wrapper.appendChild(img);
        console.log("Pucture added");
    }
}

const handleMouseEnter = (event) => {
    console.log("Mouse entered!");
    event.target.classList.add('active')
}

const handleMouseLeave = (event) => {
    console.log("Mouse left!");
    event.target.classList.remove('active')
}

window.onload = () => {
    // выбрать все .preview-item
    // добавить им обработчик кликов
    // взять src атрибут и 
    // создать элемент img.full - picture - item внутри
    // .full - picture
    const previews = document.querySelectorAll('img.preview-item');
    for (const item of previews) {
        item.addEventListener('click', handleClick);
        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);
    }
}