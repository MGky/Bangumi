/*
 * @Author: czy0729
 * @Date: 2019-09-03 21:52:01
 * @Last Modified by: czy0729
 * @Last Modified time: 2019-09-06 15:21:11
 */
import React from 'react'
import { StyleSheet, View } from 'react-native'
import PropTypes from 'prop-types'
import { Flex } from '@components'
import { inject, withHeader, observer } from '@utils/decorators'
import { hm } from '@utils/fetch'
import _ from '@styles'
import SearchBar from './search-bar'
import History from './history'
import Store from './store'

export default
@inject(Store)
@withHeader()
@observer
class TinygrailSearch extends React.Component {
  static navigationOptions = {
    title: '小圣杯搜索'
  }

  static contextTypes = {
    $: PropTypes.object,
    navigation: PropTypes.object
  }

  componentDidMount() {
    const { $ } = this.context
    $.init()

    hm('tinygrail/search')
  }

  render() {
    const { $ } = this.context
    const { _loaded } = $.state
    if (!_loaded) {
      return null
    }

    return (
      <View style={_.container.screen}>
        <Flex style={styles.searchBar}>
          <SearchBar />
        </Flex>
        <History style={_.mt.sm} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchBar: {
    padding: _.wind
  }
})