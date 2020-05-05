/* class Cat {
    catList = [];
    animalsArray=new VeterinaryManager
    filterItems = (query) => {
        return this.animalsArray.animalList.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
    };

    catFilter() {
        this.filterItems(filterItems('1'))
    }
} */
class Cat{
    catMed(pCat){
        setInterval(()=>{pCat.pop()},7000)
        console.log(pCat)
    }
}