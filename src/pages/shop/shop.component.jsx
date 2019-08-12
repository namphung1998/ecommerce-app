import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collections-overview.container';
import CollectionPage from '../collection/collection.container';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.action';


class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverview}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () =>
    dispatch(fetchCollectionsStartAsync())
});


export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
