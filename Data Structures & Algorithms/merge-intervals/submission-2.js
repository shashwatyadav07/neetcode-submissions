class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        
        intervals.sort((a,b)=>a[0]-b[0]);
        const res =  [intervals[0]];
        for ( const [s,e] of intervals.slice(1)){
            const last= res[res.length - 1];
            if (( s <= last[1]) && (e >= last[0])){
                last[1]=Math.max(e,last[1]);
            }
            else res.push([s,e]);
            
        }
        return res;
    }
}
