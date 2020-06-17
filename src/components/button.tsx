import React from "react"
import {withRouter} from "react-router-dom";

interface IButton {
  history: any
}

const Button: React.FC<IButton> = (props) => {

  const goBack = () => {
    props.history.push("/home")
  }

  return <button onClick={goBack}>点我返回</button>;
}


export default withRouter(Button);


