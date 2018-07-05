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

  constructor(private entityService: EntityService, public dialog: MatDialog) { }

  ngOnInit() {
  }

  addEntitiesDialog() {
    const dialogRef = this.dialog.open(AddEntitiesComponent, {
      minWidth: '100%',
      height: '100%',
      data: this.entities,
      autoFocus: true,
    });

    dialogRef.afterClosed().subscribe(entities => {
      this.entities = entities;
    });
  }
}
