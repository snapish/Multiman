import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material';
// import {AngularFireModule} from '@angular/fire';
// import {AngularFirestoreModule} from '@angular/fire//firestore';
// import {AngularFireStorageModule} from '@angular/fire/storage';
import { MeleeComponent } from './melee/melee.component';
import { UltimateComponent } from './ultimate/ultimate.component';
// import { ImageMapComponent } from './image-map/image-map.component';
 import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProjectmComponent } from './projectm/projectm.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideComponent } from './side/side.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { RivalsComponent } from './rivals/rivals.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { DevtestingComponent } from './devtesting/devtesting.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TablemakerComponent } from './tablemaker/tablemaker.component';

@NgModule({
  declarations: [
    AppComponent,
    MeleeComponent,
    UltimateComponent,
//    ImageMapComponent,
ProjectmComponent,

SideComponent,

RivalsComponent,

ErrorPageComponent,

DevtestingComponent,

TablemakerComponent,
  ],
  imports: [
    ClipboardModule,
    NgbModule,
    MatCardModule,
    MatDialogModule,
    BrowserModule,

    MatCheckboxModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatExpansionModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    //AngularFireModule.initializeApp(environment.config, 'database-project'),
    //AngularFirestoreModule,
    //AngularFireStorageModule
  ],
  providers: [SideComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
