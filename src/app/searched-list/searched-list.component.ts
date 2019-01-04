import { BucketListComponent } from './../bucket-list/bucket-list.component';
import { Component, Inject, Input, EventEmitter, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-searched-list',
  templateUrl: './searched-list.component.html',
  styleUrls: ['./searched-list.component.scss']
})

export class SearchedListComponent  {
  @Input() placeName: string;
  @Output() placeSelected = new EventEmitter<string>();

  // bucketList: BucketListComponent;

  constructor(
    public bucketList: BucketListComponent,
    public dialogRef: MatDialogRef<SearchedListComponent>,
    @Inject(MAT_DIALOG_DATA)
    public passedData: any
  ) { }

    selectedPlace(place: string) {
      // this.placeSelected.emit();
      console.log(place);
      this.bucketList.addedToBucketList(place);
    }

    close(): void {
      this.dialogRef.close();
    }
}
