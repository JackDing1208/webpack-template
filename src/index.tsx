import React from 'react';
import ReactDOM from 'react-dom';
import "@/style.scss"
import avatar from "./img/avatar.jpg"

console.log("avatar", avatar)

const App: React.FC = () => {
  console.log(process.env)
  return (
    <div className={"app"}>
      <img src={avatar} alt="" width={200} height={200}/>
      haha

    </div>
  )
}


ReactDOM.render(<App/>, document.getElementById("root"))
