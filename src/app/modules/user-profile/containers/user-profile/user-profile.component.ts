import { 
  Component, 
  OnInit }                      from '@angular/core';
import { TranslateService }     from '@ngx-translate/core';
import { 
  ActivatedRoute }              from '@angular/router';

import { Store, Select }        from '@ngxs/store';

import { 
  LanguageState }               from '../../../../app.state';

import { 
  ChangeUser }                  from '../../user-profile.state';

import { Observable }           from "rxjs";

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Select( LanguageState) lang$: Observable<string>;

  constructor(
    private readonly _store: Store,
    private readonly _translate: TranslateService,
    private readonly _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.lang$.subscribe(lang => {

      this._translate.use(lang)
    });

    this._activatedRoute.params.subscribe(params => {
      
      this._store.dispatch( new ChangeUser( params['user']))
    })
  }

}
