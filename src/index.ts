import { Dimensions, PixelRatio } from 'react-native';

export default class RNSize {
    
  private designWidth = 375;
  private isScaleFont = true;
  private readonly deviceWidth = Dimensions.get('window').width;

  /**
   * @param designWidth design draft width
   * @param isScaleFont enable font size scale default: true
   */
  constructor(designWidth: number, isScaleFont = true) {
    this.designWidth = designWidth;
    this.isScaleFont = isScaleFont;
  }

  /**
   * convert size to dp
   * @param {number} value 
   * @returns {number}
   */
  scaleSize(value: number): number {
    return value * (this.deviceWidth / this.designWidth);
  }

  /**
   * convert font size to dp
   * @param {number} value 
   * @returns {number} 
   */
  scaleFont(value: number): number {
    if (this.isScaleFont) {
      return this.scaleSize(value) * PixelRatio.getFontScale();
    }
    return this.scaleSize(value);
  }

}
