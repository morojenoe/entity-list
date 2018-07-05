import { Component, OnInit } from '@angular/core';
import { EntityService } from '../../services/entity.service';
import { Observable } from 'rxjs/Observable';
import { Entity } from '../../models/entity';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss']
})
export class EntityListComponent implements OnInit {
  entities: Observable<Entity[]>;
  selectedEntities: Entity[];

  constructor(private entityService: EntityService) { }

  ngOnInit() {
    this.entities = this.entityService.getEntities();
  }
}
