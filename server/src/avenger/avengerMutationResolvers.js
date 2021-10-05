const AvengerService = require("./AvengerService");

const avengerMutationResolvers = {
  addAvengers: (_, { avengers }) => {
    return AvengerService.add(avengers);
  },
  updateAvengers: (_, { avengers }) => {
    return AvengerService.update(avengers);
  },
  deleteAvengers: async (_, { ids }) => {
    return AvengerService.delete(ids);
  }
}

module.exports = avengerMutationResolvers;
