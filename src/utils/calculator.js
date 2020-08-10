const toArr = (sequence) => {
  let newSequence = sequence;
  const arr = [];

  while (newSequence.length > 0) {
    // 判斷小數點前是否有零
    if (newSequence[0] === '.') {
      let num = parseFloat(newSequence);
      arr.push(num);
      newSequence = newSequence.substring((num + '').length - 1);
    } else {
      let num = parseFloat(newSequence);
      arr.push(num);
      newSequence = newSequence.substring((num + '').length);
    }
    if (newSequence[0]) {
      arr.push(newSequence[0]);
      newSequence = newSequence.substring(1);
    }
  }
  return arr;
};

const signChangerFunc = (sequence) => {
  const arr = toArr(sequence);
  let result = '';

  arr.push(-parseFloat(arr.pop()));
  result = arr.reduce((acc, curVal) => {
    return acc + curVal;
  }, '');
  return result;
};

const equalFunc = (sequence) => {
  const arr = toArr(sequence);
  let result = 0;
  let newVal = 0;

  while (arr.includes('x') || arr.includes('÷')) {
    arr.forEach((item, idx) => {
      if (item === 'x') {
        newVal = arr[idx - 1] * arr[idx + 1];
        arr.splice(idx - 1, 3, newVal);
      } else if (item === '÷') {
        newVal = arr[idx - 1] / arr[idx + 1];
        arr.splice(idx - 1, 3, newVal);
      }
    });
  }
  while (arr.includes('+') || arr.includes('-')) {
    arr.forEach((item, idx) => {
      if (item === '+') {
        newVal = arr[idx - 1] + arr[idx + 1];
        arr.splice(idx - 1, 3, newVal);
      } else if (item === '-') {
        newVal = arr[idx - 1] - arr[idx + 1];
        arr.splice(idx - 1, 3, newVal);
      }
    });
  }

  result = parseFloat(arr[0].toFixed(12));
  return result;
};

export {signChangerFunc, equalFunc};
