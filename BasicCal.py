def add(a,b):
    result = a + b
    print(str(a) , "+" , str(b) , "=" , str(result) )

def sub(a,b):
    result = a - b
    print(str(a), "-" , str(b) , "=" , str(result) )

def mul(a,b):
    result = a * b
    print(str(a) , "*" , str(b) , "=" , str(result) )

def div(a,b):
    result = a // b
    print(str(a) , "/" , str(b), "=" , str(result))

print("The Basic Calculator\n-----------------------")
question = input("A. Addition\nB. Subtraction\nC. Multiplication\nD. Division\n\n")

if question == "A" or question == "a":
        print("Addition\n")
        a= int(input("First Number: "))
        b=int(input("Second Number: "))
        add(a,b)

elif  question == "B" or question == "b":
        print("Subtraction\n")
        a= int(input("First Number: "))
        b=int(input("Second Number: "))
        sub(a,b)

elif  question == "C" or question == "c":
        print("Multiplication\n")
        a= int(input("First Number: "))
        b=int(input("Second Number: "))
        mul(a,b)
elif question == "D" or question == "d":
        print("Division\n")
        a= int(input("First Number: "))
        b=int(input("Second Number: "))
        div(a,b)

else: 
    print("Pick the choice in the box only.")
    
