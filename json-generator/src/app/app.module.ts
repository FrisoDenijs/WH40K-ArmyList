import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DetachmentsComponent } from './detachments/detachments.component';
import { DetachmentFormComponent } from './detachments/form/detachment-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnumNamePipe, EnumKeyPipe } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    DetachmentsComponent,
    DetachmentFormComponent,
    EnumNamePipe,
    EnumKeyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
