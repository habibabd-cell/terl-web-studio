import { SafeAreaView, StyleSheet, Platform } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  if (Platform.OS === 'web') {
    return (
      <iframe 
        src="/legacy_index.html" 
        style={{ width: '100%', height: '100vh', border: 'none' }} 
      />
    );
  }

  const legacyHtml = require('./legacy_index.html');
  
  return (
    <SafeAreaView style={styles.container}>
      <WebView 
        source={legacyHtml} 
        style={styles.webview} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  webview: {
    flex: 1,
  },
});
