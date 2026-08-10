class Solution {
  /**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let n = intervals.length;
    let i = 1;
    let [s, e] = intervals[0];
    const res = [];
    while (i < n) {
      if (s <= intervals[i][1] && e >= intervals[i][0]) {
        s = Math.min(s, intervals[i][0]);
        e = Math.max(e, intervals[i][1]); 
      } else {
        res.push([s, e]);
        s=intervals[i][0];
        e=intervals[i][1];
        
      }
      i++;
      
    }
    res.push([s,e]);
    return res;
  }
}
