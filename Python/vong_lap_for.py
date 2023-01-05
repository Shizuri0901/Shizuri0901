import math
#bài 1: Số nguyên tố
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
#bài 2: Số chính phương
s = 0
a = int(input("chon khoang "))
for k in range(1,a+1):
    if str(math.sqrt(k))[len(str(math.sqrt(k)))-1] == "0":
        print(k)
        s += 1
print(s)
#Bài 3 : số hoàn hảo
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
#Bài 4: Hình tam giác ngược
s = 0
a = int(input("Chon hang "))
for k in range(a,0,-1):
    print("* "*k)
#Bài 5: Hinh thoi
s = 0
a = float(input("Chon hang so le "))
for k in range(1,math.ceil(a/2)):
    print(" "*(math.ceil(a/2)-k),"* "*k)
for m in range(math.ceil(int(a)/2),0,-1):
    print(" "*(math.ceil(int(a)/2)-m),"* "*m)
#Bài 6: Hình trái tim
for k in range(1,3):
    if (k == 1):
        print(" "*2,"* *"," "*5,"* *")
    if (k == 2):
        print("  * * *  ","  * * *")
for m in range(9,0,-1):
    print(" "*(9-m),"* "*m)
a = int(input())
s = 0
i = 0
# for k in range(0,a+1):
#     s += k
# print(s)
while i <= a:
    s += i
    i += 1
print(s)