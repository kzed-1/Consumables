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
            <div>
                <main className="result-container">
                    <div className="result-pic-wrapper" >
                        <Link to={`/recipes/${recipe.id}`}>
                            <img className="result-pic" src={picture} alt="" />
                        </Link>
                    </div>
                    <div className="description-container">
                        <Link to={`/recipes/${recipe.id}`}>
                            <h1>{recipe.title}</h1>
                            <p>link</p>
                        </Link>
                        <p>{recipe.body}</p>
                    </div>
                </main>
            </div>
        )
    }
}

export default SearchIndexItem;