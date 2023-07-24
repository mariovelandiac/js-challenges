function main() {
    const names = ["Mario", "Ana", "John", "Katherin"]
    const response = likes(names);
    console.log(response);
}

function likes(names) {
    try {
        validateNames(names);
    } catch (e) {
        console.log("the input is not an array");
    }
    const size = names.length;
    const message = new Message(names, size);
    return message.getContent();
}

function validateNames(names) {
    if (!Array.isArray(names)) {
        throw new Error ("It is not an Array")
    }
}

class Message {
    constructor(names, size) {
        this.names = names;
        this.size = size;
        this.content;
        this.factoryBySize()
    }

    factoryBySize() {
        switch (this.size) {
            case 0: {
                this.content = "no one likes this"
                break
            }
            case 1: {
                this.content = this._oneLikesIt();
                break
            } 
            case 2: {
                this.content = this._twoLikesIt();
                break
            }
            case 3: {
                this.content = this._threeLikesIt();
                break
            }
            default: {
                this.content = this._manyLikesIt();
            }
        }
    }

    getContent() {
        return this.content;
    }

    _oneLikesIt() {
        return `${this.names[0]} likes this`
    }

    _twoLikesIt() {
        return `${this.names[0]} and ${this.names[1]} like this`
    }

    _threeLikesIt() {
        return `${this.names[0]}, ${this.names[1]} and ${this.names[2]} like this`
    }

    _manyLikesIt() {
        return `${this.names[0]}, ${this.names[1]} and ${this.names.length - 2} others like this`
    }

}

main()