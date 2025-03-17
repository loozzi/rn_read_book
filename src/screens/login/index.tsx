import {View, Text, PixelRatio, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Input} from 'react-native-elements';
import Icon from '@react-native-vector-icons/ant-design';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import TwitterLogo from '../../assets/images/twitter-logo.png';
import FacebookLogo from '../../assets/images/facebook-logo.png';
import GoogleLogo from '../../assets/images/google-logo.png';

const primaryColor = '#2EBBC4';

export default function LoginScreen() {
  return (
    <View style={{padding: 32}}>
      <View style={{height: 250}}>{/* Backgound here */}</View>
      <View
        style={{
          alignItems: 'flex-start',
          backgroundColor: '#fff',
          borderRadius: 16,
          padding: 16,
        }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            marginBottom: 16,
          }}>
          Sign in
        </Text>
        <Input
          label="Username/Email"
          placeholder="Username/Email"
          style={{
            borderBottomColor: primaryColor,
            borderBottomWidth: 1,
          }}
        />
        <Input
          label="Password"
          placeholder="Password"
          textContentType="password"
          style={{
            borderBottomColor: primaryColor,
            borderBottomWidth: 1,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <BouncyCheckbox
            size={16}
            fillColor="cyan"
            unFillColor="#FFFFFF"
            text="Remember me"
            textStyle={{textDecorationLine: 'none'}}
            iconStyle={{borderColor: 'black'}}
            onPress={(isChecked: boolean) => {
              console.log(isChecked);
            }}
            style={{flex: 1, borderBlockColor: primaryColor}}
          />
          <TouchableOpacity>
            <Text
              style={{
                color: primaryColor,
                fontWeight: '500',
              }}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: primaryColor,
          padding: 16,
          borderRadius: 16,
          alignItems: 'center',
          marginVertical: 36,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#fff',
          }}>
          Log in
        </Text>
      </TouchableOpacity>

      <View
        style={{
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 16,
            marginBottom: 32,
            color: 'gray',
          }}>
          Sign in with
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: '80%',
          }}>
          <TouchableOpacity
            style={{
              borderRadius: '100%',
              backgroundColor: '#00B2EF',
              padding: 8,
            }}>
            <Image source={TwitterLogo} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: '100%',
              backgroundColor: '#1178F2',
              padding: 8,
            }}>
            <Image source={FacebookLogo} style={{width: 32, height: 32}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: '100%',
              backgroundColor: '#F14336',
              padding: 8,
            }}>
            <Image source={GoogleLogo} style={{width: 32, height: 32}} />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 8,
          marginTop: 32,
        }}>
        <Text>
          New User?{' '}
          <Text
            style={{
              color: primaryColor,
              fontWeight: '500',
              paddingLeft: 4,
            }}>
            Sign up
          </Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}
