import { Container } from "react-bootstrap";
import { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import ChallengeCard from "./ChallengeCard";

class Challenges extends Component{
    constructor(){
        super();
        //Creating the state object 
        this.state = {
            challenges : [
                {
                    id: 1,
                    challengeName: 'Best 5 things about you!', 
                    description:"In this challenge, you have to write 5 good things about you and share it on your social media.", 
                    poster:'/',
                    star: 0,
                    fav: false
                },
                {
                    id: 2,
                    challengeName: 'Best 5 things about you!', 
                    description:"In this challenge, you have to write 5 good things about you and share it on your social media.", 
                    poster:'/',
                    star: 0,
                    fav: false
                },
            ]
        } 
  }

  
  handleIncStar = (challenge) => {
    const {challenges} = this.state;

    const mid = this.state.challenges.indexOf(challenge);

    if(challenges[mid].star >= 5){
        return;
    }

    challenges[mid].star += 0.5;
     this.setState({
        challenges
     })
  }

  
  handleDecStar = (challenge) => {
    const {challenges} = this.state;

    const mid = this.state.movies.indexOf(challenge);

    if(challenges[mid].star <= 0){
        return;
    }

    challenges[mid].star -= 0.5;
     this.setState({
        challenges
     })
  }

  handleToggleFav = (challenge) => {
    const {challenges} = this.state;
    const mid = challenges.indexOf(challenge);
    challenges[mid].fav = !challenges[mid].fav;

    this.setState({
        challenges
    })
  }

    render(){
        // const {title, plot, price, rating, star, fav, isInCart, poster} = this.state.movies;
        const {challenges} = this.state;
        return(
        <>
        <NavigationBar/>
        <Container className="challenges-container">
            <section className="page-header">
                    <h2>Join Daily Healthy Challenges here!</h2>
                    <h5>Make a habit of self-reflection and gratitude through daily healthy challenges.</h5>
            </section>
            <section>
                {challenges.map((challenge) => <ChallengeCard challenges={challenge} 
                                            addStars={this.handleIncStar} 
                                            decStars={this.handleDecStar}
                                            toggleFav={this.handleToggleFav}
                                            key={challenge.id}/>)}
            </section>
        </Container>
        
    </>
    )
    }
}

export default Challenges;
