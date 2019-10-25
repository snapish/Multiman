import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, FormControl, ReactiveFormsModule, FormBuilder} from '@angular/forms';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material';
// import {AngularFireModule} from '@angular/fire';
// import {AngularFirestoreModule} from '@angular/fire//firestore';
// import {AngularFireStorageModule} from '@angular/fire/storage';
import {environment} from '../environments/environment';
import { MeleeComponent } from './melee/melee.component';
import { UltimateComponent } from './ultimate/ultimate.component';
// import { ImageMapComponent } from './image-map/image-map.component';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { NgxPayPalModule } from 'ngx-paypal';
import { ContactComponent } from './contact/contact.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {
  MatExpansionModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatDialogRef,
  MatDialog,
  MatDialogModule
} from '@angular/material';
import { PatreonComponent } from './patreon/patreon.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    MeleeComponent,
    UltimateComponent,
//    ImageMapComponent,
    AboutComponent,

ContactComponent,

PatreonComponent,

WelcomeComponent,
  ],
  imports: [
    MatDialogModule,
    NgxPayPalModule,
  //  NgbModule,
    BrowserModule,
    MatCheckboxModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatExpansionModule
    //AngularFireModule.initializeApp(environment.config, 'database-project'),
    //AngularFirestoreModule,
    //AngularFireStorageModule
  ],
  entryComponents:[WelcomeComponent],
  providers: [WelcomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
