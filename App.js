/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';

import Item from "./src/components/item/Item";


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.bar}>
          <Image
            style={styles.img}
            source={require('./search.png')}
          />
          <Text style={styles.welcome}>Random drinks 0.1</Text>
        </View>
        { drinks.map((drink, i) => <Item key={i} drink={drink} />) }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#05ace1',
  },
  bar: {
    position: 'relative'
  },
  img: {
    width: 25,
    height: 25,
    position: 'absolute',
    right: 15,
    top: 10,
    backgroundColor: '#05ace1'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFF'
  }
});

const drinks = [
  {"strDrink":"9 1\/2 Weeks","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xvwusr1472669302.jpg","idDrink":"16108", 'addDrink': ['tequila', 'water', 'gin']},
  {"strDrink":"A. J.","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uryyrr1472811418.jpg","idDrink":"17833", 'addDrink': ['water', 'gin', 'lemon']},
  {"strDrink":"A1","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2x8thr1504816928.jpg","idDrink":"17222", 'addDrink': ['tequila', 'water', 'gin', 'lemon']},
  {"strDrink":"Abbey Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/quyyuw1472811568.jpg","idDrink":"17834", 'addDrink': ['water', 'gin']},
  {"strDrink":"Abbey Martini","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2mcozt1504817403.jpg","idDrink":"17223", 'addDrink': ['water', 'gin']},
  {"strDrink":"Absolutely Cranberry","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vqwstv1472811884.jpg","idDrink":"15024", 'addDrink': ['water', 'gin']},
  {"strDrink":"Adam","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rwuxsv1472812169.jpg","idDrink":"17837", 'addDrink': ['water', 'gin']},
  {"strDrink":"Adam & Eve","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vfeumw1504819077.jpg","idDrink":"17226", 'addDrink': ['water', 'gin']},
  {"strDrink":"Addington","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ib0b7g1504818925.jpg","idDrink":"17227", 'addDrink': ['water', 'gin']},
  {"strDrink":"Adonis Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xrvruq1472812030.jpg","idDrink":"17838", 'addDrink': ['water', 'gin']},
  {"strDrink":"Affinity","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/nwatpb1504817045.jpg","idDrink":"17840", 'addDrink': ['water', 'gin']},
  {"strDrink":"After Dinner Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vtytxq1483387578.jpg","idDrink":"11010", 'addDrink': ['water', 'gin']},
  {"strDrink":"After Supper Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/quyxwu1483387610.jpg","idDrink":"11011", 'addDrink': ['water', 'gin']},
  {"strDrink":"Alaska Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wsyryt1483387720.jpg","idDrink":"11013", 'addDrink': ['water', 'gin']},
  {"strDrink":"Alexander","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/urystu1478253039.jpg","idDrink":"11014", 'addDrink': ['water', 'gin']},
  {"strDrink":"Alfie Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ypxsqy1483387829.jpg","idDrink":"11019", 'addDrink': ['water', 'gin']},
  {"strDrink":"Algonquin","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uwryxx1483387873.jpg","idDrink":"11020", 'addDrink': ['water', 'gin']},
  {"strDrink":"Alice Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qyqtpv1468876144.jpg","idDrink":"12562", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Allegheny","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uwvyts1483387934.jpg","idDrink":"11021", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Allies Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qvprvp1483388104.jpg","idDrink":"11022", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Almeria","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rwsyyu1483388181.jpg","idDrink":"11023", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Almond Joy","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xutuqs1483388296.jpg","idDrink":"11024", 'addDrink': ['tequila', 'gin', 'water', 'lemon']},
  {"strDrink":"Amaretto And Cream","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/dj8n0r1504375018.jpg","idDrink":"11025", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Amaretto Stinger","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vvop4w1493069934.jpg","idDrink":"11028", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Angel Face","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vqpptp1478253178.jpg","idDrink":"11034", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Applecar","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/sbffau1504389764.jpg","idDrink":"11046", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Applejack","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/sutyqp1479209062.jpg","idDrink":"16311", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Arctic Mouthwash","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wqstwv1478963735.jpg","idDrink":"17118", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Army special","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/55muhh1493068062.jpg","idDrink":"17066", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Artillery","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/g1vnbe1493067747.jpg","idDrink":"11055", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Aviation","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ruutxt1478253328.jpg","idDrink":"17180", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Bacardi Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/n433t21504348259.jpg","idDrink":"17183", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Balmoral","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vysuyq1441206297.jpg","idDrink":"11060", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Banana Strawberry","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uvypss1472720581.jpg","idDrink":"12658", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Bellini Martini","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/3h9wv51504389379.jpg","idDrink":"16176", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Between The Sheets","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/of1rj41504348346.jpg","idDrink":"17184", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Bijou","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rysb3r1513706985.jpg","idDrink":"17254", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Blackthorn","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xvswvy1441209430.jpg","idDrink":"11106", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Blue Margarita","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qtvvyq1439905913.jpg","idDrink":"11118", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Bluebird","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vxypsq1441209971.jpg","idDrink":"11120", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Bobby Burns Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/km6se51484411608.jpg","idDrink":"11121", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Boomerang","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/3m6yz81504389551.jpg","idDrink":"11124", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Boston Sidecar","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qzs5d11504365962.jpg","idDrink":"11128", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Brandy Alexander","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tvqxvr1483387746.jpg","idDrink":"11016", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Casa Blanca","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/usspxq1441553762.jpg","idDrink":"11222", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Casino","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/1mvjxg1504348579.jpg","idDrink":"17185", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Cherry Rum","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/twsuvr1441554424.jpg","idDrink":"11239", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"City Slicker","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/dazdlg1504366949.jpg","idDrink":"11251", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Clove Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qxvtst1461867579.jpg","idDrink":"11255", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Clover Club","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/t0aja61504348715.jpg","idDrink":"17186", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Coke and Drops","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yrtxxp1472719367.jpg","idDrink":"17108", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Corpse Reviver #2","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/gifgao1513704334.jpg","idDrink":"17250", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Cosmopolitan","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/kpsajh1504368362.jpg","idDrink":"17196", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Cosmopolitan Martini","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/upxxpq1439907580.jpg","idDrink":"14133", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Daiquiri","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/usuuur1439906797.jpg","idDrink":"11006", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Darkwood Sling","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/sxxsyq1472719303.jpg","idDrink":"14482", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Derby","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/i502ra1504349156.jpg","idDrink":"17187", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Dirty Martini","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vcyvpq1485083300.jpg","idDrink":"17181", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Dry Martini","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/71t8581504353095.jpg","idDrink":"11005", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Dry Rob Roy","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/typuyq1439456976.jpg","idDrink":"11324", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Dubonnet Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xxsuwr1439457147.jpg","idDrink":"11326", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"English Rose Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yxwrpp1441208697.jpg","idDrink":"11339", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Espresso Martini","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/n0sx531504372951.jpg","idDrink":"17212", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Flaming Lamborghini","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yywpss1461866587.jpg","idDrink":"16485", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Flying Scotchman","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/glgrix1504520040.jpg","idDrink":"11369", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Foxy Lady","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/r9cz3q1504519844.jpg","idDrink":"11375", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"French Martini","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/clth721504373134.jpg","idDrink":"17213", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Gagliardo","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/lyloe91487602877.jpg","idDrink":"12758", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Golden dream","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qrot6j1504369425.jpg","idDrink":"17199", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Grasshopper","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/aqm9el1504369613.jpg","idDrink":"17200", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Havana Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/59splc1504882899.jpg","idDrink":"11470", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Hawaiian Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ujoh9x1504882987.jpg","idDrink":"11472", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Hemingway Special","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/jfcvps1504369888.jpg","idDrink":"17201", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Highland Fling Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/0bkwca1492975553.jpg","idDrink":"11476", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Imperial Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/bcsj2e1487603625.jpg","idDrink":"12706", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Jack Rose Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/uuqqrv1439907068.jpg","idDrink":"11542", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Jewel Of The Nile","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/hx4nrb1504884947.jpg","idDrink":"11566", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Jitterbug","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wwqvrq1441245318.jpg","idDrink":"16178", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Kamikaze","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/xa58bb1504373204.jpg","idDrink":"11600", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Kentucky Colonel","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/utqwpu1478820348.jpg","idDrink":"11604", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Lady Love Fizz","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/20d63k1504885263.jpg","idDrink":"11634", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Lemon Drop","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/mtpxgk1504373297.jpg","idDrink":"14366", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Loch Lomond","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rpvtpr1468923881.jpg","idDrink":"11658", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"London Town","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rpsrqv1468923507.jpg","idDrink":"11662", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Lone Tree Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tsxpty1468923417.jpg","idDrink":"11664", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Manhattan","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ec2jtz1504350429.jpg","idDrink":"11008", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Margarita","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wpxpvu1439905379.jpg","idDrink":"11007", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Martinez 2","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/fs6kiq1513708455.jpg","idDrink":"17256", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Martinez Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wwxwvr1439906452.jpg","idDrink":"11720", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Martini","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/71t8581504353095.jpg","idDrink":"11728", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Mary Pickford","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/f9erqb1504350557.jpg","idDrink":"17188", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Miami Vice","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qvuyqw1441208955.jpg","idDrink":"13936", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Midnight Cowboy","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vsxxwy1441208133.jpg","idDrink":"11766", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Midnight Mint","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/svuvrq1441208310.jpg","idDrink":"14842", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Monkey Gland","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/94psp81504350690.jpg","idDrink":"17189", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"New York Lemonade","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/b3n0ge1503565473.jpg","idDrink":"13204", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Orgasm","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vr6kle1504886114.jpg","idDrink":"11872", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Paradise","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ejozd71504351060.jpg","idDrink":"17190", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Pegu Club","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/jfkemm1513703902.jpg","idDrink":"17249", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Pink Lady","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5ia6j21504887829.jpg","idDrink":"11938", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Pisco Sour","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tsssur1439907622.jpg","idDrink":"13214", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Poppy Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/cslw1w1504389915.jpg","idDrink":"11959", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Port Wine Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qruprq1441553976.jpg","idDrink":"11963", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Porto flip","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/64x5j41504351518.jpg","idDrink":"17192", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Quaker's Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/yrqppx1478962314.jpg","idDrink":"11983", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Quarter Deck Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qrwvps1478963017.jpg","idDrink":"11985", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Queen Bee","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rvvpxu1478963194.jpg","idDrink":"11987", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Queen Elizabeth","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vpqspv1478963339.jpg","idDrink":"11991", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Quentin","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/spxtqp1478963398.jpg","idDrink":"11993", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Rose","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/8kxbvq1504371462.jpg","idDrink":"17208", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Rum Runner","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/vqws6t1504888857.jpg","idDrink":"16250", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Salted Toffee Martini","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/3s6mlr1509551211.jpg","idDrink":"17233", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Scooter","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/twuptu1483388307.jpg","idDrink":"12130", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Screaming Orgasm","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/x894cs1504388670.jpg","idDrink":"13625", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Shanghai Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ttyrxr1478820678.jpg","idDrink":"12186", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Sidecar","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/stwxuq1439906852.jpg","idDrink":"12196", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Sidecar Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ewjxui1504820428.jpg","idDrink":"12198", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Sloe Gin Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/d7mo481504889531.jpg","idDrink":"12224", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Stinger","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2ahv791504352433.jpg","idDrink":"17193", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Strawberry Daiquiri","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/deu59m1504736135.jpg","idDrink":"12316", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Strawberry Margarita","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/tqyrpw1439905311.jpg","idDrink":"12322", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"The Last Word","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/91oule1513702624.jpg","idDrink":"17247", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Thriller","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/rvuswq1461867714.jpg","idDrink":"12388", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Turf Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/utypqq1441554367.jpg","idDrink":"12418", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Tuxedo Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/4u0nbl1504352551.jpg","idDrink":"12420", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Valencia Cocktail","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/9myuc11492975640.jpg","idDrink":"12434", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Vesper","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/mtdxpa1504374514.jpg","idDrink":"17218", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Victor","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/voapgc1492976416.jpg","idDrink":"12450", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Vodka Martini","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/qyxrqw1439906528.jpg","idDrink":"14167", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Waikiki Beachcomber","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/ysuqus1441208583.jpg","idDrink":"12474", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"White Lady","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/jofsaz1504352991.jpg","idDrink":"17194", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Yellow Bird","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/2t9r6w1504374811.jpg","idDrink":"17219", 'addDrink': ['tequila', 'gin']},
  {"strDrink":"Zorbatini","strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/wtkqgb1485621155.jpg","idDrink":"16963", 'addDrink': ['tequila', 'gin']}
];
