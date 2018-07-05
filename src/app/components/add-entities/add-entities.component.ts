import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Entity } from '../../models/entity';
import { EntityService } from '../../services/entity.service';


@Component({
  selector: 'app-add-entities',
  templateUrl: './add-entities.component.html',
  styleUrls: ['./add-entities.component.scss']
})
export class AddEntitiesComponent implements OnInit {
  entities$: Observable<Entity[]>;
  searchTerms = new Subject<string>();

  constructor(public dialogRef: MatDialogRef<AddEntitiesComponent>,
              private entityService: EntityService) { }

  ngOnInit() {
    this.entities$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.entityService.searchEntities(term)),
    );
  }

  search(value: string): void {
    this.searchTerms.next(value);
  }
}
