import React from 'react';
import {Link} from 'react-router-dom';

class SearchIndexItem extends React.Component {


    render () {

        const { recipe } = this.props
        let picture;

        if (!recipe.photosUrls) {
            picture = window.pancakes
        } else {
            picture = recipe.photosUrls[0]
        }


        return (
            <div className="result-container-wrapper">
                <div className="result-container">
                    <div className="result-pic-wrapper" >
                        <Link to={`/recipes/${recipe.id}`}>
                            <img className="result-pic" src={picture} alt="" />
                        </Link>
                    </div>
                    <div className="description-container">
                        <Link to={`/recipes/${recipe.id}`}>
                            <h1>{recipe.title}</h1>
                            <p className="recipe-link" >{`https://consumables-app.herokuapp.com/#/recipes/${recipe.id}`}</p>
                        </Link>
                        <p>{recipe.body}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchIndexItem;