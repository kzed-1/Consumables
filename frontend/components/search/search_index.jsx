import React from 'react';
import SearchIndexItem from './search_index_item';

class SearchIndex extends React.Component {
    constructor(props) {
        super(props);

        const { grabSearchedRecipes, query } = props;
        this.state = {
            query: this.decodeSpacesFromQueryProp
        };
        // grabSearchedRecipes(query);

        this.clearSearch = this.clearSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.enterKeyPressed = this.enterKeyPressed.bind(this);
    }

    // componentDidMount() {
    //     this.props.grabSearchedRecipes(this.state.query);
    // }

    componentDidUpdate(prevProps) {
            if (this.props.query !== prevProps.query) {
                this.setState({ query: this.decodeSpacesFromQueryProp});
            }
    }

    get isEmpty() {
        return !this.state.query;
    }

    get decodeSpacesFromQueryProp() {
        return this.props.query.replace(/%20/g, " ")
    }

    clearSearch () {
        this.setState({query: ""})
    }

    handleInput (e) {
        this.setState({query: e.currentTarget.value})
    }

    handleSubmit () {
        this.props.history.push(`/recipes/search/?query=${this.state.query}`)
        this.props.grabSearchedRecipes(this.state.query)
    }

    enterKeyPressed (e) {
        if (e.key === "Enter" && !this.isEmpty){
            this.props.history.push(`/recipes/search/?query=${this.state.query}`)
            this.props.grabSearchedRecipes(this.state.query)
        }
    }



    render () {

        const {recipes} = this.props

        // debugger

        if (!recipes) {
            return null;
        }

        const recipesList = recipes.map((recipe) => {
            return <SearchIndexItem key={recipe.id} recipe={recipe} />
        })

        const noRecipes = <h1 className="no-result">Sorry, no search results were found!</h1>;

        const resultIndex = recipesList.length ? recipesList : noRecipes;
    
        return (
            <div>
                <main className="search-index-container">
                    <span className="search-bar-header">
                        <h1 className="lets-make-title">LET'S MAKE:</h1>
                        <div className="search-bar-container">
                            <input onKeyDown={this.enterKeyPressed} onChange={this.handleInput} value ={this.state.query} className="search-bar" type="text"/>
                            {!this.isEmpty && <img src ={window.close} className="clear-search-button" onClick={this.clearSearch}/>}
                            <div className="mag-glass-wrapper"><img className="mag-glass" onClick={this.handleSubmit} src={window.magGlass} alt="" /></div>
                        </div>
                    </span>
                    {resultIndex}
                </main>
            </div>
        )
    }
}



export default SearchIndex;