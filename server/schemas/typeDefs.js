// import the GrapghQL tagged template function
const { gql } = require('apllo-server-express');


//create your own typDef's
// const typeDefs = gql``;

const typeDefs = gql`

type Query {
    helloWorld: String
}

`;


// export typeDefs

module.exports = typeDefs;