class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b) => a[1]-b[1]);
        console.log(intervals);
        let prev = intervals[0][1];
        let count=0;
        const n = intervals.length;
        for ( let i=1;i<n;i++){
            if (intervals[i][0]<prev) {
                count++;
            }
            else{
                prev= intervals[i][1];
            }
        }
        return count;
    }
}
