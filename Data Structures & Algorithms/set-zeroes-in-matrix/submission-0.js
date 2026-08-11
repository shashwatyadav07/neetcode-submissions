class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix) {
        const rows= new Set();
        const col = new Set();
        const m = matrix.length;
        const n = matrix[0].length;
        for ( let i=0; i<m; i++){
            for( let j=0; j<n; j++){
                if (matrix[i][j] === 0){
                    rows.add(i);
                    col.add(j);
                }
            }
        }
        for ( let i=0; i<m; i++){
            for( let j=0; j<n; j++){
                if (rows.has(i) || col.has(j)){
                    matrix[i][j]=0;
                }
            }
        }
        return matrix;

    }
}
