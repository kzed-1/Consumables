
export const getAllSteps = (state, ownProps) => {
    if(Object.keys(state.entities.recipes).length === 0 ){
        return null;
    }
    let stepsArr = state.entities.recipes[ownProps.match.params.recipeId].steps_instruction
    let steps = state.entities.steps
    let result = []

    for (let i = 0; i < stepsArr.length; i++){
        if (i in steps) {
            result.push(steps[i])
        }
    }

    return result
}