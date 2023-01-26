interface Laptop {
    nama: string;
    on(): void;
    off(): void
}

class Asus implements Laptop {
    nama: string;
    isGaming: Boolean;

    constructor(nama: string, isGaming: boolean) {
        this.nama = nama
        this.isGaming = isGaming
    }
    on (): void
    {
       console.log( this.nama, "nyala");
       
    }
    off (): void
    {
       console.log("mati");
       
    }
    
}

class MacBook implements Laptop {
    nama: string = "Macbook";
    isGaming: Boolean = false;
    on (): void
    {
       console.log("nyala");
       
    }
    off (): void
    {
       console.log("mati");
       
    }
    
}

let asus = new Asus("asus", true)
asus.on();
