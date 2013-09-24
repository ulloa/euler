## http://projecteuler.net/problem=2
## sum of even valued terms, up to 4mil, in Fibonacci sequence beg 1, 2, 3, 5

maximum <- 4000000
odd1 <- 1
odd2 <- 1
even <- 2
suma <- 0
while (even  < maximum) {
    suma <- even + suma
    odd1 <- odd2 + even
    odd2 <- even + odd1
    even <- odd1 + odd2
}    
print(suma)

otherfib <- function(a, b, max) {
    out <- numeric(0)
    while (a <= max && b <= max) {
        out <- c(out, a, b)
        a <- a + b
        b <- b + a
    }
    now <- c()
    for (i in out) {
        if ((i %% 2)  == 0) {
            now <- append(now, i)
        }
    }
    print(sum(now))
}
otherfib(1, 2, 4000000)
