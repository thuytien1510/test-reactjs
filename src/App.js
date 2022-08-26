import './App.css';
import React, { useEffect, useState } from 'react';
import ListArtical from './components/ListArtical/ListArtical';
import Pagnination from './components/Pagination/Pagnination';

function App() {
  const [listArticles, setlistArticles] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = () => {
    fetch(`https://api.realworld.io/api/articles/?limit=10&offset=${page}`)
      .then((response) => response.json())
      .then((data) => {
        setlistArticles(data.articles)
      })
  }

  return (
    <div className="App">
      <ListArtical
        listArticles={listArticles}
      />
      <Pagnination className="pageinage"
        listArticles = {listArticles}
        numberPage={page}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
