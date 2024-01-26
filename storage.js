class Storage {

    static addListToStorage(newList) {
        let lists = this.getListsFromStorage();
        lists.push(newList);
        localStorage.setItem("lists", JSON.stringify(lists));
    }

    static getListsFromStorage() {
        let lists;   //key

        if (localStorage.getItem("lists") === null) {
            lists = [];
        }
        else {
            lists = JSON.parse(localStorage.getItem("lists"));
        }
        return lists;
    }

    static deleteListFromStorage (listDate){
        let lists =this.getListsFromStorage();
        lists.forEach(function(list,index){
            if(list.date ===listDate){
                lists.splice(index,1)
            }
        });
        localStorage.setItem("lists",JSON.stringify(lists));
    }

    static clearAllListsFromStorage(){
        localStorage.removeItem("lists");
    }
}



