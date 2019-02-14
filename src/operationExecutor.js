'use strict';

class OperationExecutor {
    constructor() {
        this.state = {
            0: this.firstTaskExecute.bind(this),
            1: this.secondTaskExecute.bind(this),
            2: this.thirdTaskExecute.bind(this),
            3: this.fourthTaskExecute.bind(this),
            4: this.fifthTaskExecute.bind(this),
            5: this.sixthTaskExecute.bind(this),
            6: this.seventhTaskExecute.bind(this),
            7: this.eighthTaskExecute.bind(this),
            8: this.ninthTaskExecute.bind(this),
            9: this.tenthTaskExecute.bind(this),
        };
    }

    /**
     * Execute some transformation of incoming arg
     * @param actionType – type of transformation
     * @param arg – incoming arg
     * @returns object with result
     */
    execute(actionType, arg) {
        return this.state[actionType](arg);
    }

    /**
     * First task of homework
     * @param arg – object with value that you should clone
     * arg = { obj1: { ... } }
     * @returns object that contains source object and his modified clone
     */
    firstTaskExecute(arg) {
        let copy = {};
        copy.obj1 = Object.assign({}, arg.obj1);
        let relatives = [];
        arg.obj1.relatives.forEach((item) =>
            {
                relatives.push(Object.assign({}, item));
            });
        //arg.obj1.relatives = []; //checking result
        copy.obj1.relatives = relatives;
        return copy;
    }

    /**
     * Second task of homework
     * @param arg – object with values that you should combine
     * arg = { obj1: { ... }, obj2: { ... } }
     * @returns object that contains source objects and their combined and modified clone
     */
    secondTaskExecute(arg) {
        let r = {...arg.obj1, ...arg.obj2};
        //arg.obj1.a = 99; //checking result
        return r;
    }

    /**
     * Third task of homework
     * @param arg – object with value that you should modify
     * arg = { obj1: { ... } }
     * @returns object that contains modified source object
     */
    thirdTaskExecute(arg) {
        let relatives = arg.obj1.relatives;
        relatives.forEach((item) => {
            if (item.firstName === "Lena" || item.firstName === "Tanya") {
                item.gender = "female";
            }
            if (item.firstName === "Roma") {
                item.gender = "male";
            }
        });
        arg.obj1.relatives = relatives;
        return arg;
    }

    /**
     * Fourth task of homework
     * @param arg – object with value that contains relatives
     * arg = { obj1: { ... relatives: [ ... ] ... } }
     * @returns object that contains array of string with female relatives
     */
    fourthTaskExecute(arg) {
        let relatives = arg.obj1.relatives;
        let result = [];
        relatives.forEach((item) => {
            if (item.gender === "female") {
                const name = item.firstName;
                result.push(`${name}, hello! We are glad to see you\n`);
            }
        });
        return result /* variable with result */;
    }

    /**
     * Fifth task of homework
     * @param arg – object which contains new color of the button and the class of it
     * arg = { color: '...', className: '...' }
     * @returns string which contains the class of the button and current color
     */
    fifthTaskExecute(arg) {
        let element = document.getElementsByClassName(arg.className)[0];
        element.style.backgroundColor = arg.color;
        return `className: ${arg.className}; color: ${arg.color}`;
    }

    /**
     * Sixth task of homework
     * @param arg – object with values that you should handle
     * arg = { obj1: { ... } }
     * @returns object that contains array of items that match the hostname on which the application is running
     */
    sixthTaskExecute(arg) {
        let host = location.href;
        let result = {};
        result.hostNames = [];
        arg.hostNames.forEach((item) => {
            if (host.indexOf(item) >= 0) {
                result.hostNames.push(item);
            }
        });
        return result;
    }

    /**
     * Seventh task of homework
     * @param arg – object which contains simple key-value pairs
     * arg = { obj1: { key: value } }
     * @returns obj that contains swap pairs ('value: key')
     */
    seventhTaskExecute(arg) {
        let result = {};
        let keys = Object.keys(arg);
        keys.forEach((item) => {
            result[arg[item]] = item;
        });
        return result;
    }

    /**
     * Eighth task of homework
     * @param arg – object which contains two array
     * arg = { obj1: { ... } }
     * @returns obj that built using array's values
     */
    eighthTaskExecute(arg) {
        let result = {};
        let arr = [];
        arg.arr1.forEach((item) => {
            arr.push(item);
        });
        arg.arr2.forEach((item) => {
            arr.push(item);
        });
        let lastKey;
        arr.forEach((item, i) => {
            if (i % 2 === 0) {
                result[item] = null;
                lastKey = item;
            } else {
                result[lastKey] = item;
            }
        });
        return result;
    }

    /**
     * Ninth task of homework
     * @param arg – object which contains array of users
     * arg = { obj1: { users: [...] } }
     * @returns obj that contains pairs id: obj with this id
     */
    ninthTaskExecute(arg) {
        let result = {};
        let users = arg.users;
        users.forEach((item, i) => {
            let obj = {};
            let keys = Object.keys(item);
            keys.forEach((key) => {
                if(key !== "id") {
                    obj[key] = item[key];
                }
            });
            result[item.id] = Object.assign({}, obj);
        });
        return result;
    }

    /**
     * Tenth task of homework
     * @param arg – object which contains class of item and empty array
     * arg = { obj1: { ... } }
     * @returns obj that contains the array with info about children of the node
     */
    tenthTaskExecute(arg) {

        let element = document.getElementsByClassName(arg.className)[0];
        let arr = element.childNodes;
        let result = {children:[]};
        arr.forEach((item) => {
            result.children.push({
                    "tag": item.tagName,
                    "class": item.className
                }
            );
        });
        return result;

    }

}

export default OperationExecutor;