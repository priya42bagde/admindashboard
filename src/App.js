import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar"
import "./App.css"
import Home from "./pages/home/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/UserList/UserList";
import User from "./pages/User/User"
import NewUser from "./pages/NewUser/NewUser"
import ProductList from "./pages/ProductList/ProductList"
import Product from "./pages/Product/Product"
import NewProduct from "./pages/NewProduct/NewProduct";
import Mail from "./pages/Mail/Mail"
import Feedback from "./components/Feedback/Feedback";
import Report from "./pages/Report/Report"
//import Login from "./Login"
import React, {useState} from "react"

function App() {
  
  
  return (
    <div>
       
    <Router>
      <Topbar />
      <div className="container">
       <Sidebar/> {/*it will be one unit  */}
        <Switch>

          <Route path="/users"> <UserList /> </Route>
          <Route exact path="/user/:userId"> <User /> </Route>
          <Route exact path="/newUser"> <NewUser /> </Route>

          <Route exact path="/products"> <ProductList /> </Route>
          <Route exact path="/product/:productId"> <Product /> </Route>
          <Route exact path="/newproduct"> <NewProduct /> </Route>

          <Route exact path="/mail"> <Mail /> </Route> 

          <Route exact path="/feedback"> <Feedback /> </Route>     

          <Route exact path="/report"> <Report /> </Route>   


          <Route exact path="/" component={Home} />
          {/*<Route exact path="/welcome/:username" component={Home} />
          <Route exact path="/logout" component={Login} />*/}
       
             
     
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
