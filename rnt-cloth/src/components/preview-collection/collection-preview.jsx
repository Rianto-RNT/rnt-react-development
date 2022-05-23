import React from "react";

import "../../assets/scss/collection-preview.style.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h4>{title.toUpperCase()}</h4>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
