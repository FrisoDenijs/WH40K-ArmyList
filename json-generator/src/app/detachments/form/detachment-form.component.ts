import { Component, OnInit } from '@angular/core';
import { DetachmentsForm } from './detachments.form';
import { Role, Restrictions, Detachment } from '../../shared';

@Component({
  selector: 'app-detachment-form',
  templateUrl: './detachment-form.component.html',
  styleUrls: ['./detachment-form.component.css']
})
export class DetachmentFormComponent implements OnInit {

  public readonly roles = Role;
  public readonly restrictions = Restrictions;

  public detachment: string;

  detachmentForm: DetachmentsForm;
  constructor() { }

  ngOnInit() {
    this.detachmentForm = new DetachmentsForm();
  }

  reset() {
    this.detachmentForm = new DetachmentsForm();
    this.detachment = '';
  }

  stringify() {
    this.detachment = JSON.stringify(this.detachmentForm.getModel());
  }
}
