import { GraphQLObjectType, GraphQLString } from 'graphql';

import User from './user';
import { db } from '../../utils';

export type PostData = {
    id: string;
    title: string;
    content: string;
    userId: string;
}

const Post: GraphQLObjectType<PostData> = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: { type: GraphQLString },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        user: {
            type: User,
            resolve: async ({ userId }) => {
                const user = await db.getUser(userId);
                return user;
            }
        }
    }),
});

export default Post;