import React from "react";
import axios from "axios";
import StudentList from "./StudentList.js";
import SingleStudent from "./SingleStudent.js";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      selectedStudent: {},
      tests: []
    };
    this.selectStudent = this.selectStudent.bind(this);
  }

  async componentDidMount() {
    this.getStudents();
    this.getTests()
  }
  async getStudents() {
    console.log("fetching");
    try {
      const response = await axios.get("/student");
      const students = response.data;
      this.setState({ students });
    } catch (error) {
      console.log("error getting data");
    }
  }
  async getTests() {
    console.log("fetching tests");
    try {
      const response = await axios.get("/test");
      const tests = response.data;
      this.setState({ tests });
    } catch (error) {
      console.log("error getting data");
    }
  }
  selectStudent(student) {
    return this.setState({
      selectedStudent: student,
    });
  }

  render() {
    const students = this.state.students;
    const tests = this.state.tests;
    return (
      <div>
        <h2>Students</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
          </thead>
          <StudentList
            students={students} //lo enviamos como object porque retorna object
            //the name that I pass should be the same that I use in the props
            //example props.selectStudent
            selectStudent={this.selectStudent}
          />
        </table>
        {this.state.selectedStudent.id ? (
          <SingleStudent student={this.state.selectedStudent} tests = {tests}/>
        ) : null}
      </div>
    );
  }
}
