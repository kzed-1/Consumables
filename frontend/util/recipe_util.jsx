export const grabRecipes = () => (
    $.ajax({
        method: 'GET',
        url: '/api/recipes'
    })
)

export const grabRecipe = (recipeId) => (
    $.ajax({
        method: 'GET',
        url: `/api/recipes/${recipeId}`
    })
)

export const createRecipe = (recipe) => (
    $.ajax({
        method: 'POST',
        url: `/api/recipes/`,
        data: {recipe}
    })
)

export const editRecipe = (recipe) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/recipes/${recipe.id}`,
        data: {recipe}
    })
)

export const deleteRecipe = (recipeId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/recipes/${recipe.id}`
    })
)

