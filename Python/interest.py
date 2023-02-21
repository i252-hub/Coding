#collect loan, apr, years

def main():

    print("The monthly payment for this loan\n")

    loan = float(input("Enter Amount Loan: "))
    apr = float(input("Enter Annnual Interest Rate: "))
    yrs = int(input("Amount of Years: "))

    monthly_interest= apr/1200
    amount_per_month = yrs * 12
    total = loan * monthly_interest / (1-(1+ monthly_interest)** (-amount_per_month))

    print("Monthly Loan Payment: " + str(round(total, 2)))

main()
