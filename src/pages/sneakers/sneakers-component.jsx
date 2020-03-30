import React from "react";
// import "./sneakers-styles.scss";
import SHOP_DATA from "../shop/shop-data";
import CollectionPreview from "../../components/collection-preview/collection-preview-component";

class SneakersPage extends React.Component {
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
          .filter(item => item.title === "Sneakers")
          .map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
      </div>
    );
  }
}

export default SneakersPage;
