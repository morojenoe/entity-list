import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-entities',
  templateUrl: './add-entities.component.html',
  styleUrls: ['./add-entities.component.scss']
})
export class AddEntitiesComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEntitiesComponent>) { }

  ngOnInit() {
  }

}
