import React from "react";
// import "./mens-styles.scss";
import SHOP_DATA from "../shop/shop-data";
import CollectionPreview from "../../components/collection-preview/collection-preview-component";

class MensPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections
          .filter(item => item.title === "Mens")
          .map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
      </div>
    );
  }
}

export default MensPage;
