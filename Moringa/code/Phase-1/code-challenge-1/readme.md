 
 # Challenge 1: Student Grade Generator

This Node.js program prompts the user to enter a student's marks, validates the input, and then outputs the corresponding grade based on predefined grade boundaries.

## How to Run

1. Clone this repository to your local machine or create a file for the code.
2. Open a terminal and navigate to the directory where the file is saved.
3. Run the code using Node.js
4.You will be prompted to enter a student's marks (an integer between 0 and 100).
  Based on the input, the program will output the student's grade.

Grade Boundaries
   A: 80 - 100
   B: 60 - 79
   C: 50 - 59
   D: 40 - 49
   E: 0 - 39

Notes
- The program will validate the marks input. If the input is not between 0 and 100, an error message will be shown.
- The program uses the readline module to interact with the user via the command line.


# Challenge 2: Speed Detector
- This is a basic Node.js script that checks a driver's speed and calculates demerit points if the speed exceeds the limit. If the driver accumulates too many points, the       program will indicate that their license is suspended.

## How it works

- The script asks the user to input their speed.
- It compares the entered speed with a speed limit of 70 km/h.
- If the speed is below or equal to the speed limit, it prints "Ok".
- If the speed exceeds the limit, the program calculates the demerit points (1 point for every 5 km/h over the limit).
- If the driver gets more than 12 demerit points, the program will print "License suspended".
- Otherwise, it will display the number of demerit points.
## Requirements

Node.js installed on your machine.
## How to run
- Copy the code into a file, for example, speedChecker.js.
- Open a terminal and navigate to the directory containing the file.
- Run the script using node speedChecker.js.
- Enter the speed whenever prompted and see the results

  # Challenge 3: Net Salary Calculator
  - This Node.js application calculates the net salary of an employee based on their basic salary, benefits, and relevant deductions. The deductions include:

PAYE 
NHIF 
NSSF 
// Overview

Requirements:
// How to Use

Calculation Breakdown
// Overview
This script prompts the user to enter their basic salary and benefits. Based on these inputs, the following calculations are performed:

- Gross Salary = Basic Salary + Benefits
- PAYE tax based on the progressive tax brackets.
- NHIF contribution based on the gross salary.
- NSSF contribution calculated as 6% of the basic salary.
- Finally, the net salary is calculated as:

Net Salary = Gross Salary - (PAYE + NHIF + NSSF)

The script outputs a breakdown of the calculations, including the basic salary, benefits, gross salary, deductions (PAYE, NHIF, and NSSF), and the net salary.

Requirements
Node.js (>= 12.0.0)
NPM (Node Package Manager) for running the script.
How to Use
Clone the repository or download the script.
Ensure that Node.js is installed on your machine. If not, download and install it from the official Node.js website.
Open a terminal or command prompt.
