/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Partial => Partial<T>
 * Required => Required<T>
 * Readonly => Readonly<T>
 * Pick => Pick<T, K>
 * Omit => Omit<T, K>
 */

// use case : transform existing interface to new interface without modify existing interface

interface User {
    id: number;
    name: string;
    age?: number;
    createdAt: Date;
}

// function CreateUser(data: User) {}
//* Partial => Partial<T> adalah opsional
// function CreateUser(data: Partial<User>) {}
//* Required => Required<T> adalah wajib
// function CreateUser(data: Required<User>) {}
//* Readonly => Readonly<T> adalah tidak bisa direinit
// function CreateUser(data: Readonly<User>) {}
//* Pick => Pick<T, K> adalah menentukan salahsatu / beberapa
// function CreateUser(data: Pick<User, 'id' | 'name'>) {}
//* Omit => Omit<T, K> adalah pengecualian
function CreateUser(data: Omit<User, 'id' | 'name'>) {}

CreateUser({
    // id: 1,
    // name: 'doe',
    age: 20,
    createdAt: new Date(),
});

/**
 * Record  => Record<K,T>
 */
//* Record  => Record<K,T> adalah object yang fleksibel
type Response = Record<string, string | number>;
const message: Response = {
    id: 1,
    name: 'sds',
};

/*
usecase : object of object
  {
    propA: {id,name,age},
    propB: {id,name,age}
  }
*/

type Users = Record<string, User>;
const allUsers = {
    '1': { id: 1, name: 'sa', createdAt: new Date(), age: 20 },
    '2': { id: 2, name: 'fa', createdAt: new Date(), age: 22 },
};

/**
 * Extract => Extract<T, U>
 * Exclude => Exclude<T, U>
 */

interface Post {
    id: string;
    title: string;
    createdAt: Date;
}
//* Extract => Extract<T, U> adalah mencari persamaan dalam 2 interface
//* keyof merubah struktur interface menjadi union
type Extype = Extract<keyof User, keyof Post>;

//* Exclude => Exclude<T, U>adalah mencari yang tidak sama dalam 2 interface
type Excype = Exclude<keyof User, keyof Post>;
