# Print Pascal's Triangle in Python
from math import factorial

# input n
n = int(input("nhap so dong"))
for i in range(n):
	for j in range(n-i+1):
		# thụt dòng
		print(end=" ")
	for j in range(i+1):
		# nCr = n!/((n-r)!*r!): công thức tính tổ hợp
		print(factorial(i)//(factorial(j)*factorial(i-j)), end=" ")
        # factorial: giai thừa
	# xuống dòng
	print()
