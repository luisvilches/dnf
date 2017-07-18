import React from 'react';
import Layout from './layouts.jsx';

const Home = React.createClass({
  render() {
    return (
      <Layout title="Homepage">
        <h1>Hola mundo</h1>
      </Layout>
    );
  }
});

export default Home;