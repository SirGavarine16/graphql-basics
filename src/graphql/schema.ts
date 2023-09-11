import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLNonNull } from 'graphql';

import { db } from '../utils';
import { Post, User } from './objects';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        post: {
            type: Post,
            args: {
                id: { type: GraphQLString },
            },
            resolve: async (_, { id }) => {
                const post = await db.getPost(id);
                return post;
            }
        },
        user: {
            type: User,
            args: {
                id: { type: GraphQLString },
            },
            resolve: async(_, { id }) => {
                const user = db.getUser(id);
                return user;
            }
        }
    }
});

const RootMutation = new GraphQLObjectType({
    name: 'RootMutation',
    fields: {
        addUser: {
            type: User,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString)  },
                age: { type: new GraphQLNonNull(GraphQLInt) },
            },
            resolve: async (_, { name, age }) => {
                const user = await db.addUser(name, age);
                return user;
            },
        },
        deleteUser: {
            type: User,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve: async (_, { id }) => {
                const response = await db.deleteUser(id);
                return response;
            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});

export default schema;