import React from "react"
import {RouteComponentProps} from "react-router-dom"
import _ from "lodash"

interface IProps extends RouteComponentProps{}

const About: React.FC<IProps> = () => {
  _.partition([1, 2, 3, 4], n => n % 2);
  return <h2>About</h2>;
}


export default About
