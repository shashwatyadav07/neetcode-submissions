class Solution {
  /**
   * @param {number} n
   * @return {boolean}
   */
  isHappy(n) {
    const mp = new Set();
    let temp = n;
    const calSquare = (num) => {
      let square = 0;
      while (num) {
        let digit = num % 10;
        square += digit * digit;
        num = Math.floor(num / 10);
      }
      return square;
    };
    while (n != 1) {
      if (mp.has(n)) {
        return false;
      } else {
        mp.add(n);
      }
      n=calSquare(n);
    }
    return true;
  }
}
