import { Component, OnInit } from "@angular/core";
import { Course } from './course'
import { CourseService } from "./course.service";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
  
  _courses: Course[] = [];
  
  _filterBy: string = '';
  
  _filteredCourses: Course[] = [];

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this._filteredCourses = this._courses;
  }

  set filter(value: string) {
      this._filterBy = value;

      // iguala o 'filteredCourses' ao valor recebido no 'filterBy'
      this._filteredCourses = this._courses
      .filter((course: Course) => course.name.toLocaleLowerCase()
      .indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy;
  }
}