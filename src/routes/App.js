import { BrowserRouter, Switch, Route } from "react-router-dom"
import Layout from '../components/Layout'
import Main from '../containers/Main'
import Favorites from '../components/Favorites'
import Genres from '../components/Genres'
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
