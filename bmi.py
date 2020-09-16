import math

name = None
height = None
weight = None
bodyMassIndex = None

def text_prompt(msg):
  try:
    return raw_input(msg)
  except NameError:
    return input(msg)


name = text_prompt('Please enter your name: ')
height = float(text_prompt('Please enter your height in meters (e.g. 1.8) '))
weight = float(text_prompt('Please enter your weight in kilograms '))
bodyMassIndex = math.ceil(weight / (height * height))
print(''.join([str(x) for x in ['Hi,', name, '! Your body mass index is ', bodyMassIndex]]))
