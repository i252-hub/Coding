def main():
    print("Mail Slicer\n")

    mail = input("Enter your mail: ")
    (username, domain) = mail.split("@")
    (domain, extension) = domain.split(".")

    print("Username: ", username)
    print("Domain Name: ", domain)
    print("Extension: ", extension)

main()
