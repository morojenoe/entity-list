import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


import { AppComponent } from './app.component';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntityService } from './services/entity.service';

@NgModule({
  declarations: [
    AppComponent,
    EntityListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [
    EntityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
