import React from "react";
class MoviesCard extends React.Component {
  render() {
    return(
        <>
        <div className="movie-card">
    <div className="left-section">
        <img className="movie-img" src="path/to/your/movie/image.jpg" alt="Movie Image" />
    </div>
    <div className="right-section">
        <div className="movie-info">
            <div>
                <div className="movie-title">Movie Title</div>
                <div className="movie-plot">Plot: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div className="movie-price">$10.99</div>
                <div className="movie-rating">Rating: 4.5</div>
            </div>
            <div>
                <button className="fav-btn">Add to Favorites</button>
                <button className="buy-btn">Buy Now</button>
            </div>
        </div>
    </div>
</div>
        </>
    )
  }
}
export default MoviesCard;