const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

// 数组去重-使用set
function unique1(arr) {
    return [...new Set(arr)];
}
const uniquearr1 = unique1(arr);
console.log('unique1', uniquearr1);


// 数组去重-使用filter
function unique2(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
const uniquearr2 = unique2(arr);
console.log('unique2', uniquearr2);

// 数组去重-使用reduce
function unique3(arr) {
    return arr.reduce((acc, item) => {    // acc 是累加器，item 是当前元素
        if (!acc.includes(item)) {        // 如果累加器中不包含当前元素，则将当前元素添加到累加器中
            acc.push(item);
        }
        return acc;
    }, []);
}
const uniquearr3 = unique3(arr);
console.log('unique3', uniquearr3);