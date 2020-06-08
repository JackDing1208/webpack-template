import React from 'react';
import ReactDOM from 'react-dom';
import "@/style.scss"
import avatar from "@/img/avatar.jpg"
import axios from "axios"


axios.get("https://baidu.com").then((res) => {
  console.log(res.data)
})

const App: React.FC = () => {
  console.log(process.env)
  const article = [1, 2, 3, 4, 5, 312, 51, 5, 12, 451, 5, 122, 512, 5, 12, 5]

  return (
    <div className={"app"}>
      <h1>我是林克123</h1>
      <img src={avatar} alt="" width={200} height={200}/>
      {article.map((item, index) => {
        return (<p key={index.toString()}>{item}</p>)
      })}
    </div>
  )
}


ReactDOM.render(<App/>, document.getElementById("root"))
