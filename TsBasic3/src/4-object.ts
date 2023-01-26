/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/

let product = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};

//* Inline Inference
let product1: {
    id: string;
    productName: string;
    price: number;
    note: string;
};
product1 = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};

//* Dynamis Interface
interface ProductType {
    id: string;
    productName: string;
    price: number;
    note: string;
}

let product2: ProductType = {
    id: 'ID-1',
    productName: 'Macbook Air',
    price: 2000,
    note: '',
};

/**
 * 2. Nested Object
 */
/**  
 * {
  id: 'ID-1',
  productName: "Macbook Pro",
  price: 2000,
  productDetail: {
    year: 2019,
    storage: 256
  }
}
 */

interface itemType {
    id: string;
    productName: string;
    price: number;
    productDetail: itemDetailType;
}

interface itemDetailType {
    year: number;
    storage: number;
}

let product3: itemType;
product3 = {
    id: 'ID-1',
    productName: 'Macbook Pro',
    price: 2000,
    productDetail: {
        year: 2019,
        storage: 256,
    },
};

/**
 * 3. Nested, Array of Object
 */

/**
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/
interface addressType {
    id: string;
    name: string;
    address: Array<detailAddressType>;
}

interface detailAddressType {
    street: string;
    city: string;
}

let address: addressType;
address = {
    id: 'U-1',
    name: 'Adi dodi',
    address: [
        {
            street: 'Jln. Setapak No.2',
            city: 'Jakarta',
        },
        {
            street: 'Jln. Lebar sekali no 10',
            city: 'Medan',
        },
    ],
};

/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/
interface barangType {
    idCart: string;
    dateOrdered: string;
    items: {
        [key: string]: itemsDetailBarangType;
    };
}
interface itemsDetailBarangType {
    id: string;
    name: string;
    qty: number;
}

let product4: barangType;
product4 = {
    idCart: 'C1',
    dateOrdered: '2020-05-20',
    items: {
        p1: {
            id: 'P-1',
            name: 'Mechanical Keyboard',
            qty: 2,
        },
        p2: {
            id: 'P-2',
            name: 'USB Hub',
            qty: 1,
        },
    },
};

/**
 * 5. Object Destructuring
 */

/*
  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
*/
let fullName = {
    firstName: 'Sastra',
    lastName: 'Nababan',
};
let {
    firstName,
    lastName,
}: {
    firstName: string;
    lastName: string;
} = fullName;
