import { BrowserRouter, Switch, Route } from "react-router-dom"
import Layout from '../components/Layout'
import Main from '../components/Main'
import Genres from '../components/Genres'
import FilteredResults from '../components/FilteredResults'
import Loader from '../components/global/Loader'

const App = () => {
  return (
    <div className="h-full xl:h-screen xl:overflow-hidden">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main} />
            {/* <Route exact path="/tv" component={Genres} /> */}
            <Route exact path="/tv" component={Genres} />
            <Route exact path="/movie" component={Genres} />
            <Route exact path="/tv/results" component={FilteredResults} />
            <Route exact path="/movie/results" component={FilteredResults} />
            <Route exact path="/loader" component={Loader} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
