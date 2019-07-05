import React from 'react';
import {BrowserRouter, Route,Switch,Link,NavLink} from 'react-router-dom';
import ExpanseDashboardPage from '../components/ExpanseDashboardPage';
import Header from '../components/Header';
import NotFound from '../components/NotFound';
import HelpExpensePage from '../components/HelpExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';




const AppRouter=()=>(
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
    <Route path="/" component={ExpanseDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage}/>
    <Route path="/edit/:id" component = {EditExpensePage}/>
    <Route path="/help" component = {HelpExpensePage}/>
    <Route component = {NotFound}/>
    </Switch>
    </div>
    {/*<div><Footer /></div>*/}
    </BrowserRouter>
);

export default AppRouter;