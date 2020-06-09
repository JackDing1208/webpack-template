import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import "@/style.scss"
import avatar from "@/img/avatar.jpg"
import axios from "axios"
import {
  HashRouter as Router,
  Switch,   //有点坑别用
  Route,
  Link,
  Redirect,
} from "react-router-dom";


const App: React.FC = () => {
  return (
    <Router>
      {/*<Route path="/" component={APP}>*/}
      {/**/}
      {/*</Route>*/}
      <div className={"app"}>
        {/*<img src={avatar} alt="" width={200} height={200}/>*/}
        <ul className={"nav"}>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/haha">User</Link>
          </li>
        </ul>
        <div className={"container"}>

          <Redirect path="/" to="/home"/>
          {/*Route不要包含子组件*/}
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/users" component={User}/>
          {/*<Route path="*" component={Page404}/>*/}
        </div>
      </div>
    </Router>
  )
}

interface IProp {
  history?: any
}

const Home: React.FC<IProp> = (props) => {
  console.log(props)

  const onClick = () => {
    props.history.push("/about")
  }
  return (
    <Fragment>
      <h1>Home</h1>
      <button onClick={onClick}>点我</button>
    </Fragment>
  );
}


const About: React.FC<IProp> = () => {
  return <h2>About</h2>;
}

const User: React.FC<IProp> = () => {
  return <h2>User</h2>;
}

const Page404: React.FC<IProp> = () => {
  return <h2>404</h2>;
}

ReactDOM.render(<App/>, document.getElementById("root"))
