/* eslint-disable react/prop-types */

export default function ListingSmall({listing}){

    return(
            <div className="listing-container">
                <img src={listing.imgUrl} alt="stan"></img>
                <div className="listing-text-container">
                    <h2>{listing.title}</h2>
                    <a href="">{listing.location}</a>
                    <p>{listing.price}</p>
                </div>
            </div>
    )
}