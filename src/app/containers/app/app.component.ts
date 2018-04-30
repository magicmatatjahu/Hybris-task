import { Component }            from '@angular/core';
import { TranslateService }     from '@ngx-translate/core';

import { Store, Select }        from '@ngxs/store';

import { 
  ChangeLanguage,
  SearchBarFocus,
  AppState }                    from '../../app.state';

import { Observable }           from "rxjs/Observable";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Select( AppState => AppState.app.language) lang$: Observable<string>;

  constructor(
    private readonly _store: Store,
    private readonly _translate: TranslateService
  ) {}

  ngOnInit() {

    this.lang$.subscribe( lang => {

      this._translate.use(lang)
    })
  }

  public changeLanguage( lang: string): void {

    this._store.dispatch( new ChangeLanguage( lang))
  }

  public clickWholeApp( $event: any) {

    if( $event.target.toString() === '[object HTMLInputElement]')
      this._store.dispatch( new SearchBarFocus( true))
    else
      this._store.dispatch( new SearchBarFocus( false))
  }

}
