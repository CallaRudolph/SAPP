import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { masterGoogleBooksConfig } from './api-key-google';
import { masterNewsApiConfig } from './api-key-current-events';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { WelcomeComponent } from './welcome/welcome.component';
import { routing } from './app.routing';
import { TriviaFormComponent } from './trivia-form/trivia-form.component';
import { TriviaListComponent } from './trivia-list/trivia-list.component';
import { LiteratureComponent } from './literature/literature.component';
import { CurrentEventsComponent } from './current-events/current-events.component';
import { CurrentEventsListComponent } from './current-events-list/current-events-list.component';

export const googleBooksConfig = {
  apiKey: masterGoogleBooksConfig.apiKey,
}

export const newsApiConfig = {
  apiKey: masterNewsApiConfig.apiKey,
}

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TriviaFormComponent,
    TriviaListComponent,
    LiteratureComponent,
    CurrentEventsComponent,
    CurrentEventsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
