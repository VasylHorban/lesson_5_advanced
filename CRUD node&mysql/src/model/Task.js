class Task{
    constructor(){}
    setId(id){
        if(id === undefined || id === '' || isNaN(id)) return false;
        this.id = id;
    }
    setName(name){
        if(name === undefined || name === '' || !isNaN(name)) return false;
        this.name = name.trim();  
    }
    setDescription(description){
        if(description === undefined || description === '' || !isNaN(description)) return false;
        this.description = description.trim();  
    }
    setIsDone(isDone){
        if(isDone === undefined || isDone === '' || isNaN(isDone)) {
            this.isDone = false
            return
        };
        this.isDone = isDone
    }
    isCorrectTask(){
        let isCorrect = true;
        [this.id, this.name, this.description, this.isDone].forEach(key=> {
            if(key === undefined || key === '') isCorrect = false
        })
        return isCorrect
    }
    static isCorrectId(id){
        if(id === undefined || id === '' || isNaN(id)) return false;
        return true
    }
}

module.exports = Task;