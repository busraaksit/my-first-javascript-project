class UI {

    static displayMessage(message,type){
        const cardBody = document.querySelector(".card-body");

        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
        div.className = "alert alert-danger";
        cardBody.appendChild(div);
        setTimeout(function(){
            div.remove();
        },2000);
    }

    static addListToUI(newList){
     const listList =document.getElementById("lists");
     listList.innerHTML += `
     <tr>
     <td>${newList.date}</td>
        <td>${newList.activite}</td>
        <td><a href="#" id ="delete-list" class ="btn btn-danger">Liste Sil</a></td>
        </tr>`;

    }
    static clearInputs(element1,element2){
        element1.value ="";
        element2.value ="";

    }

    static loadAllLists(lists){
        const listList =document.getElementById("lists");

        lists.forEach(function(list) {

        listList.innerHTML += `
        <tr>
        <td>${list.date}</td>
        <td>${list.activite}</td>
        <td><a href="#" id ="delete-list" class = "btn btn-danger">Aktiveyi sil</a></td>
     </tr>`;
    });
} 

static deleteListFromUI(element){
    element.parentElement.parentElement.remove();
}

static clearAllListsFromUI(){
    const listList= document.getElementById("lists");
    while (listList.firstElementChild !== null) {
listList.firstElementChild.remove();
    }
}
}


