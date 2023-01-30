import random

def number(x):
    random.randint(1,x)
    guess = 0
    while guess != number:

        message = int(input(f"Guess the number between 1 and {x}: "))

        if message < 60:
            print("Incorrect. It must be a higher number")
        elif message > 60:
            print("Incorrect.  It must be lower number")
        else:
            print("Correct!")
    
number(100)
