export interface userInstance {
    fullname:string;
     email:string;
     gender:string;
     address:string;
     phone: string;
     password:string;
   }
export interface CreateUserInput{
 input: userInstance
}

export interface ArgForUpdateUser{
    id: string,
    fullname:string,
    email:string,
    gender:string,
    address:string,
    phone: string,
    password:string
    }


export interface UpdateUser{
    input: ArgForUpdateUser
    }

export interface DeleteUser {
        id: string,
    }

export interface productInstance {
        name:string;
        image:string;
        brand:string;
        category:string;
        description:string;
        price:number;
        countInStock:number;
        rating:number;
        numReviews:number
      }

export interface CreateProductInput{
     input: productInstance
}

export interface ArgForUpdateProduct{
    id: string,
    name:string,
    image:string,
    brand:string,
    category:string,
    description:string,
    price:number,
    countInStock:number,
    rating:number,
    numReviews:number
    }

export interface UpdateProduct{
    input: ArgForUpdateProduct
 }

 export interface DeleteProduct {
    id: string,
}

