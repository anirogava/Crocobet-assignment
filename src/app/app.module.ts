import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ContentModule } from './content/content.module';
import { AppRoutingModule } from './app-routing.module';
import { ShellModule } from './shell/shell.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, ContentModule, AppRoutingModule, ShellModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
