export const LOCALE = 'LOCALE';

export interface SetLocaleAction {
    type: typeof LOCALE;
    locale: string;
}

export type UtilsActions = SetLocaleAction;
export type AppActions = UtilsActions;
