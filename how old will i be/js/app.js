function  calculateAge(born, current) {
    if (born < current) {
        if (Math.abs(born - current) === 1) {
            return `You are ${Math.abs(born-current)} year old.`
        } else {
            return `You are ${Math.abs(born-current)} years old.`
        }
    } else if (born > current) {
        if (Math.abs(born - current) === 1) {
            return `You will be born in ${Math.abs(born-current)} year.`
        } else {
            return `You will be born in ${Math.abs(born-current)} years.`
        }
    } else {
        return "You were born this very year!"
    }
}

