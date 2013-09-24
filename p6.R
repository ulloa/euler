## http://projecteuler.net/problem=6
## difference between the sum of the squares and the square of the sums

SumSquareDiff <- function(limit) {
    suma <- 0
    for (i in 1:limit) {
        suma <- suma + i^2
    }
    square <- (sum(1:limit))^2
    sum.difference <- square - suma
    print(sum.difference)
}
SumSquareDiff(100)
