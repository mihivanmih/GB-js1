
function buy(id) {
    let item =  document.querySelector('#item'+id+' .text').innerHTML;
    let price =  Number.parseInt(document.querySelector('#item'+id+' .price').innerHTML);
    let priceALl =   Number.parseInt(document.querySelector('#bascetAll span').innerHTML);

    priceALl = priceALl + price;

    let parent = document.querySelector('#basket');
    let parent1 = document.querySelector('#basketNull');
    let parents = document.querySelector('#bascetAll span');
    let div = document.createElement('div');
    div.innerHTML = '<div class="">'+item+' Цена: '+price+' </div>';
    parent1.classList.add("none")
    parents.innerHTML = priceALl;
    parent.append(div);
}


/**
 * Проверка существования картинки
 * @param status
 * @param src
 * @constructor
 */
const Imgtrue = (status, src) => {
    if(status==true){
        console.log("Картинка "+ src +" существует");
    } else {
        console.log("Картинки "+ src +" не существует");
    }
}

// проверяем кол-во картинок
function colImgFunction () {
    let element = document.getElementById("preview");
    let count =  element.childElementCount;
    return count - 1;
}


const handleClick = (event) => {

    console.log("event", event)

    const src = event.target.getAttribute('src');
    const data_id = event.target.getAttribute('data-id');
    const oldImg = document.querySelector('.full-picture-item');
    const left = document.querySelectorAll('.left');
    const right = document.querySelectorAll('.right');

    window.addEventListener('load', function() {
        console.log('All assets are loaded')
    })


    if (oldImg && oldImg.getAttribute('src') === src) {
        //console.log("Stopped");
        return;
    }

    let countImg = colImgFunction();

    //скрываем кнопки на последней и первой картинке
    if(data_id==countImg){
        right[0].classList.add("none");
        left[0].classList.remove("none");
    } else if (data_id==0) {
        left[0].classList.add("none");
        right[0].classList.remove("none");
    } else {
        left[0].classList.remove("none");
        right[0].classList.remove("none");
    }


    left[0].setAttribute('data-id', data_id-1);
    right[0].setAttribute('data-id', Number(data_id)+1);


    const wrapper = document.querySelector('.full-picture');

    const img = document.createElement('img');
    img.classList.add("full-picture-item");
    img.setAttribute('src', src);
    img.setAttribute('data-id', data_id);

    if (oldImg) {
        wrapper.replaceChild(img, oldImg);
        //  console.log("Pucture changed");
    } else {
        wrapper.appendChild(img);
        //  console.log("Pucture added");
    }
}

const handleMouseEnter = (event) => {
    event.target.classList.add('active')
}

const handleMouseLeave = (event) => {
    event.target.classList.remove('active')
}

window.onload = () => {
    const previews = document.querySelectorAll('img.preview-item');
    for (const item of previews) {
        item.addEventListener('click', handleClick);
        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);
    }
}

function leftslide() {
    const leftSlide = document.getElementById("left");
    const rightSlide = document.getElementById("right");
    const data_id = leftSlide.getAttribute("data-id");


    const leftSlideId = document.getElementById("img"+data_id);
    const src = leftSlideId.getAttribute("src");

    let countImg = colImgFunction();

    if(data_id==countImg){
        rightSlide.classList.add("none");
        leftSlide.classList.remove("none");
    } else if (data_id==0) {
        leftSlide.classList.add("none");
        rightSlide.classList.remove("none");
    } else {
        leftSlide.classList.remove("none");
        rightSlide.classList.remove("none");
    }

    leftSlide.setAttribute('data-id', data_id-1);
    rightSlide.setAttribute('data-id', Number(data_id)+1);

    const wrapper = document.querySelector('.full-picture');
    const oldImg = document.querySelector('.full-picture-item');

    const img = document.createElement('img');
    img.classList.add("full-picture-item");
    img.setAttribute('src', src);
    img.setAttribute('data-id', data_id);
    wrapper.replaceChild(img, oldImg);

}

function Rightslide() {
    const leftSlide = document.getElementById("left");
    const rightSlide = document.getElementById("right");
    const data_id = rightSlide.getAttribute("data-id");
    const leftSlideId = document.getElementById("img"+data_id);
    const src = leftSlideId.getAttribute("src");


    let countImg = colImgFunction();

    if(data_id==countImg){
        rightSlide.classList.add("none");
        leftSlide.classList.remove("none");
    } else if (data_id==0) {
        leftSlide.classList.add("none");
        rightSlide.classList.remove("none");
    } else {
        leftSlide.classList.remove("none");
        rightSlide.classList.remove("none");
    }

    leftSlide.setAttribute('data-id', data_id-1);
    rightSlide.setAttribute('data-id', Number(data_id)+1);

    const wrapper = document.querySelector('.full-picture');
    const oldImg = document.querySelector('.full-picture-item');

    const img = document.createElement('img');
    img.classList.add("full-picture-item");
    img.setAttribute('src', src);
    img.setAttribute('data-id', data_id);
    wrapper.replaceChild(img, oldImg);

}


