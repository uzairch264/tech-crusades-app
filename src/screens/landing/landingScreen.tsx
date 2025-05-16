import {Marquee} from '@animatereactnative/marquee';
import {Dimensions, Image, Text, View} from 'react-native';

const images = [
  'https://scera.org/wp-content/uploads/2014/11/avengers-2-poster-hi-res.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ2qbz2PDj3MPgzKHexw22nIXt3nrcUl8QEw&s',
  'https://www.postergully.com/cdn/shop/products/52fa21dc99e66e50ad36ec14e791021c.jpeg?v=1578634385',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCt1P73yPlfz0xEtio2kut0MPIuMZOiyWsaQ&s',
  'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/3622974/superman.0.jpg',
];

const {width} =Dimensions.get('window');
const _itemWidth=width * 0.62;
const _itemHeight= _itemWidth * 1.67;

function Item({image, index}: {image: string; index: number}) {
  return (
    <View style={{width:_itemWidth,height:_itemHeight,borderRadius:16 }}>
      <Image source={{uri: image}} />
      <Text> Uzair</Text>
    </View>
  );
}

export default function LandingScreen(): React.JSX.Element {
  return (
    <View className="flex-1 justify-center items-center">
      <Marquee>
        <View>
          {images.map((image, index) => (
            <Item key={`image-${index}`} image={image} index={index} />
          ))}
        </View>
      </Marquee>
    </View>
  );
}
