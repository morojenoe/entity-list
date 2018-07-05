import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
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
  entities: Observable<Entity[]>;
  selectedEntities: Entity[] = [];

  constructor(private entityService: EntityService, public dialog: MatDialog) { }

  ngOnInit() {
    this.entities = this.entityService.getEntities();
  }

  addEntitiesDialog() {
    const dialogRef = this.dialog.open(AddEntitiesComponent, {
      width: '100%',
      height: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
