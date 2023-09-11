import { type UserData } from './../graphql/objects/user';
import { type PostData } from './../graphql/objects/post';

let posts: PostData[] = [
    {
        id: '1',
        title: 'First Post!',
        content: "This is my first post, how fun!",
        userId: '1'
    },
    {
        id: '2',
        title: 'Hello World!',
        content: 'Welcome to GraphQL!',
        userId: '2'
    },
    {
        id: '3',
        title: 'Important Message!',
        content: 'Akagi Best Waifu!',
        userId: '1',
    },
];

let users: UserData[] = [
    {
        id: '1',
        name: 'herrscher-of-loneliness',
        age: 23,
    },
    {
        id: '2',
        name: 'nai',
        age: 19
    }
]

export const getPost = async (id: string) => {
    return new Promise<PostData | null>((resolve) => {
        setTimeout(() => {
            resolve(posts.find(p => p.id === id) || null);
        }, 300);
    });
}

export const getAllPostsByUser = async (userId: string) => {
    return new Promise<PostData[]>((resolve) => {
        setTimeout(() => {
            resolve(posts.filter(p => p.userId === userId));
        }, 300);
    });
}

export const getUser = async (id: string) => {
    return new Promise<UserData | null>((resolve) => {
        setTimeout(() => {
            resolve(users.find(u => u.id === id) || null);
        }, 300);
    });
}

export const addUser = async (name: string, age: number) => {
    return new Promise<UserData>((resolve) => {
        setTimeout(() => {
            const newIndex = users.length > 0 ? `${parseInt(users[users.length - 1].id) + 1}` : '1';
            const user = { id: newIndex, name, age };
            users.push(user);
            resolve(user);
        }, 200);
    });
}

export const deleteUser = async (id: string) => {
    return new Promise<null>((resolve) => {
        setTimeout(() => {
            users = users.filter(u => u.id !== id);
            resolve(null);
        }, 200);
    });
}