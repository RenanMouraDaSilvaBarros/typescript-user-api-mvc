import { CustomError } from "./src/helper/error"

try {
    throw new CustomError('odfjop', 400)
} catch (error) {
    console.log((error as Error).message)
}

console.log('execultou')