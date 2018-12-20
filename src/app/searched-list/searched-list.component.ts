import { Component, Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-searched-list',
  templateUrl: './searched-list.component.html',
  styleUrls: ['./searched-list.component.scss']
})
@Injectable()
export class SearchedListComponent  {

  constructor(private dialog: MatDialog) { }

  openSearchedList(): void {
    this.dialog.open(SearchedListComponent, {
      width: '400px',
      position: { right: '0'}
    });
  }

}
