import React, { useEffect } from "react";
import { connect } from "react-redux";

import CollectionItem from "../../components/collection-item/collection-item";

import { selectCollection } from "../../redux/shop/shop.selectors";

import { firestore } from "../../utils/firebase.utils";

import "../../assets/scss/collection.style.scss";

const Collection = ({ collection }) => {
  useEffect(() => {
    console.log("i am subscribing");
    const unsubscribeFromColections = firestore
      .collection("collections")
      .onSnapshot((snapshot) => console.log(snapshot));

    return () => {
      console.log("i am unsubscribing");
      unsubscribeFromColections();
    };
  }, []);

  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
