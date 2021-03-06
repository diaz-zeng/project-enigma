/*
 * @Date: 2022-01-06 11:09:28
 * @LastEditors: 曾令宇
 * @LastEditTime: 2022-01-06 17:24:47
 * @FilePath: /project-enigma/src/models/wheel.ts
 * @description: 转轮组件
 */
class Wheel {
  private codes!: number[]

  constructor(codes: number[], initPosition = 0) {
    this.setWheelPosition(initPosition);
    if (codes.length === 26) {
      const testMap: Record<number, number> = {};
      codes.forEach((i) => {
        testMap[i] = i;
        if (i < 1 || i > 25) {
          throw this.reflexSettingError;
        }
      });
      if (Object.keys(testMap).length !== 25) {
        throw this.reflexSettingError;
      } else {
        this.codes = codes;
      }
    }
  }

  private notFindError = new Error('输入错误，没有指定的映射');

  private reflexSettingError = new Error('转轮设定错误，转轮映射应当为由数字0～25组成的长度为26且元素不重复的数组');

  private currentPosition = 1;

  get position(): number {
    return this.currentPosition;
  }

  public setWheelPosition(value?: number): void {
    if (value) {
      this.currentPosition = value > 25 ? value % 25 : value;
    } else {
      this.currentPosition = this.currentPosition < 25 ? this.currentPosition + 1 : 0;
    }
  }

  public toLeft(input: number): number {
    let result = 0;
    const flg = this.codes.some((i, index) => {
      result = index;
      return i === input;
    });
    if (flg) {
      return result;
    }
    throw this.notFindError;
  }

  public toRight(input: number): number {
    const result = this.codes[input - 1];
    if (result) {
      return result;
    }
    throw this.notFindError;
  }
}
export default Wheel;
