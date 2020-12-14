import React from 'react';
import './style.css'
import {Switch, Route, Link} from "react-router-dom";


const TabWithUsingRouterOnly = ({forTab}) => {

    return (
        <div>
            <div className="inline" >
                {forTab.map((el) =>
                    <div>
                        <Link key={forTab.id} to={"/" + el.label}>{el.label}</Link>
                    </div>)
                }
            </div>

            <Switch>
                {forTab.map((el) =>
                    <Route exact path={"/" + el.label}>
                        <div key={el.id}>{el.tabContent}</div>
                    </Route>)
                }
            </Switch>
        </div>
    );

}

export default TabWithUsingRouterOnly;