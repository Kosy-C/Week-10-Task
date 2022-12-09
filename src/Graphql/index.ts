import UserResolver from './resolvers/user'

export default {
        Query:{
            ...UserResolver.Query
        },

        Mutation:{
            ...UserResolver.Mutation
        }
}