/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance

abstract class Root {
    abstract done: boolean;
}

class User extends Root {
    // properties
    id: number;
    firstName: string;
    lastName: string;
    protected save: boolean;
    private token: string;
    static MY_FAILED_LOGIN = 2;
    private retryLogin = 0;
    done: boolean;

    // inisialisasi
    constructor(id: number, firstName: string, lastName: string) {
        super();
        (this.id = id),
            (this.firstName = firstName),
            (this.lastName = lastName),
            (this.save = false),
            (this.token = 'asede'),
            (this.done = false);
    }

    // method
    login(username: string, password: string) {
        this.retryLogin += 1;
        if (username == 'admin' && password == 'admin') {
            return true;
        }

        if (this.retryLogin >= User.MY_FAILED_LOGIN) {
            return 'max login attemps';
        }

        return false;
    }
    // register() {}
}

User.MY_FAILED_LOGIN = 5;
let myUser = new User(1, 'aldo', 'devv');

console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('', ''));
console.log(myUser.login('admin', 'admin'));

class EnhacementUser extends User {
    location: string;
    constructor(location: string, id: number, firstName: string, lastName: string) {
        super(id, firstName, lastName);
        this.location = location;
        this.save;
    }
}

let newMyUser = new EnhacementUser('depok', 2, 'aldo', 'devv');
