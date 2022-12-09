"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const typeDefs = (0, apollo_server_1.gql) `

type Product{
    id:ID!,
    name:String,
    image:String,
    brand:String,
    category:String,
    description:String,
    price:Int,
    countInStock:Int,
    numReviews:Int,
    rating:Int
}

type User{
    id:ID!,
    fullname:String,
    email:String,
    gender:String,
    address:String,
    phone:String,
    password:String
}

input CreateUserInput{
    fullname:String!,
    email:String!,
    gender:String!,
    address:String!,
    phone:String!,
    password:String!
}
input UpdateUserInput{
    id:ID!,
    fullname:String,
    email:String,
    gender:String,
    address:String,
    phone:String,
    password:String
}

input CreateProductInput{
    name:String!,
    image:String!,
    brand:String!,
    category:String!,
    description:String!,
    price:Int!,
    countInStock:Int!,
    numReviews:Int!,
    rating:Int!
}
input UpdateProductInput{
        id:ID!,
        name:String,
        image:String,
        brand:String,
        category:String,
        description:String,
        price:Int,
        countInStock:Int,
        numReviews:Int,
        rating:Int
    }

    
type message{
    message:String
}

type Query{
    allProducts:[Product]!
    singleProduct(id:ID!):Product
    allUsers:[User]!
    singleUser(id:ID!):User
}
type Mutation{
    createProduct(input: CreateProductInput):Product
    updateProduct(input: UpdateProductInput):Product
    deleteProduct(id:ID!):message!
    createUser(input: CreateUserInput): User
    updateUser(input: UpdateUserInput): User
    deleteUser(id:ID!):message!
}
`;
exports.default = typeDefs;
