import { BrowserRouter, Switch, Route } from "react-router-dom"
import Layout from '../components/Layout'
import Main from '../components/Main'

const App = () => {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
