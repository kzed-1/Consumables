import React from 'react';
import {Link} from 'react-router-dom';


class RecipeIndexItem extends React.Component {

    render () {
      
        const {recipe} = this.props
        let picture;

        if (!recipe.photosUrls) {
            picture = window.pancakes
        }else {
            picture = recipe.photosUrls[0]
        }

        return (
        
            
                <div className="recipe-container" >
                <div className="recipe-pic-wrapper"><Link to={`/recipes/${recipe.id}`}><img src={picture} className="recipe-pic" /></Link></div>
                    
                    <div className="description-box">
                        <Link to={`/recipes/${recipe.id}`}>
                            <span className="recipe-title">{`${recipe.title}`}</span>
                        </Link>
                        <div className="by">by</div>  
                        <Link to={`/recipes/${recipe.id}`}>   
                            <span className="author-name">{`${recipe.author_name}`}</span>
                        </Link>
                    </div>
                    <div className="recipe-footer">
                        {/* <span className="star-line"> */}
                            {/* <img className="star" src={window.star}/> */}
                            {/* <span className="vertical-line"></span> */}
                        {/* </span> */}
                        {/* <div className="heart-eye"> */}
                            {/* <img className="heart" src={window.heart} /> */}
                            {/* <img className="eye" src={window.eye} /> */}
                        {/* </div> */}
                    </div>
                </div>
           
           
        )
    }
}

export default RecipeIndexItem;

