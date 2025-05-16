import {Marquee} from '@animatereactnative/marquee';
import {Stagger} from '@animatereactnative/stagger';
import {useState} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  useAnimatedReaction,
  useSharedValue,
} from 'react-native-reanimated';

const images = [
  'https://scera.org/wp-content/uploads/2014/11/avengers-2-poster-hi-res.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2qbz2PDj3MPgzKHexw22nIXt3nrcUl8QEw&s',
  'https://www.postergully.com/cdn/shop/products/52fa21dc99e66e50ad36ec14e791021c.jpeg?v=1578634385',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCt1P73yPlfz0xEtio2kut0MPIuMZOiyWsaQ&s',
  'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/3622974/superman.0.jpg',
];

const {width} = Dimensions.get('window');
const _itemWidth = width * 0.62;
const _itemHeight = _itemWidth * 1.67;
const _itemSize = _itemWidth + 14.5;

function Item({image, index}: {image: string; index: number}) {
  console.log(image);
  return (
    <View style={{width: _itemWidth, height: _itemHeight}}>
      <Image
        source={{uri: image}}
        resizeMode="cover"
        className="flex-1 rounded-2xl"
      />
    </View>
  );
}

export default function LandingScreen(): React.JSX.Element {
  const offset = useSharedValue(0);
  const [activeIndex, setActiveIndex] = useState(0);
  useAnimatedReaction(
    () => {
      const floatIndex =
        ((offset.value + width / 2) / _itemSize) % images.length;
      return Math.abs(Math.floor(floatIndex));
    },
    value => {
      runOnJS(setActiveIndex)(value);
    },
  );
  return (
    <View className="flex-1 justify-center items-center bg-black">
      <View style={[StyleSheet.absoluteFillObject]} className="opacity-50">
        <Animated.Image
          blurRadius={20}
          key={`image-${activeIndex}`}
          source={{uri: images[activeIndex]}}
          entering={FadeIn.duration(1000)}
          exiting={FadeOut.duration(1000)}
          className="flex-1"></Animated.Image>
      </View>
      <Marquee spacing={16} position={offset}>
        <View className="flex-row gap-x-4">
          {images.map((image, index) => (
            <Item key={`image-${index}`} image={image} index={index} />
          ))}
        </View>
      </Marquee>
      <Stagger
        style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}
        stagger={500}
        duration={500}
        initialEnteringDelay={1000}>
        <Text className="text-white font-light text-base">
          Welocome to
        </Text>
        <Text className="text-white font-semibold text-5xl mb-2">
          Tech Crusades
        </Text>
        <Text className="text-white font-light text-base mb-8 w-25">
          Step into the future of digital nnovation with our ​powerhouse team,
          where ​every line of code tells a story of limitless possibilities.
        </Text>
      </Stagger>
    </View>
  );
}
