const ENCODING = '0123456789ABCDEFGHJKMNPQRSTVWXYZ'
const TIME_LEN = 10
const RANDOM_LEN = 16

export function encodeTime(time, len) {
    let str = ''

    for (let i = len - 1; i >= 0; i--) {
        str = ENCODING[time % 32] + str
        time = Math.floor(time / 32)
    }

    return str
}

function encodeRandom(len) {
    let str = ''

    for (let i = 0; i < len; i++) {
        const random = Math.floor(Math.random() * 32)
        str += ENCODING[random]
    }

    return str
}

export function generateUlid() {
    const now = Date.now()

    const timePart = encodeTime(now, TIME_LEN)
    const randomPart = encodeRandom(RANDOM_LEN)

    return timePart + randomPart
}