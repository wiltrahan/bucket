import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-searched-list',
  templateUrl: './searched-list.component.html',
  styleUrls: ['./searched-list.component.scss']
})

export class SearchedListComponent  {

  constructor(
    public dialogRef: MatDialogRef<SearchedListComponent>,
    @Inject(MAT_DIALOG_DATA)
    public passedData: any) { }

    close(): void {
      this.dialogRef.close();
    }
}
