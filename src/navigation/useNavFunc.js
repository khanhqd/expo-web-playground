import { useNavigation, useRoute } from '@react-navigation/native';

export const reset = (navigation, screenName) => {
  navigation.reset({ index: 0, routes: [{ name: screenName }] });
};

export const goBackOrTo = (navigation, screenName) => {
  const { index } = navigation.dangerouslyGetState();
  index === 0 ? navigation.navigate(screenName) : navigation.goBack();
};

let _idDatas = {};
export const goWithPreData = (navigation, screenName, params, preData) => {
  if (preData.id) _idDatas[preData.id] = preData;
  navigation.navigate(screenName, params);
};
export const getScreenPreData = (id) => _idDatas[id];

export const useNavFunc = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return {
    route,
    navigation,
    navigate: navigation.navigate,
    goWithPreData: (screenName, params, preData) => goWithPreData(navigation, screenName, params, preData),
    getScreenPreData,
    reset: (screenName) => reset(navigation, screenName),
    goBackOrTo: (screenName) => goBackOrTo(navigation, screenName),
  };
};
