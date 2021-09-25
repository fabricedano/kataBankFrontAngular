import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-account-dialog',
  templateUrl: './create-account-dialog.component.html',
  styleUrls: ['./create-account-dialog.component.scss']
})
export class CreateAccountDialogComponent implements OnInit {

  form: FormGroup;

  constructor(public dialogRef: MatDialogRef<CreateAccountDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
    })
  }

  closeDialog(data): void {
    this.dialogRef.close(data);
  }


  ngOnInit(): void {
  }

  confirmDialog(value: any){
    this.closeDialog(value.name);
  }

  cancelDialog(){
    this.closeDialog(null);
  }
}
