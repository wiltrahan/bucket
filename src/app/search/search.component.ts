/// <reference types="@types/googlemaps" />

import { MapComponent } from './../map/map.component';
import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';
import { SearchedListComponent } from './../searched-list/searched-list.component';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  latitude: number;
  longitude: number;
  searchControl: FormControl;
  zoom: number;
  myName: string;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private mapsApiLoader: MapsAPILoader,
    private ngZone: NgZone,
    private mapComponent: MapComponent,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.searchControl = new FormControl();
    this.mapsApiLoader.load().then(() => {
      const autocomplete = new google.maps.places.SearchBox(this.searchElementRef.nativeElement);
      autocomplete.addListener('places_changed', () => {
        this.ngZone.run(() => {
          const place = autocomplete.getPlaces();
          // console.log('lat ' + place[0].geometry.location.lat());
          // console.log('lng ' + place[0].geometry.location.lng());
          console.log(place);
          // for (let i = 0; i < place.length; i++) {
          //   console.log(place[i].name);
          // }
          if (place.length === 0) {
            alert('No results, try something else.');
            return;
          }
          this.latitude = place[0].geometry.location.lat();
          this.longitude = place[0].geometry.location.lng();
          this.zoom = 18;
          this.mapComponent.onSearchedLocation(this.latitude, this.longitude, this.zoom);
          this.onSearch(place);
        });
      });
    });
  }

  onSearch(data) {
    this.dialog.open(SearchedListComponent, {
      width: '400px',
      height: '100%',
      disableClose: true,
      closeOnNavigation: false,
      position: { right: '0'},
      data: {
        title: 'Place List Here',
        places: data
      }
    });
  }
}
