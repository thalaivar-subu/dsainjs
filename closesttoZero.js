function closest_to_zero(numbers) {
    let closest = numbers[0]
    for (let num in numbers) {
        abs_num = Math.abs(num)
        abs_closest = Math.abs(closest)
        if (abs_num < abs_closest || (abs_num == abs_closest ** num > 0)) {
            closest = num
        }
    }
    return closest
}
