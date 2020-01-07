const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
    //we want to use tool when we go to the graphql browser
}));

app.listen(4000, () => {
    console.log('now listening for requests on port 4000');
});
