import { Component, OnInit }    from '@angular/core';

import { Store, Select }        from '@ngxs/store';

import { 
  UserState,
  LoadUserLangs }               from '../../user-profile.state';

import { Observable }           from 'rxjs';

@Component({
  selector: 'langs',
  templateUrl: './langs.component.html',
  styleUrls: ['./langs.component.scss']
})
export class LangsComponent implements OnInit {

  @Select( UserState => {
    return {
      langs: UserState.user_profile.user.langs,
      langsStats: UserState.user_profile.user.langsStats,
      langsBytes: UserState.user_profile.user.langsBytes
    }
  }) langs$: Observable<any>;

  @Select( UserState => UserState.user_profile.loadedUserLangs) loadedUserLangs$: Observable<boolean>;

  constructor(
    private readonly _store: Store
  ) { }

  ngOnInit() {

    this.loadedUserLangs$.subscribe(loaded => {
      
      if( !loaded)
        this._store.dispatch( new LoadUserLangs())
    })
  }

}
