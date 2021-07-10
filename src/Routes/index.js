import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  HashRouter,
  withRouter,
  Redirect
} from "react-router-dom";
import Login from '../Pages/Login';

const Routes = ()=>{
    return(
        <div>
            <HashRouter>
          
                <Switch>
                  <Route
                    path={"/login"}
                    exact
                    render={props => (
                      <Login
                        {...props}
                      />
                    )}
                  />
                  
                 
                </Switch>
           
        </HashRouter>
        </div>
    )
}
export default Routes;
