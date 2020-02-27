export const fetchRecipeSearch = (query) => {
    return $.ajax({
        method: "GET",
        url: "api/recipes/search",
        data: {query}
    })
};