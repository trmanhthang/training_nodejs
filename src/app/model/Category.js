class Category {
    private id = 0;
    private name;


    constructor(name) {
        this._id++;
        this._name = name;
    }


    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}