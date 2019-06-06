import React, {Component} from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';


type Props = {};
export default class Item extends Component<Props> {
  render() {
    const { drink } = this.props;
    const { strDrink, strDrinkThumb, addDrink } = drink;
    return (
      <View style={styles.container}>
        <View style={styles.description}>
          <Text style={styles.title}>{strDrink}</Text>
          { addDrink.slice(0,2).map((add, i) => <Text key={i}>{'\u2022'} {add}</Text>) }
          { (addDrink.length) > 2 ?
            <Text>y {(addDrink.length) - 2 } ingredientes mas.</Text>
            : null
          }
        </View>
        <Image style={styles.img} source={{uri: strDrinkThumb}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 10,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  description: {
    flexDirection: 'column'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  img: {
    width: 100,
    height: 115,
    borderRadius: 5
  }
});
