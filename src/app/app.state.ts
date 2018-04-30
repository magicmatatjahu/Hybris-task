import { 
    State, 
    Action, 
    StateContext }          from '@ngxs/store';

import { RxAction }         from './common';

export interface AppStateModel {
  language: string,
  click: boolean
}

const AppStateModelDefault: AppStateModel = {
  language: window.localStorage.getItem('i18n') || 'en',
  click: null
}

export class ChangeLanguage extends RxAction<string> {

  static type = '[app] ChangeLanguage'
}

export class SearchBarFocus extends RxAction<boolean> {

  static type = '[app] SearchBarFocus'
}

@State<AppStateModel>({
  name: 'app',
  defaults: AppStateModelDefault
})
export class AppState {

    @Action(ChangeLanguage)
    changeLanguage({ getState, setState }: StateContext<AppStateModel>, { payload }: ChangeLanguage) {

      window.localStorage.setItem('i18n', payload)
      setState({
        ...getState(),
        language: payload
      })
    }

    @Action(SearchBarFocus)
    searchBarFocus({ getState, setState }: StateContext<AppStateModel>, { payload }: SearchBarFocus) {

      setState({
        ...getState(),
        click: payload
      })
    }

}

export const states = [AppState]