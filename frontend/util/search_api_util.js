export const fetchRecipeSearch = (query) => {
    return $.ajax({
        method: "GET",
        url: "api/search",
        data: {query}
    })
};