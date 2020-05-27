import { LOCALE, AppActions, UtilsActions } from '../actions/types';

const initialState = {
    locale: 'en-US',
};

export default function (state = initialState, action: UtilsActions): object {
    switch (action.type) {
        case LOCALE:
            return {
                ...state,
                locale: action.locale,
            };
        default:
            return state;
    }
}
