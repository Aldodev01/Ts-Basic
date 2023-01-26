export class User {
  public name: string;

  constructor(name: string, public age: number) {
    this.name = name;
  }

  setName(value: string): string {
    return (this.name = value);
  }

  getName = (): string => {
    return this.name;
  };
}
let user = new User("aldo", 24);
console.log(user);

//public = bisa diakses disemua class / dari luar class
//protected = hanya bisa diakses dari class tersebut, dan class turunannya
//private = hanya bisa diakses dari class itu sendiri

//extends berarti Admin mewarisi apa yang dimiliki oleh User
class Admin extends User {
  read: boolean = true;
  write: boolean = true;

  //   super constructor
  phone: string;
  //   private var
  private _email: string = "";

  constructor(phone: string, name: string, age: number) {
    // supercal
    super(name, age);
    this.phone = phone;
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  // set tidak boleh untuk direturn jangan gunakan :void / :any
  set email(value: string) {
    if (value.length < 5) {
      this._email = "Email harus lebih dari 5 character";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

let admin = new Admin("0034903148", "polpol", 90);
admin.email = "aldo";
console.log(admin);
console.log(admin.getName(), admin.getRole(), admin.setName("kio"));
console.log(admin.email);
