const AvengerService = require("./AvengerService");

const avengerResolvers = {
  getAllAvengers: () => {
    return AvengerService.getAll();
  },
  getAvengers: (_, { ids }) => {
    return AvengerService.get(ids);
  },
};

module.exports = avengerResolvers;