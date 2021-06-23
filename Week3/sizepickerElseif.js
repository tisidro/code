function trueOrFalse(wasThatTrue) {
    if (wasThatTrue) {
        return "yup";
    }
    return "nope";
}

console.log(trueOrFalse(false));

function sizePicker(num) {
    if (num < 5) {
        return "tiny"
    }
    else if (num < 10) {
        return "small"
    }

    else if (num < 15) {
        return "medium"
    }

    else if (num < 20) {
        return "large"
    }

    else {
        return "huge"
    }
}
console.log(sizePicker(17))