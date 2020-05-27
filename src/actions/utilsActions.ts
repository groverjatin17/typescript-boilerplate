import { LOCALE, AppActions, UtilsActions, SetLocaleAction } from './types';
import { Dispatch } from 'redux';

export const changeLocale = (locale: string): AppActions => ({
    type: 'LOCALE',
    locale,
});
export const setLocale = (locale: string) => {
    return (dispatch: Dispatch<AppActions>) => {
        dispatch(changeLocale(locale));
    };
};
