import { BrowserRouter, Switch, Route } from "react-router-dom"
import Layout from '../components/Layout'
import Main from '../containers/Main'
import Genres from '../containers/Genres'
import Favorites from '../containers/Favorites'
import FilteredResults from '../components/FilteredResults'

const App = () => {
  return (
    <div className="h-full">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/favorites" component={Favorites} />
            <Route exact path="/(tv|movie)" component={Genres} />
            <Route exact path="/(tv|movie)/results" component={FilteredResults} />
            <Route path="*" component={Main} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
