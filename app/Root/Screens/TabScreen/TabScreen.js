import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import PhoneCallScreen from '././PhoneCallScreen';
import ChatScreen from '././ChatScreen';
import PostListScreen from '../PostListScreen';
import UserProfileScreen from '././UserProfileScreen';
import UserProfileScreenNew from '././UserProfileScreenNew';
import SettingsScreen from '././SettingsScreen';
import AppointmentScreen from '././PhoneCallScreen/AppointmentScreen';
import PrescriptionsScreen from '././SettingsScreen/PrescriptionsScreen';

//import Ionicons from "react-native-vector-icons";

const Tab = createBottomTabNavigator

(
    {
        'Call': {
            screen:  AppointmentScreen,
            // screen:  PrescriptionsScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor, focused}) => (
                    <Image style={focused ? {height: 48, width: 48} : {height: 24, width: 24, resizeMode: 'contain'}}
                           source={focused ? require('../../../assets/ic_phone_black_48dp.png') : require('../../../assets/ic_phone_black_48dp.png')}
                        // style={[styles.icon, { tintColor: tintColor }]}
                    />
                )
            }),
        },
        'Chat': {
            screen: ChatScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor, focused}) => (
                    <Image style={focused ? {height: 48, width: 48, resizeMode: 'contain'} : {
                        height: 24,
                        width: 24,
                        resizeMode: 'contain'
                    }}
                           source={focused ? require('../../../assets/ic_chat_black_48dp.png') : require('../../../assets/ic_chat_black_48dp.png')}
                        // style={[styles.icon, { tintColor: tintColor }]}
                    />
                )
            }),
        }
        , 'UserAccount': {
            //screen: UserProfileScreenNew,
            screen: UserProfileScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor, focused}) => (
                    <Image style={focused ? {height: 48, width: 48, resizeMode: 'contain'} : {
                        height: 24,
                        width: 24,
                        resizeMode: 'contain'
                    }}
                           source={focused ? require('../../../assets/ic_account_black_48dp.png') : require('../../../assets/ic_account_black_48dp.png')}
                        // style={[styles.icon, { tintColor: tintColor }]}
                    />
                )
            }),
        }
        , 'Settings': {
            screen: SettingsScreen,
            navigationOptions: () => ({
                tabBarIcon: ({tintColor, focused}) => (
                    <Image style={focused ? {height: 48, width: 48, resizeMode: 'contain'} : {
                        height: 24,
                        width: 24,
                        resizeMode: 'contain'
                    }}
                           source={focused ? require('../../../assets/ic_settings_black_48dp.png') : require('../../../assets/ic_settings_black_48dp.png')}
                        // style={[styles.icon, { tintColor: tintColor }]}
                    />
                )
            }),
        }
    },
    {


        defaultNavigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) =>
                getTabBarIcon(navigation, focused, tintColor),
        }),
        swipeEnabled: true,
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#32AEFE',
            inactiveTintColor: 'gray',
            showLabel: false,
            style: {
                paddingTop: 10,
                paddingBottom: 5,
                height: 60
            },
            swipeEnabled: true,
            animationEnabled: true,
        },
    }
);

const TabScreen = createStackNavigator({
    HomeScreen: {
        screen: Tab, lazy: false, navigationOptions: {
            header: null, tabBarOnPress: ({navigation, defaultHandler}) => {
                defaultHandler();
            },
        }
    },
});


const MyNavigator = createSwitchNavigator({
    routeNameOne: TabScreen,
});
export default MyNavigator;

class IconWithBadge extends React.Component {
    render() {
        const {name, badgeCount, color, size} = this.props;
        return (
            <View style={{width: 24, height: 24, margin: 5}}>
                <Ionicons name={name} size={size} color={color}/>
                {badgeCount > 0 && (
                    <View
                        style={{
                            // /If you're using react-native < 0.57 overflow outside of the parent
                            // will not work on Android, see https://git.io/fhLJ8
                            position: 'absolute',
                            right: -6,
                            top: -3,
                            backgroundColor: 'red',
                            borderRadius: 6,
                            width: 12,
                            height: 12,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text style={{color: 'white', fontSize: 10, fontWeight: 'bold'}}>
                            {badgeCount}
                        </Text>
                    </View>
                )}
            </View>
        );
    }
}

const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    return <IconWithBadge {...props} badgeCount={3}/>;
};
const getTabBarIcon = (navigation, focused, tintColor) => {
    const {routeName} = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === 'Chat') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        // We want to add badges to home tab icon
        IconComponent = HomeIconWithBadge;
    } else if (routeName === 'Me') {
        iconName = `ios-options${focused ? '' : '-outline'}`;
    }

    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor}/>;
};
