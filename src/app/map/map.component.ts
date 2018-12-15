import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

@Injectable()
export class MapComponent implements OnInit {

  latitude = 41.825226;
  longitude = -71.418884;
  zoom = 12;
  locationChosen = false;

  constructor() { }

  ngOnInit() {
  }

  onChosenLocation(event) {
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
  }

  onSearchedLocation(lat: number, lng: number, zoom: number) {
    this.latitude = lat;
    this.longitude = lng;
    this.locationChosen = true;
    this.zoom = zoom;
  }
}
