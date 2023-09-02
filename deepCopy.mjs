import cloneDeep from 'lodash'
class MyClass {
    constructor(name) {
        this.name = name;
    }

    myMethod() {
        return `Hello from ${this.name}`;
    }
}

function deepCopyMethod(obj, _hash = new WeakMap()) {
    // Circular References
    if (_hash.has(obj)) {
        return _hash.get(obj);
    }

    // primitive data
    if (
        typeof obj == "number" ||
        typeof obj == "string" ||
        typeof obj == "boolean" ||
        obj == undefined ||
        obj == null
        ) {
            return obj;
        }
        
    let copyObj
    // Array
    if (Array.isArray(obj)) {
        copyObj = [];
        for (let item of obj) {
            copyObj.push(deepCopyMethod(item, _hash));
        }
        return copyObj;
    }

    // Functions
    if (obj instanceof Function) {
        copyObj = {};
        return obj.bind(copyObj);
    }

    // Instances
    if (typeof obj == 'object' && obj.constructor != Object) {
        copyObj = new obj.constructor();
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                copyObj[key] = deepCopyMethod(obj[key], _hash)
            }
        }
        return copyObj;
    }

    // Object
    if (typeof obj == "object") {
        copyObj = {}
        for (let key in obj) {
            copyObj[key] = deepCopyMethod(obj[key], _hash);
        }
        return copyObj;
    }
}

const obj = {
    a: "2",
    b: true,
    c: 45,
    d: function () {
        let a = 0;
        let b = 1;
        let Fibonacci = a + b;
        a++;
        b++;
    },
    f: [1, 2, 5, 2, 3, 6, 1, 2, 5, 45, 213],
    ge: {
        name: "Mario",
        lastname: "Velandia",
    },
    g: undefined,
    k: null,
    m: Infinity,
    z: new MyClass("hola"),
};
obj.autoRef = obj.f;

function main() {
    const copy = deepCopy(obj);
    const frameworkCopy = cloneDeep(obj) 
    console.log(obj)
    console.log(copy)
    console.log(frameworkCopy == obj)
    console.log(copy.z.myMethod())
    console.log(frameworkCopy.z.myMethod())
}


export default deepCopyMethod