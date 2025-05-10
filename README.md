# react-native-size

A tool that can convert design draft dimensions into DP (density-independent pixels) units used in React Native.

## Installation

```bash
npm install @fka/react-native-size
```

## Usage

Import and instantiate the object

```js
import RNSize from '@fka/react-native-size';

// 375 is the device width of the design draft
export const rnSize = new RNSize(375);

...

const styles = StyleSheet.create({
  container: {
    width: rnSize.scaleSize(200),
    height: rnSize.scaleSize(200),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    color: 'red',
    // font size use scaleFont
    fontSize: rnSize.scaleFont(20),
  }
});
```
