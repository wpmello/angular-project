import { Component, OnInit } from "@angular/core";
import {  ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit{

  courseId!: number;
  inscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { 
    // this.courseId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscription = this.activatedRoute.params.subscribe((params: any) => {
      this.courseId = params['id']
    })
  }
  
  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

}