/**
 * @format
 */
import React from 'react';
import {Navigation} from 'react-native-navigation';
import {colors} from './src/config/colors';
import {homeIcon, moreIcon} from './src/config/imageSources';
import AddStringModal from './src/modals/AddStringModal';
import ListModal from './src/modals/ListModal';
import HomeScreen from './src/screens/Home/HomeScreen';
import MoreScreen from './src/screens/More/MoreScreen';
import {Provider} from 'react-redux';
import {configureStore} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const {store, persistor} = configureStore();

function WrappedComponent(Component) {
  return function inject(props) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Component {...props} />
        </PersistGate>
      </Provider>
    );
    return <EnhancedComponent />;
  };
}

Navigation.registerComponent('Home', () => WrappedComponent(HomeScreen));
Navigation.registerComponent('More', () => WrappedComponent(MoreScreen));
Navigation.registerComponentWithRedux('ListModal', () =>
  WrappedComponent(ListModal),
);
Navigation.registerComponentWithRedux('AddStringModal', () =>
  WrappedComponent(AddStringModal),
);

Navigation.setDefaultOptions({
  navigationBar: {
    visible: false,
  },
  topBar: {
    visible: false,
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14,
    textColor: colors.grey,
    iconColor: colors.grey,
    selectedTextColor: colors.lightBlue,
    selectedIconColor: colors.lightBlue,
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home',
                    options: {
                      bottomTab: {
                        icon: homeIcon,
                        text: 'Home',
                      },
                    },
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'More',
                    options: {
                      bottomTab: {
                        icon: moreIcon,
                        text: 'More',
                      },
                    },
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
