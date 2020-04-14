const inputMain = document.getElementById("input"); // Головний input
const addButton = document.getElementById("add"); // Кнопка додати
const listItems = document.getElementById("list"); // Список завдань ul
const delAll = document.getElementById("delAll"); // Кнопка видалити всі задачі
const allElementsLi = document.getElementsByTagName("li"); //масив конкретних (доданих) завдань li

inputMain.addEventListener("keydown", enter);
addButton.addEventListener("click", addButtonClick);

delAll.onclick = function () {
    listItems.innerHTML = '';
};

function enter (event) {
    if (event.key === "Enter") {
        addButtonClick ()
    }
};

function addButtonClick () {
        if (inputMain.value !== "") {
            let id = Math.random()*1e17;
            listItems.insertAdjacentHTML("beforeend",
                `<li class='inWork' id="${id}">
                            <div>
                                <div class='work'>
                                    <span id="span">${inputMain.value}</span>
                                    <button class='deleteOne'>X</button>
                                    <input type='text' class='inputEdit'>
                                    <button class='edit'>edit</button>
                                    <button class="save">save</button>
                                </div>
                                <div class="check">
                                    <img src="img/done.png" class="done" style="display: none">
                                </div>
                            </div>
                       </li>`);
            inputMain.value = "";
            inputMain.focus();
            let elementLi = document.getElementById(id);
            let deleteOneButton = elementLi.querySelector(".deleteOne");

            deleteOneButton.addEventListener("click", deleteOne);

            function deleteOne() {
                elementLi.outerHTML = "";
            }
            let editButton = elementLi.querySelector(".edit");
            let saveButton = elementLi.querySelector(".save");

            editButton.addEventListener("click", edit);

            function edit() {
                elementLi.querySelector(".inputEdit").style = "display: block";
                editButton.style = "display: none";
                saveButton.style = "display: block";
                elementLi.querySelector(".inputEdit").value = elementLi.querySelector("span").textContent;
                saveButton.addEventListener("click", saveEdit);
                function saveEdit() {
                    elementLi.querySelector("span").innerHTML = elementLi.querySelector(".inputEdit").value;
                    elementLi.querySelector(".inputEdit").style = "display: none";
                    editButton.style = "";
                    saveButton.style = "display: none";
                }
            }
            let done = elementLi.querySelector(".check");
            let imgDone = done.querySelector(".done");

            done.addEventListener("click", showIcon);

            function showIcon () {
                if (imgDone.style.display == "none") {
                    imgDone.style = "display: block";
                    elementLi.classList.add("alreadyDone");
                    elementLi.classList.remove("inWork");
                    }
                else {
                    imgDone.style = "display: none";
                    elementLi.classList.add("inWork");
                    elementLi.classList.remove("alreadyDone");
                }
            }
        }
        else {
            return;
        }
};

document.getElementById("showDone").addEventListener("click", fShowDone);

function fShowDone () {
    for (let i =0; i<allElementsLi.length; i++) {
        allElementsLi[i].style = "display: block";
    }
    for (let j =0; j<allElementsLi.length; j++) {
        if (allElementsLi[j].classList.contains("alreadyDone")) {
            allElementsLi[j].style = "display: block";
        }
        else allElementsLi[j].style = "display: none";
    }
};

document.getElementById("showAll").addEventListener("click", fShowAll);

function fShowAll () {
    for (let i =0; i<allElementsLi.length; i++) {
        allElementsLi[i].style = "display: block";
    }
};

document.getElementById("showNext").addEventListener("click", fShowNext);

function fShowNext () {
    for (let i =0; i<allElementsLi.length; i++) {
        allElementsLi[i].style = "display: block";
    }
    for (let k =0; k<allElementsLi.length; k++) {
        if (allElementsLi[k].classList.contains("alreadyDone")) {
            allElementsLi[k].style = "display: none";
        }
        else allElementsLi[k].style = "display: block";
    }
};
