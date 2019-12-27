import {NgModule} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';


@NgModule({
  imports: [MatButtonModule, 
    MatToolbarModule, 
    MatTabsModule, 
    MatInputModule, 
    MatListModule, 
    MatTableModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule],
  exports: [MatButtonModule, 
    MatToolbarModule, 
    MatTabsModule, 
    MatInputModule, 
    MatListModule, 
    MatTableModule,
    MatDividerModule,
    MatGridListModule,
    MatCardModule,
    MatPaginatorModule]
})
export class MaterialModule { }