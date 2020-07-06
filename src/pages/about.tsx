import React, {useEffect, useState} from "react"
import {RouteComponentProps} from "react-router-dom"
import _ from "lodash"
import Button from "../components/button"
import {Menu, Dropdown, Pagination, Skeleton} from 'antd';
import 'antd/dist/antd.css';


interface IProps extends RouteComponentProps {}

const About: React.FC<IProps> = () => {
  _.partition([1, 2, 3, 4], n => n % 2);

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  return (
    <>
      <Button/>

      <Pagination defaultCurrent={1} total={50}/>
      <Skeleton loading={isLoading} active={true}>
        <div>
          <h4>Ant Design, a design language</h4>
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure), to help people create their product prototypes
            beautifully and efficiently.
          </p>
        </div>
      </Skeleton>
    </>

  )

}


export default About
