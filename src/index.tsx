import React from 'react';
import ReactDOM from 'react-dom';
import "./style.scss"

const App: React.FC = () => {
  console.log(process.env)
  return (
    <div className={"app"}>haha</div>
  )
}


ReactDOM.render(<App/>, document.getElementById("root"))
