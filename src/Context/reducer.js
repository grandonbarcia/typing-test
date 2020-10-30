
export const initState = []

export const InputReducer = (initState, action) => {

    switch (action.type) {
        case 'SET_USER_INPUT':
            return action.payload.split(' ');
    }

}
