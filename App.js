import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    padding: 16,
    backgroundColor: 'coral',
  },
  list: {
    padding: 16,
    flex: 1,
    backgroundColor: 'aqua',
  },
});
