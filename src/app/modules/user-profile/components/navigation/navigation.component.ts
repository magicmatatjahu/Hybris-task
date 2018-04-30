import { Component, OnInit }    from '@angular/core';

import { Select }               from '@ngxs/store';

import { 
  UserState }                   from '../../user-profile.state';

import { Observable }           from 'rxjs/observable';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Select( UserState => UserState.user_profile.user.info) userInfo$: Observable<any>;

  constructor() {}

  ngOnInit() {
  }

}
