import { 
    State, 
    Action, 
    StateContext }          from '@ngxs/store';

import { RxAction }         from '../../common';

import { 
    UserProfileService }    from './services';

import { IUser }            from '../../models';

export interface UserProfileStateModel {
    loadedUserInfo: boolean,
    loadedUserRepos: boolean,
    loadedUserLangs: boolean,
    user: IUser
}

const defaultUserProfileStateModel: UserProfileStateModel = {
    loadedUserInfo: false,
    loadedUserRepos: false,
    loadedUserLangs: false,
    user: {} as IUser
}

export class ChangeUser extends RxAction<string> {

  static type = '[user] ChangeUser'
}

export class LoadUserInfo extends RxAction {

  static type = '[user] LoadUserInfo'
}

export class SuccessLoadUserInfo extends RxAction<any> {

  static type = '[user] SuccessLoadUserInfo'
}

export class LoadUserRepos extends RxAction {

  static type = '[user] LoadUserRepos'
}

export class SuccessLoadUserRepos extends RxAction<any> {

  static type = '[user] SuccessLoadUserRepos'
}

export class LoadUserLangs extends RxAction {

  static type = '[user] LoadUserLangs'
}

export class SuccessLoadUserLangs extends RxAction<any> {

  static type = '[user] SuccessLoadUserLangs'
}

@State<UserProfileStateModel>({
  name: 'user_profile',
  defaults: defaultUserProfileStateModel
})
export class UserState {

    constructor(
        private readonly _userProfile: UserProfileService
    ) {}

    @Action(ChangeUser)
    changeUser({ getState, setState }: StateContext<UserProfileStateModel>, { payload }: ChangeUser) {

      const { user } = getState()
      setState({
          ...getState(),
          loadedUserInfo: false,
          loadedUserRepos: false,
          loadedUserLangs: false,
          user: Object.assign({} as IUser, { login: payload })
      })
    }

    @Action(LoadUserInfo)
    async loadUserInfo({ getState, setState, dispatch }: StateContext<UserProfileStateModel>) {

        setState({
            ...getState(),
            loadedUserInfo: false
        })

        this._userProfile.getUserInfo( getState().user.login).then(payload => dispatch( new SuccessLoadUserInfo( payload)))
    }

    @Action(SuccessLoadUserInfo)
    async successLoadUserInfo({ getState, setState }: StateContext<UserProfileStateModel>, { payload }: SuccessLoadUserInfo) {

        const { user } = getState()
        setState({
            ...getState(),
            loadedUserInfo: true,
            user: {
                ...user,
                info: payload
            }
        })
    }

    @Action(LoadUserRepos)
    async loadUserRepos({ getState, setState, dispatch }: StateContext<UserProfileStateModel>) {

        setState({
            ...getState(),
            loadedUserRepos: false
        })

        this._userProfile.getUserRepos( getState().user.login).then(payload => dispatch( new SuccessLoadUserRepos( payload)))
    }

    @Action(SuccessLoadUserRepos)
    async successLoadUserRepos({ getState, setState }: StateContext<UserProfileStateModel>, { payload }: SuccessLoadUserRepos) {

        const { user } = getState()
        setState({
            ...getState(),
            loadedUserRepos: true,
            user: {
                ...user,
                repos: payload
            }
        })
    }

    @Action(LoadUserLangs)
    async loadUserLangs({ getState, setState, dispatch }: StateContext<UserProfileStateModel>) {

        setState({
            ...getState(),
            loadedUserLangs: false
        })

        const payload = {
            langs: await this._userProfile.getUserLangs( getState().user.login),
            langsStats: await this._userProfile.getUserLangsStats( getState().user.login),
            langsBytes: await this._userProfile.getUserLangsBytes( getState().user.login)
        }

        dispatch( new SuccessLoadUserLangs( payload))
    }

    @Action(SuccessLoadUserLangs)
    async successLoadUserLangs({ getState, setState }: StateContext<UserProfileStateModel>, { payload }: SuccessLoadUserLangs) {

        const { user } = getState()
        setState({
            ...getState(),
            loadedUserLangs: true,
            user: {
                ...user,
                langs: payload.langs,
                langsStats: payload.langsStats,
                langsBytes: payload.langsBytes,
            }
        })
    }

}

export const states = [UserState]