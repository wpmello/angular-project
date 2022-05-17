import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Error404Component } from "./error-404/error-404.component";
import { NavBarComponet } from "./nav-bar/nav-bar.component";

@NgModule({
  declarations: [
    NavBarComponet,
    Error404Component
  ],
  imports:[
    RouterModule.forChild([
      {
        path: '**', component: Error404Component
      }
  ])
  ],
  exports: [
    NavBarComponet
  ]
})

export class CoreModule { }