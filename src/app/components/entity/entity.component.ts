import { Component, OnInit, Input } from '@angular/core';
import { Entity } from '../../models/entity';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {
  @Input() entity: Entity;

  constructor() { }

  ngOnInit() {
  }

}
