import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StartComponent } from './shared/component/star/star.component';
import { ReplacePipe } from './shared/pipe/replace.pipe';
import { NavBarComponet } from './core/component/nav-bar/nav-bar.component';
import { Error404Component } from './error-404/error-404.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/component/core.module';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
