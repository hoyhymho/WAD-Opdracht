
export default class Comment {

    message = undefined;
    created = null;

    constructor(message){
        this.message = message;
        this.created = Date.now();
    }

}