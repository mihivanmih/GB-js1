
/**
 * Формируем первый столбец
 *
 * @param cols
 * @param div
 */
function oneСolumn(cols, div) {
    let oneСolumn = 0;

    while (oneСolumn <= 9) {
        if (cols == oneСolumn && (countItem == 1 ||  countItem == 0)) {
            if(oneСolumn!=0) {
                if (oneСolumn % 2 == 1) {
                    div.innerHTML = oneСolumn;
                    div.classList.add("none");
                    div.classList.add("border-right");
                }
                if( countItem == 0) {
                    div.innerHTML = oneСolumn;
                    div.classList.add("none");
                    div.classList.add("border-right");
                }
            }
        }
        oneСolumn++;
    }
}

/**
 * Формирование пешек
 *
 *
 * @param cols
 * @param div
 * @param countItem
 */
function pawn(cols, div, countItem) {
    if(cols==2 || cols==7) {
        if(cols==2) {classAdd = "pawn_black"}else{classAdd = "pawn_white"}
        if(countItem!=0){
            div.innerHTML = '<div class="figure '+classAdd+'"></div>';
        }
    }
}

/**
 *
 * Формирование первой строки
 *
 * @param div
 * @param classAdd
 */
function oneLine(div, classAdd) {
    div.classList.add(classAdd);

    if(cols==0) {
        div.classList.add("none");
        switch (countItem) {
            case 1: div.innerHTML = 'A'; break
            case 2: div.innerHTML = 'B'; break
            case 3: div.innerHTML = 'C'; break
            case 4: div.innerHTML = 'D'; break
            case 5: div.innerHTML = 'E'; break
            case 6: div.innerHTML = 'F'; break
            case 7: div.innerHTML = 'G'; break
            case 8: div.innerHTML = 'H'; break
        }
    }
}

/**
 *
 * Формирование фигур
 *
 * @param div
 * @param cols
 * @param countItem
 */
function figures(div, cols, countItem) {
    if(cols==1|| cols==8) {
        let m = 0;
        if(cols==8) {
            m = 1;
        }

        (countItem==2 || countItem==9) ? classlad = "lad_black" : classlad = "lad_white";
        (countItem==3 || countItem==8) ? classkon = "kon_black" : classkon = "kon_white";
        (countItem==4 || countItem==7) ? classslo = "slo_black" : classslo = "slo_white";
        (countItem==5) ? classfer = "fer_black" : classfer = "fer_white";
        (countItem==6) ? classkor = "kor_black" : classkor = "kor_white";

        switch (countItem) {
            case 2-m: case 9-m: div.innerHTML = '<div class="figure '+classlad+'"></div>'; break
            case 3-m: case 8-m: div.innerHTML = '<div class="figure '+classkon+'"></div>'; break
            case 4-m: case 7-m: div.innerHTML = '<div class="figure '+classslo+'"></div>'; break
            case 5-m:  div.innerHTML = '<div class="figure '+classfer+'"></div>'; break
            case 6-m:  div.innerHTML = '<div class="figure '+classkor+'"></div>'; break
        }
    }
}

function black_white(countItem, countWhile, cols) {
    let parent = document.querySelector('#chess');
    let div = document.createElement('div');




    if (countItem % 2 == 1) {
        if (countItem == countWhile) {
        } else {
            oneLine(div, 'black');
            pawn(cols, div, countItem);
            oneСolumn(cols, div);
            figures(div, cols, countItem);
            if(countItem==9){  div.classList.add("border-right");}
        }
    } else {
        if (countItem == countWhile) {
        } else {
            oneLine(div, 'white');
            pawn(cols, div, countItem);
            oneСolumn(cols, div);
            figures(div, cols, countItem);
        }
    }



    if (cols % 2 == 0) {
        if (cols==0) {} else {
            if (countItem == 8) {
                div.classList.add("border-right");
            }
        }
    }


    if (countItem == countWhile) {
        div.classList.add("clear");
    } else {
        if(cols == 1 && countItem!=0){ div.classList.add("border-top"); }
        if(cols == 8 && countItem!=0){ div.classList.add("border-bottom"); }
        if(cols == 8 && countItem==0){ div.classList.add("border-bottom-none");  }
        if(cols == 1 && countItem==1){ div.classList.add("border-top-none");  }
        if(cols == 0 && countItem==8){ div.classList.add("border-a8");  }
        parent.append(div);
    }

    div.classList.add("a"+countItem);

    return parent.append(div);

}

let cols = 0;

while (cols <= 8) {

    if (cols % 2 == 1) {countItem = 1; countWhile = 10; }
    else {  countItem = 0;  countWhile = 9; }


    while (countItem <= countWhile) {
        black_white(countItem, countWhile, cols);
        countItem++;
    }

    cols++;

}