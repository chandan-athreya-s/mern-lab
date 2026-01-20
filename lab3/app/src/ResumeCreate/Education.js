import React from "react";

class EdTable extends React.Component {
  render() {
    const education = [
      {
        id: 1,
        name: "Kendriya Vidyalaya",
        place: "Bengaluru",
        stddeg: "10th",
        grade: "A+",
      },
      {
        id: 2,
        name: "Indian Institute of Science",
        place: "Bengaluru",
        stddeg: "undergrad",
        grade: "9.8",
      },
    ];

    const eduedetails = education.map((educ) => (
      <EdRow
        id={educ.id}
        name={educ.name}
        place={educ.place}
        stddeg={educ.stddeg}
        grade={educ.grade}
      />
    ));

    return (
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>place</th>
          <th>education</th>
          <th>grade</th>
        </tr>
        <tbody>{eduedetails}</tbody>
      </table>
    );
  }
}

class EdRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.id}</td>
        <td>{this.props.name}</td>
        <td>{this.props.place}</td>
        <td>{this.props.stddeg}</td>
        <td>{this.props.grade}</td>
      </tr>
    );
  }
}

class Education extends React.Component {
  render() {
    return (
      <section>
        <EdTable />
      </section>
    );
  }
}

export default Education;
