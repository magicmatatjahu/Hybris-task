import { Component, OnInit }    from '@angular/core';

import { Store, Select }        from '@ngxs/store';

import { 
  UserState,
  LoadUserRepos }               from '../../user-profile.state';

import { Observable }           from 'rxjs';

@Component({
  selector: 'repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.scss']
})
export class RepositoriesComponent implements OnInit {

  @Select( UserState => UserState.user_profile.user.repos) repos$: Observable<any>;

  @Select( UserState => UserState.user_profile.loadedUserRepos) loadedUserRepos$: Observable<boolean>;

  constructor(
    private readonly _store: Store
  ) { }

  ngOnInit() {

    this.loadedUserRepos$.subscribe(loaded => {
      
      if( !loaded)
        this._store.dispatch( new LoadUserRepos())
    })
  }

}
