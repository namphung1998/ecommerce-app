import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collections-overview.container';
import CollectionPage from '../collection/collection.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.action';

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollectionsStart();
  }

  render() {
    const { match } = this.props;

    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);
