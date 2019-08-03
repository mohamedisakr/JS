def longestword(sentence):
	# sentence.append(' ')
	longest = 0
	curr = ""
	for i in range(0, len(sentence)):
		if sentence[i] != ' ':
			curr = curr + sentence[i]
		else:
			if len(curr) > longest:
				longest = len(curr)
			curr = ""
	return longest


sentence = "I am an intern at geeksforgeeks "
longest = longestword(sentence)    
print(longest)
