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
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { EntityListComponent } from './components/entity-list/entity-list.component';
import { EntityService } from './services/entity.service';
import { EntityComponent } from './components/entity/entity.component';
import { AddEntitiesComponent } from './components/add-entities/add-entities.component';

@NgModule({
  declarations: [
    AppComponent,
    EntityListComponent,
    EntityComponent,
    AddEntitiesComponent
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
    MatIconModule,
  ],
  entryComponents: [
    AddEntitiesComponent,
  ],
  providers: [
    EntityService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
