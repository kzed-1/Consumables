// export const grabSteps = (recipeId) => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/recipes/${recipeId}/steps`
//     })
// )

export const grabStep = (recipeId, stepId) => (
    $.ajax({
        method: 'GET',
        url: `/api/recipes/${recipeId}/steps/${stepId}`
    })
)

export const createStep = (recipeId, step) => (
    $.ajax({
        method: 'POST',
        url: `/api/recipes/${recipeId}/steps`,
        data: {step}
    })
)

export const editStep = (recipeId, step) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/recipes/${recipeId}/steps/${step.id}`,
        data: {step}
    })
)

export const deleteStep = (recipeId, stepId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/recipes/${recipeId}/steps/${stepId}`
    })
)



