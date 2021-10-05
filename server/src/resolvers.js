const avengerMutationResolvers = require("./avenger/avengerMutationResolvers");
const avengerResolvers = require("./avenger/avengerResolvers");

const queryResolvers = {
  Query: {
    ...avengerResolvers
  },
};

const mutationResolvers = {
  Mutation: {
    ...avengerMutationResolvers
  },  
}

const typeResolvers = {
  Avenger: {
    appearances: ({ appearances }) => { return appearances * 5; }
  }
}

module.exports = { ...queryResolvers, ...mutationResolvers, ...typeResolvers };