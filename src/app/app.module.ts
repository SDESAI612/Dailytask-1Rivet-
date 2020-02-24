import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PortalModule,   } from '@angular/cdk/portal'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmojiComponent } from './emoji/emoji.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EmojiPipe } from './pipe/emoji.pipe';


@NgModule({
  declarations: [
    AppComponent,EmojiComponent,EmojiPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
