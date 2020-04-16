const inputMain = document.getElementById("input"); // Головний input
const addButton = document.getElementById("add"); // Кнопка додати
const listItems = document.getElementById("list"); // Список завдань ul
const delAll = document.getElementById("delAll"); // Кнопка видалити всі задачі
const allElementsLi = document.getElementsByClassName("allLi"); //масив конкретних (доданих) завдань li

inputMain.addEventListener("keydown", enter);
addButton.addEventListener("click", addButtonClick);

delAll.addEventListener("click", fDelAll);

function fDelAll() {
    listItems.innerHTML = '';
}

function enter(event) {
    if (event.key === "Enter") {
        addButtonClick()
    }
}

let id = 0;

function addButtonClick() {
    if (inputMain.value !== "") {
        id = Math.random() * 1e17;
        listItems.insertAdjacentHTML("beforeend",
            `<li class='inWork allLi show' id="${id}">
                            <div>
                                <div class='work'>
                                    <span id="span">${inputMain.value}</span>
                                    <button class='deleteOne'>X</button>
                                    <input type='text' class='inputEdit hide'>
                                    <button class='edit hide'>edit</button>
                                    <button class="save hide">save</button>
                                </div>
                                <div class="check">
                                    <img src="img/done.png" class="done hide">
                                </div>
                            </div>
                       </li>`);
        inputMain.value = "";
        inputMain.focus();

        let elementLi = document.getElementById(id);
        let deleteOneButton = elementLi.querySelector(".deleteOne");

        deleteOneButton.addEventListener("click", () => {
            deleteOne(elementLi);
        });

        let editButton = elementLi.querySelector(".edit");
        let saveButton = elementLi.querySelector(".save");

        editButton.addEventListener("click", () => {
            edit(elementLi, editButton, saveButton)
        });


        let done = elementLi.querySelector(".check");
        let imgDone = done.querySelector(".done");

        done.addEventListener("click", () => {
            showIcon(elementLi, imgDone)
        });


    }
}

function deleteOne(a) {
    a.outerHTML = "";
}

function edit(a, b, c) {
    a.querySelector(".inputEdit").classList.add("show");
    a.querySelector(".inputEdit").classList.remove("hide");
    b.classList.add("hide");
    b.classList.remove("show");
    c.classList.add("show");
    c.classList.remove("hide");
    a.querySelector(".inputEdit").value = a.querySelector("span").textContent;
    c.addEventListener("click", saveEdit);

    function saveEdit() {
        a.querySelector("span").innerHTML = a.querySelector(".inputEdit").value;
        a.querySelector(".inputEdit").classList.remove("show");
        a.querySelector(".inputEdit").classList.add("hide");
        b.classList.add("hide");
        c.classList.add("hide");
        c.classList.remove("show");
    }
}

function showIcon(a, b) {
    if (b.classList.contains("hide")) {
        b.classList.add("show");
        b.classList.remove("hide");
        a.classList.add("alreadyDone");
        a.classList.remove("inWork");
    } else {
        b.classList.add("hide");
        b.classList.remove("show");
        a.classList.add("inWork");
        a.classList.remove("alreadyDone");
    }
}

document.getElementById("showDone").addEventListener("click", fShowDone);

function fShowDone() {
    for (let j = 0; j < allElementsLi.length; j++) {
        if (allElementsLi[j].classList.contains("alreadyDone")) {
            allElementsLi[j].classList.add("show");
            allElementsLi[j].classList.remove("hide");
        } else
            allElementsLi[j].classList.add("hide");
        allElementsLi[j].classList.remove("show");
    }
}

document.getElementById("showAll").addEventListener("click", fShowAll);

function fShowAll() {
    for (let i = 0; i < allElementsLi.length; i++) {
        allElementsLi[i].classList.add("show");
        allElementsLi[i].classList.remove("hide");
    }
}

document.getElementById("showNext").addEventListener("click", fShowNext);

function fShowNext() {
    for (let k = 0; k < allElementsLi.length; k++) {
        if (allElementsLi[k].classList.contains("inWork")) {
            allElementsLi[k].classList.add("show");
            allElementsLi[k].classList.remove("hide");
        } else
            allElementsLi[k].classList.add("hide");
        allElementsLi[k].classList.remove("show");
    }
}
