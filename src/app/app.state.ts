import { 
    State, 
    Action, 
    StateContext }          from '@ngxs/store';

import { RxAction }         from './common';

export class ChangeLanguage extends RxAction<string> {

  static type = '[i18n] ChangeLanguage'
}

@State<string>({
  name: 'language',
  defaults: window.localStorage.getItem('i18n') || 'en'
})
export class LanguageState {

    @Action(ChangeLanguage)
    changeLanguage({ getState, setState }: StateContext<string>, { payload }: ChangeLanguage) {

      window.localStorage.setItem('i18n', payload)
      setState(payload);
    }

}

export const states = [LanguageState]