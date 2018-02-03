var scores = [85, 78, 92, 90, 98];

scores.reduce(function(previousValue, currentValue, currentIndex) {
    console.log(previousValue);
    if (currentIndex === (scores.length-1)) {
        return (previousValue + currentValue)/scores.length;
    }
    return previousValue + currentValue;
});

