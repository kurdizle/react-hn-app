import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { useState, useEffect } from 'react';
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
import { fetchNews, fetchNewest, fetchAsk, fetchShow, fetchJobs } from './api';

function App() {
  const [news, setNews] = useState([]);
  const [newest, setNewest] = useState([]);
  const [ask, setAsk] = useState([]);
  const [show, setShow] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchNews()
      .then((response) => {
        setNews([...news, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });

    fetchNewest()
      .then((response) => {
        setNewest([...newest, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });

    fetchAsk()
      .then((response) => {
        setAsk([...ask, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });

    fetchShow()
      .then((response) => {
        setShow([...show, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });

    fetchJobs()
      .then((response) => {
        setJobs([...jobs, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/news">
          <NewsList item={news} />
        </Route>
        <Route path="/newest">
          <NewestList item={newest} />
        </Route>
        <Route path="/ask/:id">
          <ItemDetail />
        </Route>
        <Route path="/ask">
          <AskList item={ask} />
        </Route>
        <Route path="/show">
          <ShowList item={show} />
        </Route>
        <Route path="/jobs">
          <JobsList item={jobs} />
        </Route>
        <Route path="/user/:id">
          <UserDetail />
        </Route>
        <Route path="/">
          <NewsList item={news} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
