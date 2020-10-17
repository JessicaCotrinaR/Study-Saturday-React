import React from "react";

const SingleStudent = (props) => {
  const studentTests = props.tests.filter(
    (test) => test.studentId === props.student.id
  );
  const avgGrade = Math.round(
    studentTests.map((test) => test.grade).reduce((x, y) => x + y) /
    studentTests.length
  );

  return (
    <div>
      <h3>{props.student.fullName}</h3>
      <h3>Average grade: {avgGrade}%</h3>
      <div>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {studentTests.map((test) => {
              return (
                <tr key={test.id}>
                  <td>{test.subject}</td>
                  <td>{test.grade}%</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SingleStudent;
