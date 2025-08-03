import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/movie/details/details.component';
import { EditComponent } from './components/movie/edit/edit.component';
import { AddComponent } from './components/movie/add/add.component';
import { MovieComponent } from './components/movie/movie.component';
import { RateMovieComponent } from './components/movie/rate-movie/rate-movie.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddCommentComponent } from './components/comment/add-comment/add-comment.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { httpInterceptorProviders } from './http_interceptors';
import { EditCommentComponent } from './components/comment/edit-comment/edit-comment.component';
import { CommentLikesComponent } from './components/comment/comment-likes/comment-likes.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ErrorComponent } from './components/error/error.component';
import { ButtonComponent } from './components/ui/button/button.component';
import { InputComponent } from './components/ui/input/input.component';
import { AccessibilityDirective, FocusTrapDirective, LiveRegionDirective } from './directives/accessibility.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsComponent,
    EditComponent,
    AddComponent,
    MovieComponent,
    RateMovieComponent,
    AddCommentComponent,
    LoginComponent,
    HomeComponent,
    CommentsListComponent,
    EditCommentComponent,
    CommentLikesComponent,
    LoadingComponent,
    ErrorComponent,
    ButtonComponent,
    InputComponent,
    AccessibilityDirective,
    FocusTrapDirective,
    LiveRegionDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
