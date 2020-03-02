import React from 'react';
import {Link}from 'react-router-dom';
import StepsIndexContainer from '../steps/steps_index_container';

class RecipeShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            otherRecipes: this.props.moreRecipes
        }

        this.date = this.date.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.showPicture = this.showPicture.bind(this);
    }
    
    componentDidMount() {
        this.props.grabUserRecipe(this.props.currentUserId)
        // this.setState({ otherRecipes: this.props.moreRecipes})
    };

    handleDelete (recipeId) {
        this.props.deleteRecipe(recipeId)
            .then(() => this.props.history.push("/"))
    }

    componentWillUnmount () {
        this.props.clearSteps();
    }

    date(date) {
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ]

        const splitDate = date.split("-")
        const year = splitDate[0];
        const month = months[splitDate[1] - 1];
        let day = splitDate[2].slice(0, 2);
        if (day === "01") {
            day = "1st"
        } else if (day === "02") {
            day = "2nd"
        } else if (day === "03") {
            day = "3rd"
        } else {
            day = `${day}th`
        }
        return `${month} ${day}, ${year}`
    }

    showPicture() {
        const {recipe} = this.props;

        if (!recipe.photosUrls) {
            return window.panacakes;
        } else {
            return recipe.photosUrls[0];
        }
    }

    showMoreRecipes() {

        const { moreRecipes, recipe }  = this.props
        delete moreRecipes[recipe.id]
        const allRecipes = Object.values(moreRecipes)

        const displayRecipe = []

        for (let i = 0; i < 3; i++) {
            let randomNum = Math.floor(Math.random() * allRecipes.length)
            displayRecipe.push(allRecipes[randomNum])
            allRecipes.splice(randomNum, 1)
        }

        const filteredRecipes = displayRecipe.map((recipe) => 
            <Link to={`/recipes/${recipe.id}`} 
                key = {recipe.id} className="crop2"
                >
                <img className="author-recipe-pic" src={recipe.photosUrls[0]} />
            </Link>
        )
    
        return filteredRecipes
    }

    render () {

        const {recipe, currentUserId, grabRecipe, moreRecipes} = this.props
        
        if(!recipe){
            return null;
        }

        let deleteEditRecipeButtons = (currentUserId === recipe.author_id) ? 
            <div className="delete-recipe-container">
                <div className="delete-edit">
                    <button className="delete-button"
                        onClick={() => this.handleDelete(recipe.id)}>
                        Delete Recipe
                        </button>
                    <button className="edit-button"
                        onClick={() => this.props.history.push(`/recipes/${recipe.id}/edit`)}>
                        Edit Recipe
                    </button>
                </div>
                <div className="bottom-line"></div>
            </div> 
            : null;

        
        return (
            <div className="entire-show-container">
                <header className="recipe-show-header">
                    <h1 className="recipe-title-show">{recipe.title}</h1>
                    <h2 className="author">
                        {"By "}
                        <Link to={`/recipes/${recipe.id}`}>
                            <span className="author-name">{`${recipe.author_name}`}</span>
                        </Link>
                    </h2>
                    <div className="publish-cc">
                        <h3 className = "published">Published {this.date(recipe.created_at)}</h3>
                        <img className = "cc"src={window.cc} alt=""/>
                    </div>
                </header>
                <div className="intro-container">
                    <img className="main-recipe-pic" src = {this.showPicture()} alt=""/>
                    <div className="author-info">
                        <div className="author-icon-name">
                            <div className="crop"><img className="usericon" src={window.user2} alt="" /></div>
                            By
                            <p className="username">{`${recipe.author_name}`}</p>
                        </div>
                        <div className="pics-container">
                            <p className="more-by-author">More by the author:</p>
                            {this.showMoreRecipes()}
                        </div>
                    </div>

                    <p className="description">{recipe.body}</p>
                </div>
                    <div className="bottom-line"></div>

                <StepsIndexContainer recipe={recipe} grabRecipe={grabRecipe} />
                {deleteEditRecipeButtons}

            </div>
        )
    }
}

export default RecipeShow;