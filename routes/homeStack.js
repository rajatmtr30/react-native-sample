import {createStackNavigator} from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import About from '../screens/about';

const screens={
    Home:{
        screen: Home,
        navigationOptions:{
            title:'Movies List'
        }
    },
    ReviewDetails:{
        screen: ReviewDetails,
        navigationOptions:{
            title:'Review Movies'
        }
    },
    About:{
        screen:About
    }
}

const HomeStack = createStackNavigator(screens);


export default HomeStack;