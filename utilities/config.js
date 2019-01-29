import { Platform } from 'react-native';


export const server =  Platform.select({
    ios: 'http://localhost:4000/graphql',
    android: 'http://10.0.2.2:4000/graphql'
});
export const supportEmail = 'support@learncode.com';