type Product ={
    id: number;
    name: string;
    price:string;
    stock:number;
    color?:string
}

type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>
type ProductWithOutStock = Omit<Product, 'stock'>
type OptionalProduct = Partial<Product>

type ProductWithColor = Required<Product>;
const product:ProductWithColor={
     id: 1,
    name: 'car',
    price:'2000',
    stock:4,
    color:"Black"
}

type ProductReadOnly = Readonly<Product>

const anotherProduct ={
    id:2,
    name: 'Bike',
    price:'2000',
}

const emptyObject : Record<string,unknown> ={};



