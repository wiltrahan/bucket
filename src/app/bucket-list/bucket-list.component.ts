import { Component, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss']
})
@Injectable()
export class BucketListComponent implements OnInit {

  places = [];

  constructor() { }

  ngOnInit() {
  }

  addedToBucketList(place: string) {
    console.log('you got here ' + place);
    this.places.push(place);
  }

}
