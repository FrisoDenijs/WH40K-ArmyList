import { Component, OnInit } from '@angular/core';
import { DetachmentsForm } from './detachments.form';
import { Role } from 'src/app/shared';

@Component({
  selector: 'app-detachment-form',
  templateUrl: './detachment-form.component.html',
  styleUrls: ['./detachment-form.component.css']
})
export class DetachmentFormComponent implements OnInit {

  public roles = Role;

  detachmentForm: DetachmentsForm;
  constructor() { }

  ngOnInit() {
    this.detachmentForm = new DetachmentsForm();
  }

}
