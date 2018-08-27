import { connect } from 'react-redux'
import ItemList from '../components/itemList'

const getItems = (storeReducer) => {
  return storeReducer
}

const mapStateToProps = state => ({
  items: getItems(state.storeReducer)
})

export default connect(
  mapStateToProps
)(ItemList)