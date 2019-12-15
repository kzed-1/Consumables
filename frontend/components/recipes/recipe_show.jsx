import React from 'react';
import {Link}from 'react-router-dom';

class RecipeShow extends React.Component {
    constructor(props){
        super(props)
        this.date = this.date.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    
    componentDidMount() {
        this.props.grabRecipe(this.props.match.params.recipeId)
    };

    handleDelete (recipeId) {
        this.props.deleteRecipe(recipeId)
            .then(() => this.props.history.push("/"))
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

    render () {

        const {recipe, currentUserId} = this.props
        
        let deleteRecipeButton = null;

        if(!recipe){
            return null;
        }

        if (currentUserId === recipe.author_id) {
            deleteRecipeButton = 
            <div className= "delete-recipe-container">
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
        }else {
            null
        }
        
        return (
            <div className="entire-show-container">
                <header className="recipe-show-header">
                    <h1 className="recipe-title-show">{recipe.title}</h1>
                    <h2 className="author">
                        By
                        <Link to={`/recipes/${recipe.id}`}>
                            <span className="author-name">{` ${recipe.author_name}`}</span>
                        </Link>
                    </h2>
                    <div className="publish-cc">
                        <h3 className = "published">Published {this.date(recipe.created_at)}</h3>
                        <img className = "cc"src={window.cc} alt=""/>
                    </div>
                </header>
                <div className="intro-container">
                    <img className="main-recipe-pic" alt=""/>
                    <div className="author-info">
                        <div className="author-icon-name">
                            <div className="crop"><img className="usericon" src={window.user2} alt="" /></div>
                            By
                            <p className="username">{`${recipe.author_name}`}</p>
                        </div>
                        <div className="pics-container">
                            <p className="more-by-author">More by the author:</p>
                            <div className="crop2"><img className="author-recipe-pic" src={window.pizza} /></div>
                            <div className="crop2"><img className="author-recipe-pic" src={window.yogurt} /></div>
                            <div className="crop2"><img className="author-recipe-pic" src={window.pancake} /></div>
                        </div>
                    </div>

                    <p className="description">In a small saucepan over medium heat, melt butter. Add garlic and cook, stirring, until fragrant, about 1 minute. Pour cream into garlic butter and bring to a simmer. Reduce heat to medium-low and continue to simmer, stirring occasionally, until liquid is reduced by half, about 15 minutes.{recipe.body}</p>
                </div>
                    <div className="bottom-line"></div>

                <div className="step-container">
                    <h2 className="step-title">Step 1: supplies</h2>
                    <ul>
                        1 tbsp. butter
                        2 cloves garlic, minced
                        1 1/2 c. heavy cream
                        1/2 c. freshly grated Parmesan cheese, divided
                        Crushed red pepper flakes
                        Kosher salt
                        Freshly ground black pepper
                        2 tbsp. extra-virgin olive oil
                        1 lb. thin chicken cutlets
                        Vegetable oil, for brushing
                        Cornmeal, for dusting
                        1 lb. store-bought pizza dough, divided in half
                        1/2 small red onion, finely chopped
                        2 c. shredded mozzarella
                        Freshly sliced green onion, for serving
                    </ul>
                    <div className="bottom-line"></div>
                </div>
                <div className="step-container">
                    <h2 className="step-title">Step 1</h2>
                    <img className="step-photo" src="" alt=""/>
                    <p>In a small saucepan over medium heat, melt butter. Add garlic and cook, stirring, until fragrant, about 1 minute. Pour cream into garlic butter and bring to a simmer. Reduce heat to medium-low and continue to simmer, stirring occasionally, until liquid is reduced by half, about 15 minutes. </p>
                    <div className="bottom-line"></div>
                </div>
                <div className="step-container">
                    <h2 className="step-title">Step 2</h2>
                    <p>Stir in ¼ cup of Parmesan and a pinch of red pepper flakes. Season with salt and pepper and remove from heat.</p>
                    <div className="bottom-line"></div>
                </div>
                <div className="step-container">
                    <h2 className="step-title">Step 3</h2>
                    <p>Meanwhile, in a large skillet over medium-high heat, heat oil. Add chicken and cook, working in batches if necessary, until chicken is cooked through, flipping halfway through, about 1 to 2 minutes per side. Transfer chicken to a cutting board. Using a fork and knife, thinly slice chicken into strips.</p>
                    <div className="bottom-line"></div>
                </div >
                <div className="step-container">
                    <h2 className="step-title">Step 4</h2>
                    <p>Preheat oven to 500°. Cut two pieces of parchment to fit a large rimmed baking sheet. On a work surface, sprinkle one piece of parchment with a thin layer of cornmeal. Working with one ball of dough at a time, roll into a 1/4"-thick round and transfer to a baking sheet. </p>
                    <div className="bottom-line"></div>
                </div>
                <div className="step-container">
                    <h2 className="step-title">Step 5</h2>
                    <p>Spread half the cream sauce over each pizza, leaving a ½" border on the edge. Add half the sliced chicken, half the red onion, half the mozzarella, and half the remaining ¼ cup Parmesan on one pizza. Repeat with remaining pizza dough and toppings.</p>
                    <div className="bottom-line"></div>
                </div>
                <div className="step-container">
                    <h2 className="step-title">Step 6</h2>
                    <p>Bake, one pizza at a time, until crust is golden and cheese is melty, about 15 minutes. </p>
                    <div className="bottom-line"></div>
                </div >
                <div className="step-container">
                    <h2 className="step-title">Step 7</h2>
                    <p>Garnish with green onions and more red pepper flakes and serve immediately. </p>
                    <div className="bottom-line"></div>
                </div >
                {deleteRecipeButton}
            </div>
        )
    }
}

export default RecipeShow;