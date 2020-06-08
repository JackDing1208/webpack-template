import React from 'react';
import ReactDOM from 'react-dom';
import "@/style.scss"
import avatar from "@/img/avatar.jpg"


const App: React.FC = () => {
  console.log(process.env)
  return (
    <div className={"app"}>
      <img src={avatar} alt="" width={200} height={200}/>
      <h1>我是林克123</h1>

    </div>
  )
}


ReactDOM.render(<App/>, document.getElementById("root"))
