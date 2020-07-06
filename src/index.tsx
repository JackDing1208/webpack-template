import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import "@/style.scss"
import 'antd/dist/antd.css';
import {add} from "./utils/calculate"
import avatar from "@/imgs/avatar.jpg"
import Loadable from 'react-loadable';
import {DatePicker, Divider, Affix, Button} from 'antd';
import {
  HashRouter as Router,
  RouteComponentProps,
  Switch,   //有点坑别用
  Route,
  Link,
  Redirect,
} from "react-router-dom";

//
import ("./2").then((xxx) => {
  xxx.default()
})
import "./1"


const Loading = (xxx: any) => {
  if (xxx.pastDelay) {
    return <div/>;
  }
  return null;
};

export const About = Loadable({
  loader: () => import(/* webpackChunkName: "AboutComponent" */ './pages/about'),
  loading: Loading,
  delay: 200
});


const App: React.FC = () => {
  console.log("rerender")

  const x = add(1, 2)
  console.log(x)
  console.log(PRODUCTION)
  return (
    <Router>
      <div className={"app"}>
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


// Route Component中props会继承history属性

interface IProp extends RouteComponentProps {
}


const Home: React.FC<IProp> = (props) => {
  const onClick = () => {
    document.body.style.setProperty('--theme-color', 'pink')
  }
  return (
    <Fragment>
      <Affix offsetTop={10}>
        <Button type="primary" onClick={() => {}}>
          Affix top
        </Button>
      </Affix>
      <h1>Home</h1>
      <img src={avatar} alt="" width={200} height={200}/>
      <button onClick={onClick}>点我</button>
      <DatePicker/>
      <Divider/>

    </Fragment>
  );
}


const User: React.FC<IProp> = () => {
  return <h2>User</h2>;
}

const Page404: React.FC<IProp> = () => {
  return <h2>404</h2>;
}

ReactDOM.render(<App/>, document.getElementById("root"))
