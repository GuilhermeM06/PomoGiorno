class Activity {
    constructor(description) {
        this._description = description;
    }
    get description() {
        return this._description;
    }
    showActivity() {
        this.description;
        console.log(this.description);
    }
}
