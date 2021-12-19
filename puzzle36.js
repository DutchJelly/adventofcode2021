const testInput = [[[[[4, 3], 4], 4], [7, [[8, 4], 9]]], [1, 1]];

const largeTestInput = [
    [[[0, [4, 5]], [0, 0]], [[[4, 5], [2, 6]], [9, 5]]],
    [7, [[[3, 7], [4, 3]], [[6, 3], [8, 8]]]],
    [[2, [[0, 8], [3, 4]]], [[[6, 7], 1], [7, [1, 6]]]],
    [[[[2, 4], 7], [6, [0, 5]]], [[[6, 8], [2, 8]], [[2, 1], [4, 5]]]],
    [7, [5, [[3, 8], [1, 4]]]],
    [[2, [2, 2]], [8, [8, 1]]],
    [2, 9],
    [1, [[[9, 3], 9], [[9, 0], [0, 7]]]],
    [[[5, [7, 4]], 7], 1],
    [[[[4, 2], 2], 6], [8, 7]],
]

const puzzleInput = [
    [[1, 8], [[8, 7], [3, [1, 9]]]],
    [[[[8, 1], 7], [[9, 9], [4, 8]]], [[7, [7, 2]], [2, [1, 6]]]],
    [[[[0, 8], 0], [0, [7, 2]]], [[[3, 2], 8], [[5, 6], 3]]],
    [[[7, [7, 9]], 8], [[[7, 0], [7, 7]], [[8, 2], 2]]],
    [[5, 7], [[0, [1, 0]], [2, [4, 6]]]],
    [[[[7, 7], [2, 6]], 9], [[1, 3], [[1, 7], 7]]],
    [[[[5, 7], [8, 6]], [1, [6, 4]]], [7, [[2, 8], [9, 2]]]],
    [[[3, 6], [[7, 7], [1, 0]]], [[1, [9, 3]], [[0, 9], [9, 5]]]],
    [[[6, [6, 2]], [[3, 4], [5, 1]]], [[3, [5, 6]], [8, [4, 8]]]],
    [[[[4, 9], 6], 4], [3, [[1, 6], [4, 3]]]],
    [[[[4, 9], [6, 0]], 2], [[0, 9], [[8, 4], [3, 5]]]],
    [[5, [8, [1, 1]]], [7, [[3, 2], 2]]],
    [1, 2],
    [[[1, 9], [[7, 4], 4]], [[7, [0, 7]], 9]],
    [[[[5, 9], 0], [3, 8]], [[[4, 9], [5, 8]], [2, 7]]],
    [[[[1, 1], [4, 5]], [7, 7]], 1],
    [[[[4, 3], 3], [1, 6]], [[0, 2], 8]],
    [[[[1, 5], 9], [[5, 5], 1]], [[6, 1], [[9, 9], [3, 0]]]],
    [[6, 9], [[[9, 7], [3, 8]], [[2, 2], [8, 7]]]],
    [[[6, 2], [6, [8, 1]]], [[[5, 1], 1], 9]],
    [[[8, 5], [7, 9]], [[5, 2], [[1, 6], [8, 0]]]],
    [[[[5, 6], [9, 1]], 3], [[1, 7], [6, 5]]],
    [[[5, 7], 8], [9, [8, 7]]],
    [[[[0, 7], 4], [3, [3, 2]]], [[[0, 8], 5], [[8, 8], 1]]],
    [[[[8, 2], [6, 5]], [8, 6]], [1, [[1, 4], [3, 7]]]],
    [[7, [9, [0, 8]]], [[[7, 1], [5, 5]], [5, [1, 5]]]],
    [[3, 5], [[[7, 4], [1, 6]], [[6, 9], 4]]],
    [4, [9, 4]],
    [[3, [5, 5]], 9],
    [[0, 2], [[[9, 8], 9], 1]],
    [[[0, 3], [[9, 8], 0]], [[5, [5, 1]], [7, [6, 5]]]],
    [[[9, [0, 4]], [[0, 2], [4, 5]]], [3, [2, [9, 8]]]],
    [[[2, 6], [[3, 5], 5]], [0, [9, 7]]],
    [[[6, [0, 8]], 9], [8, 7]],
    [[[[8, 2], 3], [6, 6]], [6, [5, [7, 8]]]],
    [[[9, [3, 6]], [0, 6]], [9, [[4, 4], 5]]],
    [[[3, 2], 5], 2],
    [[[2, 1], [[6, 7], 1]], [[7, [7, 0]], 5]],
    [[[[1, 3], 1], [1, 5]], [[1, 3], [[5, 6], 1]]],
    [[[3, [9, 9]], [2, 6]], [[[3, 4], [5, 8]], [1, [1, 9]]]],
    [[[0, 2], [4, [5, 0]]], 9],
    [[9, 0], [7, [7, [9, 9]]]],
    [[[8, [4, 9]], [6, [4, 8]]], [[3, 6], [7, [9, 1]]]],
    [[7, [6, [5, 7]]], [[[0, 9], [9, 2]], 1]],
    [8, [6, [[9, 7], [5, 7]]]],
    [[[7, [6, 1]], [9, [4, 9]]], [[[2, 0], 7], [8, 7]]],
    [[5, [[4, 1], [2, 7]]], [0, [2, [5, 3]]]],
    [[[0, 8], [0, 5]], 2],
    [[[3, [9, 8]], 9], [1, 2]],
    [[[[7, 1], 9], 2], [[[4, 6], [0, 5]], [6, 8]]],
    [4, [[[5, 3], 3], [[1, 8], 3]]],
    [[[3, 0], [[5, 0], [3, 9]]], [6, [9, 2]]],
    [[[6, 6], [[8, 2], 6]], [[[0, 6], 8], [[3, 3], [1, 2]]]],
    [[6, [[5, 2], [2, 8]]], [1, 7]],
    [[4, 3], [[[1, 5], 0], [[1, 4], 6]]],
    [[7, [[2, 7], 7]], [[[4, 2], [4, 5]], [[5, 3], 3]]],
    [[0, 1], [[9, [1, 0]], 9]],
    [[[[4, 5], [1, 8]], [5, 1]], [[[4, 6], [6, 0]], [3, [1, 4]]]],
    [[[[7, 5], [0, 9]], [[1, 0], [2, 7]]], [[9, 4], [6, [7, 7]]]],
    [[[3, 1], 9], [[[7, 9], [4, 7]], [[4, 0], 2]]],
    [[[9, [2, 3]], [4, [3, 1]]], [[9, [1, 7]], [8, [9, 6]]]],
    [[[2, 2], 0], [[9, [0, 1]], [2, [2, 4]]]],
    [9, [[6, 9], [[2, 5], [1, 1]]]],
    [[2, 9], [[[8, 8], 9], [[4, 0], [8, 2]]]],
    [1, [[8, [7, 4]], 8]],
    [[[[0, 3], 2], [[0, 6], [3, 8]]], 6],
    [[[[3, 7], [1, 3]], [4, [0, 3]]], [[[7, 7], 1], [[2, 9], 1]]],
    [[[4, [5, 0]], [[1, 1], 6]], [[3, 4], [8, 5]]],
    [8, [2, [[0, 4], 9]]],
    [[[7, 1], 8], [[0, 2], [[8, 7], 6]]],
    [[[4, 0], 4], [[4, [2, 4]], [2, [1, 8]]]],
    [[[1, 5], [2, [5, 4]]], [2, 5]],
    [[[9, [6, 7]], [1, 6]], [[[0, 3], [8, 2]], [9, 7]]],
    [[[[4, 9], [4, 0]], [[6, 7], [5, 9]]], [[[7, 0], 1], [[0, 1], [4, 6]]]],
    [[[8, [2, 3]], [[1, 6], [2, 9]]], [[6, 9], [4, [2, 3]]]],
    [[[3, 1], 7], [[[6, 9], [9, 2]], [[3, 9], 2]]],
    [[9, [[8, 3], [0, 9]]], [[0, 8], 8]],
    [[[[4, 8], 4], [5, [3, 3]]], [8, [6, 4]]],
    [[[[0, 8], [1, 6]], [[9, 4], 3]], 2],
    [[[7, [8, 2]], [[9, 0], 1]], [[2, 7], [[3, 0], [8, 6]]]],
    [[4, [1, [4, 7]]], [[[2, 6], 4], [[5, 3], 9]]],
    [[0, 5], [8, [[1, 8], 0]]],
    [[[1, [3, 3]], 9], [2, 1]],
    [[[[5, 0], [2, 4]], [[1, 7], 0]], [[[5, 3], 4], 5]],
    [[[9, [1, 1]], 7], [9, [7, 1]]],
    [[[[5, 5], 9], 4], [2, 9]],
    [[5, [5, [6, 8]]], 9],
    [[[9, [1, 6]], [[1, 7], 7]], [[7, 3], [5, 4]]],
    [[3, [[7, 5], 4]], [[[9, 6], [7, 1]], 1]],
    [[[[8, 7], 1], 3], [[2, [3, 1]], [4, 8]]],
    [[[4, [5, 5]], 0], [[7, 8], [1, [5, 6]]]],
    [[[[1, 1], [9, 2]], [1, [3, 5]]], [[7, [2, 1]], [2, [7, 3]]]],
    [[[[3, 7], [0, 9]], 0], [[0, 8], [9, [2, 8]]]],
    [[[7, [3, 9]], [5, [1, 6]]], [[[8, 4], 7], [[5, 6], 3]]],
    [[[[0, 7], [4, 3]], [1, [0, 8]]], [[6, 9], 2]],
    [[[8, 9], [8, 3]], [[6, [0, 1]], [7, 8]]],
    [[[[6, 6], 9], [8, 0]], [[9, [7, 2]], [0, 3]]],
    [[[[8, 9], [0, 0]], [9, 3]], [3, [9, [8, 9]]]],
    [[[8, [8, 5]], [6, [9, 1]]], 8],
    [[6, [[1, 0], 8]], [4, 6]],
]

const input = puzzleInput;

const parseInput = (input) => {
    if (!Array.isArray(input)) return { value: input }

    const obj = { children: [] };
    for (let i = 0; i < 2; i++) {
        obj.children[i] = parseInput(input[i]);
        obj.children[i].parent = obj;
    }
    return obj;
}

const toArray = (obj) => {
    const a = [];
    for (let i = 0; i < 2; i++) {
        if (obj.children[i].value !== undefined)
            a[i] = obj.children[i].value;
        else a[i] = toArray(obj.children[i]);
    }
    return a;
}

function addToFirstOrLastValue(root, direction, value) {
    if (root.value !== undefined) {
        root.value += value;
        return root.value;
    }
    return addToFirstOrLastValue(root.children[direction], direction, value);
}

function addToFollowingValue(root, value) {
    while (root.parent) {
        if (root.parent.children[0] === root) {
            return addToFirstOrLastValue(root.parent.children[1], 0, value);
        }
        root = root.parent;
    }
    return undefined;
}
function addToPrecedingValue(root, value) {
    while (root.parent) {
        if (root.parent.children[1] === root) {
            return addToFirstOrLastValue(root.parent.children[0], 1, value);
        }
        root = root.parent;
    }
    return undefined;
}

function reduceWithExplosions(root, depth = 0) {
    if (depth === 4 && root.children) {
        if (root.children[0].value === undefined || root.children[1].value === undefined) {
            console.warn('illegal state');
        }
        addToPrecedingValue(root, root.children[0].value);
        addToFollowingValue(root, root.children[1].value);
        root.value = 0;
        root.children = undefined;
        return true;
    }
    if (root.children) {
        for (let i = 0; i < 2; i++) {
            if (reduceWithExplosions(root.children[i], depth + 1))
                return true;
        }
    }
    return false;
}

function reduceWithSplits(root) {
    if (root.value >= 10) {
        root.children = [{
            parent: root,
            value: Math.floor(root.value / 2)
        }, {
            parent: root,
            value: Math.ceil(root.value / 2)
        }];
        root.value = undefined;
        return true;
    }
    if (root.children) {
        for (let i = 0; i < 2; i++) {
            if (reduceWithSplits(root.children[i]))
                return true;
        }
    }
    return false;
}

function reduceTree(root) {
    while (reduceWithExplosions(root) || reduceWithSplits(root));
}

function calcMagnitude(root) {
    //3*left + 2*right
    if (root.value !== undefined) return root.value;
    return calcMagnitude(root.children[0]) * 3 + calcMagnitude(root.children[1]) * 2;
}

let largestMagnitude = -1;
for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
        if (i === j) continue;
        const firstRoot = parseInput(input[i]);
        const secondRoot = parseInput(input[j]);
        let summedRoot = {
            children: [
                firstRoot,
                secondRoot,
            ]
        }
        firstRoot.parent = summedRoot;
        secondRoot.parent = summedRoot;
        reduceTree(summedRoot);
        const mag = calcMagnitude(summedRoot);
        if (mag > largestMagnitude) largestMagnitude = mag;
    }
}
console.log(largestMagnitude);