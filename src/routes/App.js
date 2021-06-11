import { BrowserRouter, Switch, Route } from "react-router-dom"
import Layout from '../components/Layout'
import Main from '../components/Main'
import Genres from '../components/Genres'

const App = () => {
  return (
    <div className="h-screen">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/genres-:key" component={Genres} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
