import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => {
  console.log(process.env)
  return (
    <div>haha</div>
  )
}


ReactDOM.render(<App/>, document.getElementById("root"))
