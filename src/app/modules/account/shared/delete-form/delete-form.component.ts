import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html'
})
export class DeleteFormComponent implements OnInit {
  elementToDelete: string;

  constructor(
    public dialogRef: MatDialogRef<DeleteFormComponent>) { }

  ngOnInit(): void {
  }

  deleteElement() {
    this.dialogRef.close(true);
  }
}
