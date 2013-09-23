## http://projecteuler.net/problem=1
## sum multiples of 3 or 5 below 1000.

mult35 <- function() {
    x <- 0
    for (i in 1:999) {
        if (i %% 3 == 0 | i %% 5 == 0) {
            x <- x + i
        }
    }
    print(x)
}
mult35()
