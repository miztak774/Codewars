def hotpo(n):
    count = 0
    while n!=1:
        if n%2==1:
            n = 3*n+1
        else:
            n = n//2
        count += 1
    return count
