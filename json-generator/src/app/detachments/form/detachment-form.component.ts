import { Component, OnInit } from '@angular/core';
import { DetachmentsForm } from './detachments.form';
import { Role } from 'src/app/shared';

@Component({
  selector: 'app-detachment-form',
  templateUrl: './detachment-form.component.html',
  styleUrls: ['./detachment-form.component.css']
})
export class DetachmentFormComponent implements OnInit {

  public readonly roles = Role;

  detachmentForm: DetachmentsForm;
  constructor() { }

  ngOnInit() {
    this.detachmentForm = new DetachmentsForm();
    console.log(this.roles[0]);
  }

}
