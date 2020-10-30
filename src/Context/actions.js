
export const setInputState = (dispatch, input) => {
    dispatch({ type: 'SET_USER_INPUT', payload: input });

}


export const calcWPM = (dispatch, input) => {




    dispatch({ type: 'SET_STATS', payload: input })
}