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
  defaults: 'en'
})
export class LanguageState {

    @Action(ChangeLanguage)
    changeLanguage({ getState, setState }: StateContext<string>, { payload }: ChangeLanguage) {

      setState(payload);
    }

}

export const states = [LanguageState];