import { Component, OnInit }    from '@angular/core';

import { Store, Select }        from '@ngxs/store';

import { 
  UserState,
  LoadUserInfo }                from '../../user-profile.state';

import { Observable }           from 'rxjs/observable';

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Select( UserState => UserState.user_profile.user.info) userInfo$: Observable<any>;

  constructor(
    private readonly _store: Store
  ) { }

  ngOnInit() {

    //this._store.dispatch( new LoadUserInfo())
  }

}
