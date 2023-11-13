var uniquePaths = function (m, n) {
    let dp = new Array();
    for (let i = 0; i <= n; i++) {
        dp[i] = 1;
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[j] = dp[j] + dp[j - 1];
        }
    }

    return dp[n-1];
};