import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import { StyleSheet, View, Text, Button, FlatList, Platform } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton";

const routeDemo = () => {
    return (
        <View style={styles.screen}>
            <Text>The categories screen</Text>
            <Button title="GO TO MEALS!" onPress={() =>
                // props.navigation.navigate('CategoryMeals')
                // NO BACK (can be used after logging in)
                props.navigation.replace('CategoryMeals') 
            }/>
        </View>
    )
}



const CategoriesScreen = props => {
    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile 
                title={itemData.item.title}
                color={itemData.item.color} 
                onSelect={() => 
                    {props.navigation.navigate('CategoryMeals', {
                        categoryId: itemData.item.id
                    })
            }}/>
        )
    }

    return (
        <FlatList 
            keyExtractor={(item, index) => item.id} 
            numColumns={2} data={CATEGORIES} 
            renderItem={renderGridItem}
        />
    )
}

CategoriesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => {
            return (
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title='Menu' 
                    iconName='ios-menu' 
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }}/>
                </HeaderButtons>
            )
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoriesScreen