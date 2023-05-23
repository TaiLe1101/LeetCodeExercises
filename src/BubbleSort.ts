function bubbleSort(numbers: number[]) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        let temp = numbers[j];
        numbers[j] = numbers[i];
        numbers[i] = temp;
      }
    }
  }

  return numbers;
}

console.log('bubbleSort([1,5,2,3,7,2,9]) ->', bubbleSort([1, 5, 2, 3, 7, 4, 9])); //
