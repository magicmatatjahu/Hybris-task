import { Component, OnInit }  from '@angular/core';
import { ActivatedRoute }     from '@angular/router';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  queryParams: any

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.queryParams = this._activatedRoute.snapshot.queryParams;
  }

}
