"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_model_1 = __importDefault(require("../../model/users.model"));
const products_model_1 = __importDefault(require("../../model/products.model"));
const UserResolver = {
    Query: {
        allUsers: async () => {
            try {
                const user = await users_model_1.default.find();
                return user;
            }
            catch (err) {
                console.log(err);
            }
        },
        singleUser: async (_, args) => {
            try {
                const id = args.id;
                const user = await users_model_1.default.findById(id);
                return user;
            }
            catch (err) {
                console.log(err);
            }
        },
        allProducts: async () => {
            try {
                const product = await products_model_1.default.find();
                return product;
            }
            catch (err) {
                console.log(err);
            }
        },
        singleProduct: async (_, args) => {
            try {
                const id = args.id;
                const product = await products_model_1.default.findById(id);
                return product;
            }
            catch (err) {
                console.log(err);
            }
        },
    },
    Mutation: {
        createUser: async (_, args) => {
            try {
                const newUser = {
                    fullname: args.input.fullname,
                    email: args.input.email,
                    gender: args.input.gender,
                    address: args.input.address,
                    phone: args.input.phone,
                    password: args.input.password
                };
                const user = await users_model_1.default.create(newUser);
                if (user) {
                    return user;
                }
            }
            catch (err) {
                console.log(err);
            }
        },
        updateUser: async (_, args) => {
            try {
                const id = args.input.id;
                const updateUser = {
                    id: args.input.id,
                    fullname: args.input.fullname,
                    email: args.input.email,
                    gender: args.input.gender,
                    address: args.input.address,
                    phone: args.input.phone,
                    password: args.input.password
                };
                const updateNew = await users_model_1.default.findByIdAndUpdate(id, updateUser, { new: true });
                if (updateNew) {
                    return updateNew;
                }
            }
            catch (err) {
                console.log(err);
            }
        },
        deleteUser: async (_, args) => {
            try {
                const id = args.id;
                const deleteUser = await users_model_1.default.findByIdAndDelete(id);
                if (deleteUser) {
                    return {
                        message: "User deleted successfully"
                    };
                }
            }
            catch (err) {
                console.log(err);
            }
        },
        createProduct: async (_, args) => {
            try {
                const newProduct = {
                    name: args.input.name,
                    image: args.input.image,
                    brand: args.input.brand,
                    category: args.input.category,
                    description: args.input.description,
                    price: args.input.price,
                    countInStock: args.input.countInStock,
                    rating: args.input.rating,
                    numReviews: args.input.numReviews
                };
                const product = await products_model_1.default.create(newProduct);
                if (product) {
                    return product;
                }
            }
            catch (err) {
                console.log(err);
            }
        },
        updateProduct: async (_, args) => {
            try {
                const id = args.input.id;
                const updateProduct = {
                    id: args.input.id,
                    name: args.input.name,
                    image: args.input.image,
                    brand: args.input.brand,
                    category: args.input.category,
                    description: args.input.description,
                    price: args.input.price,
                    countInStock: args.input.countInStock,
                    rating: args.input.rating,
                    numReviews: args.input.numReviews
                };
                const updateNew = await products_model_1.default.findByIdAndUpdate(id, updateProduct, { new: true });
                if (updateNew) {
                    return updateNew;
                }
            }
            catch (err) {
                console.log(err);
            }
        },
        deleteProduct: async (_, args) => {
            try {
                const id = args.id;
                const deleteListing = await products_model_1.default.findByIdAndDelete(id);
                if (deleteListing) {
                    return {
                        message: "Product deleted successfully"
                    };
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }
};
exports.default = UserResolver;
