import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicPipesComponent } from './basic-pipes/basic-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { CustomPipeHighlighterPipe } from './pipes/custom-pipe-highlighter.pipe';
import { CustomPipeReversestrPipe } from './pipes/custom-pipe-reversestr.pipe';
import { BeautifyNamePipe } from './pipes/beautify-name.pipe';
import { FilterNamesPipe } from './pipes/filter-names.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BasicPipesComponent,
    CustomPipesComponent,
    CustomPipeHighlighterPipe,
    CustomPipeReversestrPipe,
    BeautifyNamePipe,
    FilterNamesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
