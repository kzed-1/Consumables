
export const getAllSteps = (state, ownProps) => {
    // debugger
    if(Object.keys(state.entities.recipes).length === 0 ){
        return null;
    }
    let stepsArr = state.entities.recipes[ownProps.match.params.recipeId].steps_instruction
    // debugger
    let steps = state.entities.steps
    // debugger
    let result = []
    // debugger

    for (let i = 0; i < stepsArr.length; i++){
        if (i in steps) {
            result.push(steps[i])
        }
    }

    return result
    // debugger
}