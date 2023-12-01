import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Layers } from 'angular-feather/icons';
import { FeatherModule } from 'angular-feather';
import { LoaderComponent } from './common-component/loader/loader.component';
import { sharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const icons = {
  Layers,
};

@NgModule({
  declarations: [AppComponent, LoaderComponent],
  imports: [BrowserModule, AppRoutingModule, sharedModule, BrowserAnimationsModule],
  exports: [FeatherModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
