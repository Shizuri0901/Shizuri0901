#Bài 4
import math
g = 9.8
h = float(input("Nhap độ cao "))
v = math.sqrt(2*9.8*h)
print(round(v,2))
#Bài 6
a = int(input())
b = int(input())
c = int(input())
P = a+b+c
print(round(P,2))
S = math.sqrt((P/2)*(P/2 - a)*(P/2 - b)*(P/2 - c))
print(round(S,2))