import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { BooksService } from './services/books.service';
import { BookFilterPipe } from './shared/book-filter.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [ 
    AppComponent,
    BookFilterPipe,
  ],
  providers: [
    BooksService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {}
