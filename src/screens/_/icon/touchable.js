/*
 * @Author: czy0729
 * @Date: 2019-07-28 01:24:18
 * @Last Modified by: czy0729
 * @Last Modified time: 2020-03-07 14:27:19
 */
import React from 'react'
import { StyleSheet } from 'react-native'
import { Touchable, Flex, Iconfont, Text } from '@components'
import { _ } from '@stores'

function IconTouchable({ style, name, size, color, count, onPress }) {
  if (count) {
    return (
      <Touchable style={[styles.icon, style]} onPress={onPress}>
        <Flex align='end'>
          <Iconfont name={name} size={size} color={color} />
          <Text style={_.ml.xs} type='sub' size={10}>
            {count}
          </Text>
        </Flex>
      </Touchable>
    )
  }

  return (
    <Touchable style={[styles.icon, style]} onPress={onPress}>
      <Iconfont name={name} size={size} color={color} />
    </Touchable>
  )
}

IconTouchable.defaultProps = {
  size: 16,
  count: 0
}

export default IconTouchable

const styles = StyleSheet.create({
  icon: {
    padding: _.sm
  }
})
