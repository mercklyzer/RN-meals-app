import React from "react";
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";
import Colors from "../constants/Colors";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useSelector } from 'react-redux'
import { StyleSheet, View } from "react-native";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = props => {
    
    const categoryId = props.navigation.getParam('categoryId')
    // const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.includes(categoryId))
    
    if(displayedMeals.length === 0 || !displayedMeals){
        return (<View style={styles.content}>
            <DefaultText>No meals found. Maybe check your filters.</DefaultText>
        </View>)
    }

    return (
        <MealList listData={displayedMeals} navigation={props.navigation}/>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const categoryId = navigationData.navigation.getParam('categoryId')
    const selectedCategory = CATEGORIES.find(category => category.id === categoryId)

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen