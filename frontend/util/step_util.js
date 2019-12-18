// export const grabSteps = (recipeId) => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/recipes/${recipeId}/steps`
//     })
// )

export const grabStep = (stepId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/steps/${stepId}`
    })
}

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



