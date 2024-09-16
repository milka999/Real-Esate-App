const getAllListings = "select * from listing";

const getListingById = "select * from listing where id = $1";

const getRenting = "select * from listing where listing_type_id = 2";

const getSale = "select * from listing where listing_type_id = 1";

const deleteListing = "delete from listing where id = $1";

const newListing = `INSERT INTO listing (
      title,
      description,
      price,
      unit_size,
      parking,
      garden,
      terrace,
      location_id,
      author_id,
      type_id,
      listing_type_id,
      structure_id,
      contact,
      img_url
) VALUES
($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`;

const editListing = `update listing 
set title = $1,
description = $2,
price = $3,
unit_size = $4,
parking = $5,
garden = $6,
terrace = $7,
date_updated = $8,
location_id = $9,
author_id = $10,
type_id = $11,
listing_type_id = $12,
structure_id = $13
where id = $14`;

module.exports = {
  getAllListings,
  getListingById,
  getRenting,
  getSale,
  deleteListing,
  editListing,
  newListing,
};
