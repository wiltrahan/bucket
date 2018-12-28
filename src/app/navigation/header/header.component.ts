import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   @Output() bucketListToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  onToggleBucketList() {
    this.bucketListToggle.emit();
  }

}
