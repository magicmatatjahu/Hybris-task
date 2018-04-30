import { Component, OnInit }    from '@angular/core';

import { Store, Select }        from '@ngxs/store';

import { 
  UserState,
  LoadUserInfo }                from '../../user-profile.state';

import { Observable }           from 'rxjs/observable';

@Component({
  selector: 'basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  @Select( UserState => UserState.user_profile.user.info) userInfo$: Observable<any>;

  @Select( UserState => UserState.user_profile.loadedUserInfo) loadedUserInfo$: Observable<boolean>;

  constructor(
    private readonly _store: Store
  ) { }

  ngOnInit() {

    this.loadedUserInfo$.subscribe(loaded => {
      
      if( !loaded)
        this._store.dispatch( new LoadUserInfo())
    })
  }

}
