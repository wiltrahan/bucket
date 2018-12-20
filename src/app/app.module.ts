import { priv } from './../pri/pri';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGoogleMapsAutocompleteModule } from '@angular-material-extensions/google-maps-autocomplete';
import { MaterialModule } from './material.module';
import { SearchedListComponent } from './searched-list/searched-list.component';
import { BucketListComponent } from './bucket-list/bucket-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchComponent,
    SearchedListComponent,
    BucketListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot(priv),
    MatGoogleMapsAutocompleteModule.forRoot()
  ],
  providers: [MapComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
