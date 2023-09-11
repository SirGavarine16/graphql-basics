import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';

import { schema } from './graphql';

const app = express();

app.use(express.json());

app.use('/graphql', createHandler({
    schema,
}));

app.use((_, res) => {
    res.status(200).json({ message: 'Hello World!' });
});

app.listen(3000, () => {
    console.log('Server running on PORT 3000...');
});