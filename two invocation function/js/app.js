function add(x) {
    return function sum(y) {
        return x + y;
    }
}

add(3)(4);