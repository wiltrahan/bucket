/// <reference types="@types/googlemaps" />

import { MapComponent } from './../map/map.component';
import { Component, OnInit, ElementRef, NgZone, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

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

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private mapsApiLoader: MapsAPILoader,
    private ngZone: NgZone,
    private mapComponent: MapComponent
  ) { }

  ngOnInit() {
    this.searchControl = new FormControl();
    this.mapsApiLoader.load().then(() => {
      // const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
      //   // types: ['regions']
      // });
      const autocomplete = new google.maps.places.SearchBox(this.searchElementRef.nativeElement);
      autocomplete.addListener('places_changed', () => {
        this.ngZone.run(() => {
          // const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          const place = autocomplete.getPlaces();
          console.log('lat ' + place[0].geometry.location.lat());
          console.log('lng ' + place[0].geometry.location.lng());
          console.log('place ' + place[0].name);
          // if (place.geometry === undefined || place.geometry === null) {
          //   return;
          // }

          // this.latitude = place.geometry.location.lat();
          this.latitude = place[0].geometry.location.lat();
          // this.longitude = place.geometry.location.lng();
          this.longitude = place[0].geometry.location.lng();
          this.zoom = 18;
          this.mapComponent.onSearchedLocation(this.latitude, this.longitude, this.zoom);
        });
      });
    });
  }
}
