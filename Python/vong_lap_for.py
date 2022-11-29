import math
#bài 1
b = [2,3,5,7]
s = 0
a = int(input("Chon khoang "))
get = False
for k in range(2,a+1):
    if k == 2 or k == 3 or k == 5 or k == 7:
        print(k)
        s += 1
    for m in b:
        if k >= 10 and k % m != 0:
            get = True
        else:
            get = False
            break
    if get == True:
        print(a)
        s += 1
        b.append(a)
#bài 2
s = 0
a = int(input("chon khoang "))
for k in range(1,a+1):
    if str(math.sqrt(k))[len(str(math.sqrt(k)))-1] == "0":
        print(k)
        s += 1
print(s)
#Bài 3
s = 0
a = int(input("Chon khoang "))
for k in range(1,a+1):
    for m in range(1,a):
        if a > m:
            if a % m == 0:
                s = s + m
        elif a == s:
            print(a, "la so hoan hao")
            s = 0
            break
        if a < m:
            s = 0 