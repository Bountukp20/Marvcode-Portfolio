# number_of_words = 0

# with open(r'HTML Coaching.txt','r') as file:

# 	data = file.read()

# 	lines = data.split()

# 	number_of_words += len(lines)

# print(number_of_words)

# number = 1
# print(str(number)+" is a number")
# print(type(number))

# fl = 20.5
# print(type(fl))

# fl = "hi"
# print(type(fl))

# fl = True
# print(type(fl))

# name = input("What is your name?: ")
# print("Hello "+name)
# count_words("The cake is done. It is a big cake!")
# --> {"cake":2, "big":1, "is":2, "the":1, "a":1, "it":1}

def read_file_content():
    # [assignment] Add your code here
	with open(r"HTML Coaching.txt", encoding='UTF8') as f:
		contents = f.read()
		print(contents)
		return "Hello World"

def count_words():
    # text = read_file_content("./story.txt")
    # [assignment] Add your code here
	number_of_words = 0

	with open(r'HTML Coaching.txt','r') as file:

		data = file.read()

		lines = data.split()

		number_of_words += len(lines)

		print(number_of_words, "words")

		return {"as": 10, "would": 20}