function showCount(count) {
    //if count is undefined or null show "unknown"

    return count ?? "unknown";

    //?? is the coalescing operator--it means a??b -- basically if a is true go with that otherwise b.
}

console.log(showCount())