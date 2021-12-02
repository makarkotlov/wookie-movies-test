rm -rf /tmp/haste-map-react-native-packager-*
watchman watch-del-all
rm -rf /tmp/metro-*
rm -rf node_modules
npm i
npm start -- --reset-cache
