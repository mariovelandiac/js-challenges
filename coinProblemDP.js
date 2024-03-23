function minIgnoreNull(a,b) {
    if (!a) return b;
    if (!b) return a;
    return Math.min(a,b);
}

function coinProblemDP(target, coinOptions) {
    const memo = {};
    memo[0] = 0;
    for (let i = 1; i <= target; i++) {
        for (coin of coinOptions) {
            let subProblem = i - coin;
            if (subProblem < 0) continue;
            memo[i] = minIgnoreNull(memo[i], memo[subProblem] + 1);
        }        
    }
    return memo[target];
}

function coinProblemGreedy(target, coinOptions) {
    // Assumming coins options are sorted ascending
    let currentIndex = coinOptions.length - 1;
    // Set maximum coin available to target
    let currentCoin = coinOptions[currentIndex];
    let result = 0;
    if (target < 0) {
        return result;
    }
    
    while(currentIndex+1 && target > 0) {
        if (target < currentCoin) {
            currentIndex -= 1;
            currentCoin = coinOptions[currentIndex];
            continue;
        }
        result += 1;
        target -= currentCoin;
        if (target == 0) return result;
    }
    return result;
}

(() => {
    const coinOptions = [1,4,5];
    const dpTemplate = "Dynamic Programmming Approach: ";
    const greedyTemplate = "Greedy Algotithm Approach: ";
    const targets = [1,5,8,13,17,19,24,37,2434,3535,23535,6464334];
    let result;
    for (let target of targets) {
        console.log("Target is: ", target);
        result =  coinProblemDP(target, coinOptions);
        console.log(dpTemplate, result);
        result = coinProblemGreedy(target, coinOptions);
        console.log(greedyTemplate, result);
        console.log("-----------------------------");
   }
})()
