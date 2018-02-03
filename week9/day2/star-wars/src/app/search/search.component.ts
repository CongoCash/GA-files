import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { SearchService } from './search.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchSubject = new Subject()
  results;

  constructor(
    private http: Http,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.results = this.searchSubject
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(name => this.searchService.createAPIObservable(name))
  }

  findCharacter(name){
    this.searchSubject.next(name);
  }

}
