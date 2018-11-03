let _ = {
    clamp (number, lower, upper) {
      let lowerClampedValue = Math.max(number, lower)
      let clampedValue = Math.min(lowerClampedValue, upper)
      return clampedValue 
  },
    inRange (number, start, end) {
      
      if (typeof end === 'undefined'){
        end = start;
        start = 0;
      }
      return number >= Math.min(start, end) && number < Math.max(start, end);
      },
    
    words (string) {
      let words =  string.split(' ')
      return words
    },
    
    pad (string, length) {
      if (length < string.length) {
        return string
          } else {
          let startPaddingLenght = Math.floor((length -string.length)/2);
          let endPaddingLength = length - string.length -startPaddingLenght;
          let paddedString = ' '.repeat(startPaddingLenght) + string + ' '.repeat(endPaddingLength)
          return paddedString
        }
      },
    
    has (object, key) {
      return hasValue = (object[key] !== undefined);
   },
    invert(object) {
      let invertedObject = {};
      for (let key in object) {
        let originalValue = object[key];
        invertedObject[originalValue] = key;
      };
      return invertedObject;
    },
    findKey (object, predicate) {
      for (let key in object) {
        let value = object[key]; //Is value even needed as it's never called?
        let predicateReturnValue = predicate(object[key]);
        if (predicateReturnValue){
          return key;
        }
      }
      return undefined
    },
    drop (array, n){
      if(typeof n !== 'number'){
        n = 1;
      }
      return droppedArray = array.slice(n);
    },
    dropWhile (array, predicate){
      let dropNumber = array.findIndex(function(element, index){
        return !predicate(element, index, array);
      })
      let droppedArray = this.drop(array, dropNumber);
      return droppedArray;
    },
    chunk (array, size){
      if (typeof size === undefined){
        size = 1;
        }
      let arrayChunks = [];
      for(let i = 0; i < array.length; i += size){
        let arrayChunk = array.slice(i,i + size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
  }
  
  
  // Do not write or modify code below this line.
  module.exports = _;