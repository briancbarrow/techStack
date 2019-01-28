import React, { Component } from 'react'
import { Text } from 'react-native'

import { CardSection } from './common'

class MyListItem extends Component {
  render() {
    const { titleStyle } = styles

    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardSection>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
}

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId }
}

export default MyListItem
