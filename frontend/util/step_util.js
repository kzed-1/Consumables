// export const grabSteps = (recipeId) => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/recipes/${recipeId}/steps`
//     })
// )

// export const grabStep = (recipeId, stepId) => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/recipes/${recipeId}/steps/${stepId}`
//     })
// )

export const createStep = (step) => (
    $.ajax({
        method: 'POST',
        url: `/api/steps/`,
        data: {step}
    })
)

export const editStep = (step) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/steps/${step.id}`,
        data: {step}
    })
)

export const deleteStep = (stepId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/steps/${stepId}`
    })
)



