import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSelectionListChange } from '@angular/material';
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

  constructor(@Inject(MAT_DIALOG_DATA) public entities: Entity[],
              public dialogRef: MatDialogRef<AddEntitiesComponent>,
              private entityService: EntityService) { }

  ngOnInit() {
    this.entities$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.entityService.searchEntities(term)),
    );
    this.search('');
  }

  search(value: string): void {
    this.searchTerms.next(value);
  }

  isSelected(entityId: number): boolean {
    return this.entities.findIndex(entity => entity.id === entityId) !== -1;
  }

  changeSelection(selectionListChange: MatSelectionListChange) {
    if (selectionListChange.option.selected) {
      this.entities.push(selectionListChange.option.value);
    } else {
      const index = this.entities.findIndex(e => e.id === selectionListChange.option.value.id);
      this.entities.splice(index, 1);
    }
  }
}
