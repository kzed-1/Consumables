import React from 'react';
import {Link} from 'react-router-dom';


class RecipeIndexItem extends React.Component {

    render () {
        // debugger;
        const {recipe} = this.props

        return (
            <div>
                <div className=" recipes-wrapper">
                    <div className="recipe-container" >
                        <Link to={`/recipes/${recipe.id}`}><img src={window.pancakes} className="recipe-pic" /></Link>
                        
                        <div className="description-box">
                            <Link to={`/recipes/${recipe.id}`}>
                                <span className="recipe-title">{`${recipe.title} `}</span>
                            </Link>
                                by
                             <Link to={`/recipes/${recipe.id}`}>   
                                <span className="author-name">{` ${recipe.author_name}`}</span>
                            </Link>
                        </div>
                        <div className="recipe-footer">
                            {/* <span className="star-line"> */}
                                <img className="star" src={window.star}/>
                                <span className="vertical-line"></span>
                            {/* </span> */}
                            <span className="heart-eye">
                                <img className="heart" src={window.heart} />
                                <img className="eye" src={window.eye} />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="bottom-space-provider">
                    <div className="pagination"></div>
                </div>
            </div>
        )
    }
}

export default RecipeIndexItem;

