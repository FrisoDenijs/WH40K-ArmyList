import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetachmentsComponent } from './detachments/detachments.component';
import { DetachmentFormComponent } from './detachments/form/detachment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DetachmentsComponent,
    DetachmentFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
