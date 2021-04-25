import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Switch } from 'react-router-dom';

import Header from './components/common/Header';
import NewsList from './components/list/NewsList';
import NewestList from './components/list/NewestList';
import AskList from './components/list/AskList';
import ShowList from './components/list/ShowList';
import JobsList from './components/list/JobsList';
import Footer from './components/common/Footer';
import ItemDetail from './components/page/ItemDetail';
import UserDetail from './components/page/UserDetail';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/news">
          <NewsList />
        </Route>
        <Route path="/newest">
          <NewestList />
        </Route>
        <Route path="/ask/:id">
          <ItemDetail />
        </Route>
        <Route path="/ask">
          <AskList />
        </Route>
        <Route path="/show">
          <ShowList />
        </Route>
        <Route path="/jobs">
          <JobsList />
        </Route>
        <Route path="/user/:id">
          <UserDetail />
        </Route>
        <Route path="/">
          <NewsList />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
