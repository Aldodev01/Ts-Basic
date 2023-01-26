"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.age = age;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
    }
    setName(value) {
        return (this.name = value);
    }
}
exports.User = User;
let user = new User("aldo", 24);
console.log(user);
//public = bisa diakses disemua class / dari luar class
//protected = hanya bisa diakses dari class tersebut, dan class turunannya
//private = hanya bisa diakses dari class itu sendiri
//extends berarti Admin mewarisi apa yang dimiliki oleh User
class Admin extends User {
    constructor(phone, name, age) {
        // supercal
        super(name, age);
        this.read = true;
        this.write = true;
        //   private var
        this._email = "";
        this.phone = phone;
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    // set tidak boleh untuk direturn jangan gunakan :void / :any
    set email(value) {
        if (value.length < 5) {
            this._email = "Email harus lebih dari 5 character";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
let admin = new Admin("0034903148", "polpol", 90);
admin.email = "aldo";
console.log(admin);
console.log(admin.getName(), admin.getRole(), admin.setName("kio"));
console.log(admin.email);
