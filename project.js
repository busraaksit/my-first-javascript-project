const form = document.getElementById("list-form");
const dateElement = document.querySelector("#date");
const activiteElement = document.querySelector("#activite");
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-list");

eventlisteners();

function eventlisteners() {
    form.addEventListener("submit",addList);
    document.addEventListener("DOMContentLoaded", function(){ 
        let lists = Storage.getListsFromStorage();
        UI.loadAllLists(lists);
        });
        cardbody.addEventListener("click",deleteList); 
        clear.addEventListener("click",clearAllLists);
}

function addList(e) {
    const date = dateElement.value;
    const activite = activiteElement.value;

    if (date === "" || activite === "") {
        //hata verir
        UI.displayMessage("tüm alanları doldurunuz");
    }
    else {
        //yeni fillistm ekleme
        const newList = new List(date,activite);

        UI.addListToUI(newList);
        UI.displayMessage("Aktivite başarıyla eklendi");
        Storage.addListToStorage(newList);

    }
    UI.clearInputs(dateElement, activiteElement);
    e.preventDefault();
}

function deleteList(e){
    if(e.target.id === "delete-list"){
   UI.deleteListFromUI(e.target);
  Storage.deleteListFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
  UI.displayMessages("silme işlemi tamamlandı.","success");
}
}

function clearAllLists(){
    if(confirm("Emin misiniz?")){
        UI.clearAllListsFromUI();
        Storage.clearAllListsFromStorage();

    }
}


