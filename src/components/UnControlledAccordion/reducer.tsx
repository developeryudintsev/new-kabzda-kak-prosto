type actionType = {
    type: string
}
export type stateType={
    collapsed:boolean
}
export let TOGGEL_COLAPSED = 'TOGGEL-COLLAPSED'
export let reducer = (state: stateType, action: actionType):stateType => {
    switch ((action.type)) {
        case TOGGEL_COLAPSED:
            let stateCopy={...state}
            stateCopy.collapsed=!stateCopy.collapsed;
            return stateCopy;
            defaut:
                throw  new Error('Bad action')

    }
    return state;
}