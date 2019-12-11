/*
 * @Author: czy0729
 * @Date: 2019-09-12 15:35:26
 * @Last Modified by: czy0729
 * @Last Modified time: 2019-12-09 18:30:20
 */
import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { Flex, Text, Touchable, Iconfont } from '@components'
import { _ } from '@stores'
import { formatNumber } from '@utils'
import { observer } from '@utils/decorators'

function Logs({ style }, { $ }) {
  const styles = memoStyles()
  const { bids, asks } = $.userLogs
  return (
    <Flex style={[styles.container, style]} align='start'>
      <Flex.Item>
        <Text style={styles.bid} size={16}>
          买入委托
        </Text>
        {bids.length === 0 && <Text style={styles.text}>-</Text>}
        {bids
          .sort((a, b) => b.price - a.price)
          .map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <View key={index} style={styles.item}>
              <Flex>
                <Flex.Item>
                  <Text
                    size={12}
                    style={{
                      color: _.colorTinygrailPlain
                    }}
                  >
                    {formatNumber(item.price)}
                  </Text>
                </Flex.Item>
                <Text style={styles.text} size={12}>
                  {formatNumber(item.amount, 0)}
                </Text>
                <Touchable
                  style={[styles.cancel, _.ml.sm]}
                  onPress={() => $.doCancel('bid', item.id)}
                >
                  <Iconfont
                    name='close'
                    size={12}
                    color={_.colorTinygrailIcon}
                  />
                </Touchable>
              </Flex>
            </View>
          ))}
      </Flex.Item>
      <Flex.Item style={_.ml.wind}>
        <Text style={styles.ask} size={16}>
          卖出委托
        </Text>
        {asks.length === 0 && <Text style={styles.text}>-</Text>}
        {asks
          .sort((a, b) => a.price - b.price)
          .map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <View key={index} style={styles.item}>
              <Flex>
                <Flex.Item>
                  <Text
                    size={12}
                    style={{
                      color: _.colorTinygrailPlain
                    }}
                  >
                    {formatNumber(item.price)}
                  </Text>
                </Flex.Item>
                <Text style={styles.text} size={12}>
                  {formatNumber(item.amount, 0)}
                </Text>
                <Touchable
                  style={[styles.cancel, _.ml.sm]}
                  onPress={() => $.doCancel('ask', item.id)}
                >
                  <Iconfont
                    name='close'
                    size={12}
                    color={_.colorTinygrailIcon}
                  />
                </Touchable>
              </Flex>
            </View>
          ))}
      </Flex.Item>
    </Flex>
  )
}

Logs.contextTypes = {
  $: PropTypes.object
}

export default observer(Logs)

const memoStyles = _.memoStyles(_ => ({
  container: {
    minHeight: 120,
    paddingVertical: _.md,
    paddingHorizontal: _.wind,
    borderTopWidth: _.sm,
    borderTopColor: _.colorTinygrailBg
  },
  item: {
    width: '100%'
  },
  bid: {
    marginBottom: _.sm,
    color: _.colorBid
  },
  ask: {
    marginBottom: _.sm,
    color: _.colorAsk
  },
  cancel: {
    paddingVertical: _.sm,
    paddingLeft: _.sm
  },
  text: {
    color: _.colorTinygrailText
  }
}))