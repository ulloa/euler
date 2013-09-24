## http://projecteuler.net/problem=3
## largest prime factor of the number 600851475143

PrimeFac <- function(number) {
    if (number > 1e15) stop ("number is too large")
    largest.factor <- c(0)
    if (number < 1e5) {
        while (largest.factor < number) {
            for (i in 2:number) {
                if (number %% i == 0) {
                    number <- number / i
                    largest.factor <- i
                }
            }
        }
        print(largest.factor)
    } else {
        max.factor <- number%/%sqrt(number)
        while (largest.factor < number) {
            for (i in 2:max.factor) {
                if (number %% i == 0) {
                    number <- number / i
                    largest.factor <- i
                    max.factor <- number
                }
            }
        }
        if (largest.factor == 0) {
            largest.factor <- number
        }
        print(largest.factor)
    }
}
PrimeFac(600851475143)
