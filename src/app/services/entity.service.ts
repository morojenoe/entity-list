import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Entity } from '../models/entity';
import { ENTITIES } from '../data/entity-mockup';

@Injectable()
export class EntityService {

  constructor() { }

  getEntities(): Observable<Entity[]> {
    return of(ENTITIES.slice(0, 5));
  }

  searchEntities(searchStr: string): Observable<Entity[]> {
    if (!searchStr.trim()) {
      return this.getEntities();
    }
    const search = searchStr.toLowerCase();
    const foundEntities = ENTITIES.filter(
      entity => (
        entity.name.toLowerCase().search(search) !== -1 ||
        entity.type.toLowerCase().search(search) !== -1
      )
    );
    return of(foundEntities.slice(0, 5));
  }
}
