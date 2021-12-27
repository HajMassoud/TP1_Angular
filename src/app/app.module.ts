import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeLivreComponent } from './liste-livre/liste-livre.component';
import { HttpClientModule } from '@angular/common/http';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { FormsModule } from '@angular/forms';
import { DeleteLivreComponent } from './delete-livre/delete-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeLivreComponent,
    AddLivreComponent,
    DeleteLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
