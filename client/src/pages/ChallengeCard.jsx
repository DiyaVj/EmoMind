import { Component } from "react";

class ChallengeCard extends Component {
    render() {
        const { challenges, addStars, decStars, toggleFav } = this.props;
        //Destructing the state object in render function
        const { challengeName, description, poster, star, fav } =
          this.props.challenges;
        return (
          <div className="main">
            {/**Movie Card */}
            <div className="challenge-card">
              {/**Left section of Movie Card */}
              <div className="left">
                <img alt="poster" src={poster} />
              </div>
    
              {/**Right section Movie Card */}
              <div className="right">
                {/**Title, plot, price of the movie */}
                <div className="title">{challengeName}</div>
                <div className="plot">{description}</div>

                <div className="challenge-footer">
                  {/**Star image with increase and decrease buttons and star count */}
                  <div className="star-dis">
                    <img
                      className="str-btn"
                      alt="Decrease"
                      src="https://cdn-icons-png.flaticon.com/128/2801/2801932.png"
                      onClick={() => {
                        decStars(challenges);
                      }}
                    />
                    <img
                      className="stars"
                      alt="stars"
                      src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                    />
                    <img
                      className="str-btn"
                      alt="increase"
                      src="https://cdn-icons-png.flaticon.com/128/2997/2997933.png"
                      onClick={() => {
                        addStars(challenges);
                      }}
                    />
                    <span className="starCount">{star}</span>
                  </div>
    
                  {/**Favourite and add to cart buttons */}
    
                  <button
                    className={fav ? "unfavourite-btn" : "favourite-btn"}
                    onClick={() => {
                      toggleFav(challenges);
                    }}
                  >
                    {fav ? "Decline Challenge" : "Join Challenge"}
                  </button>
                  </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChallengeCard;