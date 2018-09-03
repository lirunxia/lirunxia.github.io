import React from 'react'
import Fj from './../img/3.jpg'
import Loading from './../img/1.gif'
import 'font-awesome/css/font-awesome.min'

class App extends React.Component{
    render(){
        return (
            <div>
                <h3>App组件哈哈哈</h3>
                <img src={Fj}/>
                <img src={Loading}/>
                <span></span>
                <i className="fa fa-snowflake-o" aria-hidden="true"></i>
            </div>
        )
    }
}

export default App;