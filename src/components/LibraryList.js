import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FlatList } from 'react-native'

import MyListItem from './ListItem'

class LibraryList extends Component {
  _renderItem = ({ item }) => {
    return <MyListItem library={item} />
  }
  _keyExtractor = (library, index) => library.id.toString()

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    )
  }
}

const mapStateToProps = state => {
  return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)
