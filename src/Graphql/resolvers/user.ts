import UserDb from '../../model/users.model'
import Products from '../../model/products.model'
// import Products from '../../model/products.model'
import { CreateProductInput, CreateUserInput, DeleteProduct, DeleteUser, UpdateProduct, UpdateUser} from './type';


const UserResolver = {
    Query: {
        allUsers: async () => {
            try {
                const user= await UserDb.find()
                return user;
            } catch (err) {
                console.log(err)
            }
        },
    singleUser: async (_: unknown, args: {id: string}) => {
        try {
            const id = args.id
            const user= await UserDb.findById(id)
            return user;
        }catch (err) {
            console.log(err)
        }
    },

        allProducts: async () => {
            try {
                const product= await Products.find()
                return product;
            }catch (err) {
                console.log(err)
            }
        },
        singleProduct: async (_: unknown, args: {id: string}) => {
            try {
                const id = args.id
                const product= await Products.findById(id)
                return product;
            } catch (err) {
                console.log(err)
            }
    },
},
    Mutation: {
        createUser: async (_: unknown, args: CreateUserInput) => {
            try {
                const newUser = {
                    fullname: args.input.fullname,
                    email: args.input.email,
                    gender: args.input.gender,
                    address: args.input.address,
                    phone: args.input.phone,
                    password: args.input.password
                }
                const user= await UserDb.create(newUser)
                if (user) {
                    return user;
                }
            } catch (err) {
                console.log(err)
            }
        },

        updateUser: async (_: unknown, args: UpdateUser) => {
            try {
                const id = args.input.id

                const updateUser = {
                    id: args.input.id,
                    fullname: args.input.fullname,
                    email: args.input.email,
                    gender: args.input.gender,
                    address: args.input.address,
                    phone: args.input.phone,
                    password: args.input.password
                }
                const updateNew = await UserDb.findByIdAndUpdate(id, updateUser, { new: true })
                if (updateNew) {
                    return updateNew
                }
            } catch (err) {
                console.log(err)
            }
        },

        deleteUser: async(_: unknown, args:DeleteUser)=>{
            try{
                const id = args.id
                const deleteUser = await UserDb.findByIdAndDelete(id)
                if(deleteUser){
                    return {
                        message: "User deleted successfully"
                    }
                }
            }catch(err){
                console.log(err);
            }
        },
        

        createProduct: async (_: unknown, args: CreateProductInput) => {
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
                }
                const product= await Products.create(newProduct)
                if (product) {
                    return product;
                }
            } catch (err) {
                console.log(err)
            }
        },

        updateProduct: async (_: unknown, args: UpdateProduct) => {
            try {
                const id = args.input.id

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
                }
        const updateNew = await Products.findByIdAndUpdate(id, updateProduct, { new: true })
                if (updateNew) {
                    return updateNew
                }
            } catch (err) {
                console.log(err)
            }
        },

        deleteProduct: async(_: unknown, args:DeleteProduct)=>{
            try{
                const id = args.id
                const deleteListing = await Products.findByIdAndDelete(id)
                if(deleteListing){
                    return {
                        message: "Product deleted successfully"
                    }
                }
            }catch(err){
                console.log(err);
            }
        }
    }
}
export default UserResolver

