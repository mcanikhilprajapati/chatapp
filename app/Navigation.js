import React from 'react'
import {createStackNavigator} from "react-navigation";
import PostListScreen from './Root/Screens/PostListScreen'
import WelcomeScreen from './Root/Screens/WelcomeScreen'
import SplshScreen from "./Root/Screens/SplashScreen";
import AddPostScreen from "./Root/Screens/AddPostScreen";
import LoginScreen from "./Root/Screens/LoginScreen";
import SignupScreen from "./Root/Screens/SignupScreen";
import UserChatScreen from "./Root/Screens/TabScreen/ChatScreen/UserChatScreen";
import AppointmentScreen from "./Root/Screens/TabScreen/PhoneCallScreen/AppointmentScreen";
import PrescriptionsScreen from "./Root/Screens/TabScreen/SettingsScreen/PrescriptionsScreen";
import PaymentDetailsScreen from "./Root/Screens/TabScreen/SettingsScreen/PaymentScreen";
import NewPrescriptionsScreen from "./Root/Screens/TabScreen/SettingsScreen/PrescriptionsScreen/NewPrescriptionsScreen";
import UserContactScreen from "./Root/Screens/TabScreen/ChatScreen/UserContactScreen";
import EditUserProfileScreen from "./Root/Screens/TabScreen/EditUserProfileScreen";
import EditUserProfileScreenNew from "./Root/Screens/TabScreen/EditUserProfileScreenNew";
import InviteFriendsScreen from "./Root/Screens/TabScreen/InviteFriendsScreen";
import CreateAppointmentScreen from "./Root/Screens/TabScreen/CreateAppointmentScreen";
import PaymentScreen from "./Root/Screens/TabScreen/PaymentScreen";
import TabScreen from "./Root/Screens/TabScreen";
import {fromRight} from '././navigation_transitions'

console.disableYellowBox = true;

const StackScreen = createStackNavigator({
    SplshScreen: {
        screen: SplshScreen,
        navigationOptions: () => ({
            header: null
        })
    },
    WelcomeScreen: {
        screen: WelcomeScreen,
        navigationOptions: () => ({
            header: null
        })
    },
    PostListScreen: {
        screen: PostListScreen,

    },
    AddPostScreen: {
        screen: AddPostScreen
    },
    LoginScreen: {
        screen: LoginScreen, navigationOptions: () => ({
            header: null
        })
    },
    SignupScreen: {
        screen: SignupScreen, navigationOptions: () => ({
            header: null
        })
    },
    TabScreen: {
        screen: TabScreen, navigationOptions: () => ({
            header: null
        })
    },
    AppointmentScreen: {
        screen: AppointmentScreen, navigationOptions: () => ({
            header: null
        })
    },
    UserChatScreen: {
        screen: UserChatScreen, navigationOptions: () => ({
            header: null
        })
    },
    PrescriptionsScreen: {
        screen: PrescriptionsScreen, navigationOptions: () => ({
            header: null
        })
    },
    NewPrescriptionsScreen: {
        screen: NewPrescriptionsScreen, navigationOptions: () => ({
            header: null
        })
    },
    PaymentScreen: {
        screen: PaymentDetailsScreen, navigationOptions: () => ({
            header: null
        })
    },
    GetPaymentScreen: {
        screen: PaymentScreen, navigationOptions: () => ({
            header: null
        })
    },
    UserContactScreen: {
        screen: UserContactScreen, navigationOptions: () => ({
            header: null
        })
    },
    EditUserProfileScreen: {
        screen: EditUserProfileScreen, navigationOptions: () => ({
            header: null
        })
    },
    EditUserProfileScreenNew: {
        screen: EditUserProfileScreenNew, navigationOptions: () => ({
            header: null
        })
    },
    InviteFriendsScreen: {
        screen: InviteFriendsScreen, navigationOptions: () => ({
            header: null
        })
    },
    CreateAppointmentScreen: {
        screen: CreateAppointmentScreen, navigationOptions: () => ({
            header: null
        })
    },

}, {transitionConfig: (nav) => fromRight()});

export default StackScreen;
