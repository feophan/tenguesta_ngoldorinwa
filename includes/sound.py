import re

l_v = ['aa','ee','ii','oo','uu']
s_v = ['a','e','i','o','u']

word = input("Enter the word:") 

#001 aspirates became voiceless stop before [s]

word_next = re.sub('([p,t,k])h(s)','\g<1>\g<2>',word)
if word_next != word: print("rule 001 applied")

#002 aspirates became voiceless stops after [s], [h]
word_prev = word_next
word_next = re.sub('([s,h])([p,t,k])h','\g<1>\g<2>',word_prev)
if word_next != word_prev: print("rule 002 applied")

#003 aspiration moved to end of group of stops
word_prev = word_next
word_next = re.sub('([p,t,k])h([p,t,k])h?','\g<1>\g<2>h',word_prev)
if word_next != word_prev: print("rule 003 applied")

#004 [bm], [dn] became [mb], [nd]
word_prev = word_next
word_next = re.sub('(b)(m)','\g<2>\g<1>',word_prev)
if word_next != word_prev: print("rule 004 applied")
word_prev = word_next
word_next = re.sub('(d)(n)','\g<2>\g<1>',word_prev)
if word_next != word_prev: print("rule 004 applied")

#005 final [j], [w] vanished after long vowels in monosyllables
match = re.compile(r'^(\wh?'+'|'.join(l_v)+r')[j|w]$')
word_prev = word_next
word_next = re.sub(match, r'\g<1>',word_prev)
if word_next != word_prev: print("rule 005 applied")

#006 final [j], [w] became [i], [u]
word_prev = word_next
word_next = re.sub('(j)$','i',word_prev)
if word_next != word_prev: print("rule 006 applied")
word_prev = word_next
word_next = re.sub('(w)$','u',word_prev)
if word_next != word_prev: print("rule 006 applied")

#007 final [l] became [r], final [m] became [n]
word_prev = word_next
word_next = re.sub('l$','r',word_prev)
if word_next != word_prev: print("rule 007 applied")
word_prev = word_next
word_next = re.sub('m$','n',word_prev)
if word_next != word_prev: print("rule 007 applied")

#008 [hs] became [ss]
word_prev = word_next
word_next = re.sub('hs','ss',word_prev)
if word_next != word_prev: print("rule 007 applied")



print(word_next)
