import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList } from 'graphql';

import Post from './post';
import { db } from '../../utils';

export type UserData = {
    id: string;
    name: string;
    age: number;
}

const User: GraphQLObjectType<UserData> = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        posts: {
            type: new GraphQLList(Post),
            resolve: async ({ id }) => {
                const posts = await db.getAllPostsByUser(id);
                return posts;
            },
        }
    }),
});

export default User;