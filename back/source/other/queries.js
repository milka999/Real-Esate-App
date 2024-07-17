const getCities = "select * from city";
const getTypes = "select * from type";
const getStructures = "select * from structure";

const getLocations = "select * from location where city_id = $1";

module.exports = {
  getCities,
  getLocations,
  getTypes,
  getStructures,
};
