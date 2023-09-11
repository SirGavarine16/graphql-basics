# GraphQL Simple Example

Simple Express project implementing GraphQL to test basic things. To have this project up and running just __install__ the dependencies and run the __start__ command.

## Notes

- The _resolve_ function is mapped like this: (source, args) => { ... } where:
    - source is an object containing the instance data of the class defined in the _type_ property.
    - args is an object containing the data defined in the _args_ property.
- You can also provide a context with your custom data following these steps:
    - Set up the handler:
    ```
    app.use('/graphql', (req, res, next) => {
        return createHandler<ContextData>({ 
            schema, 
            context: () => ({
                token: req.header('x-token') || null,
            })
        })(req, res, next);
    });
    ```
    - Using it on the resolvers:
    ```
    resolver: async (source, args, context: ContextData) => { ... },
    ```


## Queries

- To get for example, a post:
```
{
    topPost: post(id: "3") {
        title
        content
    }
}
```

- To get all the posts of a user and its name:
```
{
    user(id: "1") {
        name
        posts {
            title
        }
    }
}
```

- To use query fragments:
```
{
    topUser: user(id: "2") {
        ...userDetails
    }
}

fragment userDetails on User {
    name
    age
}
```

- To create a new user using the mutation:
``` 
mutation {
    addUser(name: "an-example", age: 20)
}
```

- To delete a user:
```
mutation {
    deleteUser(id: "3") {
        id
    }
}
```