import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interface/IProjects.interface';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  imports: [MatDialogModule,MatDialogContent, MatDialogTitle],
  templateUrl: './dialog-projects.html',
  styleUrl: './dialog-projects.scss'
})
export class DialogProjects implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data:IProjects,
    private _dialogRef:MatDialogRef<DialogProjects>
  ){}

  public getData = signal<IProjects | null>(null);

  ngOnInit(): void {
    this.getData.set(this._data);
  }

  public closeModal(){
    return this._dialogRef.close()
  }
}
