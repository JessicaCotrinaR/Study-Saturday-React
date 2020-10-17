import React from 'react';

const StudentList = (props) => {
    return (
       <tbody>
           {props.students.map((student)=> {
               return (
                  <tr key = {student.id}>
                      <td>
                        {student.firstName}
                      </td>
                      <td onClick= {() => {
                          props.selectStudent(student)
                      }}>
                          Details
                          </td>
                  </tr>
               )
           })}
       </tbody>
    )
}

export default StudentList