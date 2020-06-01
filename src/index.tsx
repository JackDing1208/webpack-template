import React from 'react';
import ReactDOM from 'react-dom';
import "@/style.scss"
const App: React.FC = () => {
  console.log(process.env)
  return (
    <div className={"app"}>
      <img src={require("./assets/avatar.jpg")} alt=""/>
      haha

    </div>
  )
}


ReactDOM.render(<App/>, document.getElementById("root"))
