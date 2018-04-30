import { Injectable }       from '@angular/core';
import { HttpClient }       from '@angular/common/http';

import { Observable }       from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of'

@Injectable()
export class SearchService {

  private readonly _searchUrl = '/api/users/search'

  constructor(
    private readonly _http: HttpClient
  ) { }

  public search( terms: Observable<string>) {

    return terms.debounceTime( 400)
      .distinctUntilChanged()
      .switchMap(term => term ? this.searchEntries(term) : Observable.of([]))
  }

  public searchEntries( term) {

    return this._http
        .get<string[]>(`${this._searchUrl}/${term}`)
  }

}
