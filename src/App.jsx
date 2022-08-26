import React,{Component} from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Index from './pages/Index'
import Search from './pages/Search'
import Songs from './pages/Songs'
import ListDetail from './pages/ListDetail'
import './App.css'
export default class App extends Component{
    render(){
        return(
            <div>
                <Switch>
                    <Route path='/index' component={Index}></Route>
                    <Route path='/search' component={Search}></Route>
                    <Route path='/songs/:id' component={Songs}></Route>
                    <Route path='/listdetail/:id' component={ListDetail}></Route>
                    <Redirect path='/' to='/index'></Redirect>
                </Switch>
             </div>
        )
    }
}