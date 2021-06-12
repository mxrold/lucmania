import { BrowserRouter, Switch, Route } from "react-router-dom"
import Layout from '../components/Layout'
import Main from '../components/Main'
import Genres from '../components/Genres'
import FilteredResults from '../components/FilteredResults'

const App = () => {
  return (
    <div className="h-full md:h-screen md:overflow-hidden">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main} />
            {/* <Route exact path="/tv" component={Genres} /> */}
            <Route exact path="/:id" component={Genres} />
            <Route exact path="/:id/results" component={FilteredResults} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
