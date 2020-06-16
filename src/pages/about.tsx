import React from "react"
import {RouteComponentProps} from "react-router-dom"
import _ from "lodash"

interface IProp extends RouteComponentProps {
}

const About: React.FC<IProp> = () => {
  _.partition([1, 2, 3, 4], n => n % 2);
  return <h2>About</h2>;
}


export default About
