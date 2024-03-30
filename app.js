const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React is Rendered"),
    React.createElement(
      Person,
      {
        name: "Yihua",
        occupation: "instructor",
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: "Andrie",
        occupation: "lead instructor",
      },
      null
    ),
    React.createElement(
      Person,
      {
        name: "Emily",
        occupation: "Teacher",
      },
      null
    ),
  ]); // using jsx  to create elements and target root of dom
};
// ReactDOM.render(React.createElement(App), document.getElementById("root"));

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
