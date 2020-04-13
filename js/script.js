let input, add, newDo, listItem, delID, editID, inputID, delAll, done, imgShow;

add = document.querySelector(".add");
input = document.querySelector(".input");
listItem = document.querySelector(".list");
delAll = document.querySelector(".delAll");

delAll.onclick = function () {
    listItem.innerHTML = '';
};

    function one1 () {
        newDo = input.value;
        listItem.insertAdjacentHTML("beforeend", "<li class='hide'><div><div class='work'><span>" + newDo + "</span><button class='deleteOne'>X</button><input type='text' class='inputEdit'><button class='edit'>edit</button></div><div class=\"check\"><img src=\"img/done.png\" alt=\"\" class=\"done\"></div></div></li>");
        input.value = "";
        delID = document.querySelectorAll(".deleteOne");
        editID = document.querySelectorAll(".edit");
        inputID = document.querySelectorAll(".inputEdit");
        done = document.querySelectorAll(".check");
        imgShow = document.querySelectorAll(".done");
        two ();

}
add.addEventListener("click", one1);
input.addEventListener("keydown", one2);

function one2 (event) {
    if (event.key === "Enter") {
        one1 ()
    }
}

function two () {
    for (let i=0; i<delID.length; i++) {
        delID[i].onclick = function () {
            this.parentElement.parentElement.outerHTML = "";
        }
        editID[i].onclick = function (event) {
            console.log(event);
            this.previousElementSibling.style = "display: block";
            this.previousElementSibling.value = this.parentElement.firstChild.textContent;
            this.onclick = function () {
                console.log(this.parentElement.firstChild);
                this.parentElement.firstChild.innerHTML = this.previousElementSibling.value;
                this.previousElementSibling.style = "display: none";
                two();
            }
        }
    }

    for (let j=0; j<done.length; j++) {
        done[j].onclick = function done1 () {
            this.querySelector(".done").style = "display: block";
            this.onclick = function () {
                this.querySelector(".done").style = "display: none";
                two();
            }
        }
    }
}

document.querySelector("#showDoned").onclick = function () {
    for (let p=0; p<imgShow.length; p++) {
        if (imgShow[p].style.display !== "block") {
            imgShow[p].parentElement.parentElement.style = "display: none";
        }
    }
}

document.querySelector("#showAll").onclick = function () {
    for (let p=0; p<imgShow.length; p++) {
        imgShow[p].parentElement.parentElement.style = "display: block";
    }
}

document.querySelector("#showNext").onclick = function () {
    for (let p=0; p<imgShow.length; p++) {
        if (imgShow[p].style.display === "block") {
            imgShow[p].parentElement.parentElement.style = "display: none";
        }
    }
}

