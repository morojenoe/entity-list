import { Component, OnInit } from '@angular/core';
import { MatDialog, DialogPosition } from '@angular/material';
import { Observable } from 'rxjs/Observable';

import { AddEntitiesComponent } from '../add-entities/add-entities.component';
import { EntityService } from '../../services/entity.service';
import { Entity } from '../../models/entity';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {
  entities: Entity[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  removeEntity(entity: Entity) {
    const index = this.entities.findIndex(e => e.id === entity.id);
    if (index !== -1) {
      this.entities.splice(index, 1);
    }
  }

  addEntitiesDialog() {
    const dialogRef = this.dialog.open(AddEntitiesComponent, {
      minWidth: '100%',
      height: '100%',
      data: this.entities.slice(),
    });

    dialogRef.afterClosed().subscribe(entities => {
      if (entities) {
        this.entities = entities;
      }
    });
  }
}
