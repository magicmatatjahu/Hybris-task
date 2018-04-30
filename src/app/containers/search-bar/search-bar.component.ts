import { Component, OnInit }  from '@angular/core';

import { SearchService }      from '../../services';

import { Observable }         from 'rxjs/Observable';
import { Subject }            from 'rxjs/Subject';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchTerm$ = new Subject<string>()
  results$ = new Observable<string[]>()

  show: boolean = false;

  constructor(
    private readonly _searchService: SearchService
  ) {}

  ngOnInit() {

    this.results$ = this._searchService.search( this.searchTerm$)
  }

  public clickSearchBar( $event: any) {

    this.show = true;
  }

}
