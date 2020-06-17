import React from "react"
import {RouteComponentProps} from "react-router-dom"
import _ from "lodash"
import Button from "../components/button"

interface IProps extends RouteComponentProps {}

const About: React.FC<IProps> = () => {
  _.partition([1, 2, 3, 4], n => n % 2);
  return <Button/>;
}


export default About
