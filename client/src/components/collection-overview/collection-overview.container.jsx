import { createStructuredSelector } from "reselect";
import { selectIsCollectionsFetching } from "../../redux/shop/shop.selector";
import { compose } from "redux";
import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionOverview from "./collection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFetching,
});

const CollectionOverViewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverViewContainer