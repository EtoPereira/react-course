import React, { Component } from 'react'

import Course from './components/Course';
import NewCourseForm from './components/NewCourseForm';

import { CourseService } from './services/courses.service';
import { CategoryService } from './services/category.service';
import './App.css';

class App extends Component {
  static defaultProps = {
    onSubmit: () => { }
  }
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      categories: []
    }
    this.startData = this.startData.bind(this);
    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);

    this.startData();
  }

  async startData() {
    const [courses, categories] = await Promise.all([
      CourseService.list(),
      CategoryService.list()
    ]);
    this.setState({ courses, categories })

  }

  async add(course) {
    const { courses } = this.state,
      newCourse = await CourseService.create(course)
    courses.push(course)
    this.setState({ courses })
  }

  async remove(courseId) {
    const { courses } = this.state,
      courseIndex = await CourseService.remove(courseId)
    courses.splice(courseIndex, 1);
    this.setState({ courses });
  }

  render() {
    const { state } = this;
    return (
      <div className="App">
        <NewCourseForm onSubmit={this.add} categories={state.categories} />
        <ul className="courses-list">
          {
            state.courses.map(course => <Course course={course} onRemove={this.remove} />)
          }
        </ul>
        {/* <div>
            <MyForm></MyForm>
          </div> */}
        {/* <MyForm2></MyForm2> */}
      </div>
    );
  }
}

export default App;
