import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.css'

export default function Index() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='min-h-screen'>
      <View className='text-[#16b6c4] text-[54.32rpx]'>欢迎使用 weapp-tailwindcss 模板</View>
      <View className='bg-[#534312] text-[#fff] text-[100rpx]'>
        <Text>Hello world!</Text>
      </View>
    </View>

  )
}
