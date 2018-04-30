import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';

import { Store, Select }      from '@ngxs/store';

import { 
  SearchBarFocus,
  AppState }                  from '../../app.state';

import { SearchService }      from '../../services';

import { Observable }         from 'rxjs/Observable';
import { Subject }            from 'rxjs/Subject';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Select( AppState => AppState.app.click) showList$: Observable<boolean>

  searchTerm$ = new Subject<string>()
  results$ = new Observable<string[]>()

  constructor(
    private readonly _store: Store,
    private readonly _searchService: SearchService,
    private readonly _router: Router
  ) {}

  ngOnInit() {

    this.results$ = this._searchService.search( this.searchTerm$)
  }

  public searchTerm( $event: any) {

    if( $event.key === "Enter") {
      console.log($event.target.value)
      this._router.navigate(['/users', $event.target.value])
    }
    else
      this.searchTerm$.next( $event.target.value)
  }

}
