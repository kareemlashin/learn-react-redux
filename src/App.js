import React, { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import createStore from './store/store'
import './App.css'
import './scss/index.scss'
import Dynamic from './Dynamic/Dynamic'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom'
const Nav = lazy(() => import('./Nav/Nav'))
const Header = lazy(() => import('./Header/Header'))
const Form = lazy(() => import('./Form/Form'))
const Single = lazy(() => import('./Single/Single'))
const Forms = lazy(() => import('./Forms/Forms'))
const StateMangeMent = lazy(() =>
  import('./store/StateMangeMent/StateMangeMent'),
)

//parent
export class App extends React.Component {
  state = {
    name: 'value',
    dataParent: 'parent',
  }
  render() {
    return (
      <Suspense fallback={<div></div>}>
        <Provider store={createStore}>
          <div className="App">
            <header className="App-header">
              <p>{this.state.dataParent}</p>
              <p>{this.state.name}</p>
              <Router>
                <NavLink activeClassName="activea" to="/">
                  home
                </NavLink>
                <NavLink activeClassName="activea" to="/Header">
                  Header
                </NavLink>
                <NavLink activeClassName="activea" to="/Form">
                  Form
                </NavLink>
                <NavLink activeClassName="activea" to="/Forms">
                  Forms
                </NavLink>
                <NavLink activeClassName="activea" to="/Dynamic">
                  Dynamic
                </NavLink>
                <NavLink activeClassName="activea" to="/StateMangeMent">
                  StateMangeMent
                </NavLink>
                <Switch>
                  <Route exact path="/" component={Nav} />
                  <Route path="/Header" component={Header} />
                  <Route path="/Form" component={Form} />
                  <Route path="/Single/:id" component={Single} />
                  <Route path="/Forms" component={Forms} />
                  <Route path="/Dynamic" component={Dynamic} />
                  <Route path="/StateMangeMent" component={StateMangeMent} />
                  <Redirect path="*" to="/" />
                </Switch>
              </Router>
            </header>
          </div>
        </Provider>
      </Suspense>
    )
  }
}
