import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Github, ExternalLink, X, Calculator, Thermometer, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from './ui/dialog';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'STATIC AMAZON WEBSITE INTERFACE',
      description: 'A static clone of the Amazon website with responsive design, product listings, and a user-friendly interface.',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80',
      techs: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      github: 'https://github.com/K-Shivakumar07/Amazon.com-clone.git',
      liveDemo: 'http://127.0.0.1:5501/project1/index.html',
      icon: <ShoppingCart className="mr-2" size={20} />,
      demoCode: null
    },
    {
      title: 'TO-DO-LIST',
      description: 'A task management application with features to add, edit, delete, and mark tasks as complete.',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&w=800&q=80',
      techs: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
      github: 'https://github.com/K-Shivakumar07/To-do-list',
      liveDemo: 'https://shivakumar-to-do-list.netlify.app/',
      icon: null,
      demoCode: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>To-Do List App</title>
  <style>
    * { box-sizing: border-box; font-family: 'Arial', sans-serif; }
    body { background-color: #f5f5f5; margin: 0; padding: 20px; }
    .container { max-width: 500px; margin: 0 auto; background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    h1 { text-align: center; color: #333; }
    .input-group { display: flex; margin-bottom: 20px; }
    input { flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 4px 0 0 4px; font-size: 16px; }
    button { background: #6E59A5; color: white; border: none; padding: 10px 15px; cursor: pointer; border-radius: 0 4px 4px 0; }
    button:hover { background: #5D48A2; }
    ul { list-style-type: none; padding: 0; }
    li { padding: 10px; background: #f9f9f9; margin-bottom: 8px; border-radius: 4px; display: flex; justify-content: space-between; align-items: center; }
    .delete-btn { background: #ff6b6b; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; }
    .completed { text-decoration: line-through; color: #888; }
  </style>
</head>
<body>
  <div class="container">
    <h1>To-Do List</h1>
    <div class="input-group">
      <input type="text" id="taskInput" placeholder="Add a new task...">
      <button id="addBtn">Add</button>
    </div>
    <ul id="taskList"></ul>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const taskInput = document.getElementById('taskInput');
      const addBtn = document.getElementById('addBtn');
      const taskList = document.getElementById('taskList');
      
      // Load tasks from localStorage
      let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      
      // Render initial tasks
      renderTasks();
      
      // Add task event
      addBtn.addEventListener('click', addTask);
      taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addTask();
      });
      
      function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
          tasks.push({ text: taskText, completed: false });
          localStorage.setItem('tasks', JSON.stringify(tasks));
          taskInput.value = '';
          renderTasks();
        }
      }
      
      function renderTasks() {
        taskList.innerHTML = '';
        
        tasks.forEach((task, index) => {
          const li = document.createElement('li');
          li.className = task.completed ? 'completed' : '';
          
          const taskSpan = document.createElement('span');
          taskSpan.textContent = task.text;
          taskSpan.addEventListener('click', function() {
            toggleComplete(index);
          });
          
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Delete';
          deleteBtn.className = 'delete-btn';
          deleteBtn.addEventListener('click', function() {
            deleteTask(index);
          });
          
          li.appendChild(taskSpan);
          li.appendChild(deleteBtn);
          taskList.appendChild(li);
        });
      }
      
      function toggleComplete(index) {
        tasks[index].completed = !tasks[index].completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
      }
      
      function deleteTask(index) {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
      }
    });
  </script>
</body>
</html>
      `
    },
    {
      title: 'QUIZ GAME',
      description: 'An interactive quiz app with multiple-choice questions, timer, score tracking, and different categories.',
      image: 'https://images.unsplash.com/photo-1606326608690-4e0281b1e588?auto=format&fit=crop&w=800&q=80',
      techs: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
      github: 'https://github.com/K-Shivakumar07/Quiz-Game',
      icon: <Thermometer className="mr-2" size={20} />,
      demoCode: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quiz Game</title>
  <style>
    * { box-sizing: border-box; font-family: 'Arial', sans-serif; }
    body { background-color: #f0f2f5; margin: 0; padding: 20px; }
    .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 10px; padding: 20px; box-shadow: 0 2px 15px rgba(0,0,0,0.1); }
    h1 { text-align: center; color: #6E59A5; margin-bottom: 30px; }
    .quiz-header { display: flex; justify-content: space-between; margin-bottom: 20px; }
    .timer, .score { font-size: 18px; font-weight: bold; color: #333; }
    .question { font-size: 20px; margin-bottom: 20px; padding: 15px; background: #f9f9f9; border-radius: 8px; }
    .options { display: grid; gap: 10px; margin-bottom: 20px; }
    .option { padding: 12px 15px; background: #efefef; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; transition: all 0.3s; text-align: left; }
    .option:hover { background: #e0e0e0; }
    .option.correct { background: #9fe89f; color: #1e5b1e; }
    .option.incorrect { background: #ff9a9a; color: #651313; }
    .next-btn { background: #6E59A5; color: white; border: none; padding: 12px 20px; font-size: 16px; width: 100%; border-radius: 8px; cursor: pointer; display: none; }
    .next-btn:hover { background: #5D48A2; }
    .result { text-align: center; font-size: 22px; margin: 20px 0; display: none; }
    .restart-btn { background: #6E59A5; color: white; border: none; padding: 12px 20px; font-size: 16px; width: 100%; border-radius: 8px; cursor: pointer; display: none; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Quick Quiz</h1>
    <div class="quiz-header">
      <div class="timer">Time: <span id="time">60</span>s</div>
      <div class="score">Score: <span id="score">0</span></div>
    </div>
    <div id="quiz">
      <div id="question" class="question"></div>
      <div id="options" class="options"></div>
      <button id="next-btn" class="next-btn">Next Question</button>
    </div>
    <div id="result" class="result"></div>
    <button id="restart-btn" class="restart-btn">Play Again</button>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const quizData = [
        {
          question: "What does HTML stand for?",
          options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
          answer: 0
        },
        {
          question: "Which language runs in a web browser?",
          options: ["Java", "C", "Python", "JavaScript"],
          answer: 3
        },
        {
          question: "What does CSS stand for?",
          options: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Computer Style Sheets"],
          answer: 1
        },
        {
          question: "What year was JavaScript launched?",
          options: ["1996", "1995", "1994", "None of the above"],
          answer: 1
        },
        {
          question: "Which is not a JavaScript Framework?",
          options: ["React", "Angular", "Vue", "Java EE"],
          answer: 3
        }
      ];
      
      let currentQuestion = 0;
      let score = 0;
      let timeLeft = 60;
      let timer;
      let isQuizOver = false;
      
      const questionEl = document.getElementById('question');
      const optionsEl = document.getElementById('options');
      const nextBtn = document.getElementById('next-btn');
      const scoreEl = document.getElementById('score');
      const timeEl = document.getElementById('time');
      const resultEl = document.getElementById('result');
      const restartBtn = document.getElementById('restart-btn');
      
      function startQuiz() {
        currentQuestion = 0;
        score = 0;
        timeLeft = 60;
        isQuizOver = false;
        
        scoreEl.textContent = score;
        resultEl.style.display = 'none';
        restartBtn.style.display = 'none';
        nextBtn.style.display = 'none';
        
        timer = setInterval(updateTimer, 1000);
        
        loadQuestion();
      }
      
      function loadQuestion() {
        const current = quizData[currentQuestion];
        questionEl.textContent = current.question;
        
        optionsEl.innerHTML = '';
        current.options.forEach((option, index) => {
          const button = document.createElement('button');
          button.textContent = option;
          button.classList.add('option');
          button.addEventListener('click', () => selectOption(index));
          optionsEl.appendChild(button);
        });
      }
      
      function selectOption(selectedIndex) {
        if (isQuizOver) return;
        
        const correct = quizData[currentQuestion].answer;
        const options = optionsEl.querySelectorAll('.option');
        
        options.forEach((option, index) => {
          option.disabled = true;
          if (index === correct) {
            option.classList.add('correct');
          } else if (index === selectedIndex) {
            option.classList.add('incorrect');
          }
        });
        
        if (selectedIndex === correct) {
          score++;
          scoreEl.textContent = score;
        }
        
        nextBtn.style.display = 'block';
        
        if (currentQuestion >= quizData.length - 1) {
          nextBtn.textContent = 'Finish';
        }
      }
      
      function nextQuestion() {
        currentQuestion++;
        
        if (currentQuestion < quizData.length) {
          loadQuestion();
          nextBtn.style.display = 'none';
        } else {
          endQuiz();
        }
      }
      
      function updateTimer() {
        if (timeLeft > 0) {
          timeLeft--;
          timeEl.textContent = timeLeft;
        } else {
          endQuiz();
        }
      }
      
      function endQuiz() {
        clearInterval(timer);
        isQuizOver = true;
        
        const totalQuestions = quizData.length;
        const percentage = Math.round((score / totalQuestions) * 100);
        
        resultEl.innerHTML = \`
          <h2>Quiz Completed!</h2>
          <p>Your score: \${score} out of \${totalQuestions}</p>
          <p>Percentage: \${percentage}%</p>
        \`;
        
        resultEl.style.display = 'block';
        restartBtn.style.display = 'block';
        nextBtn.style.display = 'none';
        document.getElementById('quiz').style.display = 'none';
      }
      
      nextBtn.addEventListener('click', nextQuestion);
      restartBtn.addEventListener('click', function() {
        document.getElementById('quiz').style.display = 'block';
        startQuiz();
      });
      
      // Start the quiz
      startQuiz();
    });
  </script>
</body>
</html>
      `
    },
    {
      title: 'EXPENSE TRACKER',
      description: 'An application that helps users track and categorize their expenses, with data visualization and budget management features.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
      techs: ['JavaScript', 'HTML', 'CSS', 'LocalStorage', 'Chart.js'],
      github: 'https://github.com/K-Shivakumar07/Expense-Tracker',
      icon: <Calculator className="mr-2" size={20} />,
      demoCode: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Expense Tracker</title>
  <style>
    * { box-sizing: border-box; font-family: 'Arial', sans-serif; }
    body { background-color: #f5f5f5; margin: 0; padding: 20px; }
    .container { max-width: 800px; margin: 0 auto; background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    h1 { text-align: center; color: #6E59A5; margin-bottom: 20px; }
    .balance-section { text-align: center; margin-bottom: 30px; }
    .balance { font-size: 32px; margin: 10px 0; }
    .income-expense { display: flex; justify-content: space-around; margin: 20px 0; text-align: center; }
    .income, .expense { background: #f9f9f9; padding: 15px; border-radius: 8px; min-width: 150px; }
    .income h3 { color: #2ecc71; }
    .expense h3 { color: #e74c3c; }
    .form-group { margin-bottom: 15px; }
    label { display: block; margin-bottom: 8px; font-weight: bold; }
    input, select { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px; }
    button { background: #6E59A5; color: white; border: none; padding: 12px 20px; width: 100%; border-radius: 4px; cursor: pointer; font-size: 16px; }
    button:hover { background: #5D48A2; }
    .transaction-list { margin-top: 30px; }
    h2 { color: #333; border-bottom: 2px solid #f1f1f1; padding-bottom: 10px; }
    .transaction { display: flex; justify-content: space-between; padding: 10px; margin-bottom: 10px; background: #f9f9f9; border-radius: 4px; }
    .transaction.income { border-right: 5px solid #2ecc71; }
    .transaction.expense { border-right: 5px solid #e74c3c; }
    .delete-btn { background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; }
    .actions { display: flex; justify-content: space-between; gap: 10px; margin-bottom: 20px; }
    .actions button { flex: 1; }
    .income-btn { background-color: #2ecc71; }
    .income-btn:hover { background-color: #27ae60; }
    .expense-btn { background-color: #e74c3c; }
    .expense-btn:hover { background-color: #c0392b; }
    #income-form, #expense-form { display: none; }
    #income-form.active, #expense-form.active { display: block; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Expense Tracker</h1>
    
    <div class="balance-section">
      <h2>Your Balance</h2>
      <div id="balance" class="balance">$0.00</div>
      
      <div class="income-expense">
        <div class="income">
          <h3>Income</h3>
          <p id="income-total">$0.00</p>
        </div>
        <div class="expense">
          <h3>Expense</h3>
          <p id="expense-total">$0.00</p>
        </div>
      </div>
    </div>
    
    <div class="actions">
      <button id="show-income-btn" class="income-btn">Add Income</button>
      <button id="show-expense-btn" class="expense-btn">Add Expense</button>
    </div>
    
    <form id="income-form">
      <div class="form-group">
        <label for="income-description">Description</label>
        <input type="text" id="income-description" placeholder="Enter income description..." required>
      </div>
      
      <div class="form-group">
        <label for="income-amount">Amount</label>
        <input type="number" id="income-amount" placeholder="Enter amount..." step="0.01" min="0" required>
      </div>
      
      <div class="form-group">
        <label for="income-category">Category</label>
        <select id="income-category" required>
          <option value="">Select category</option>
          <option value="salary">Salary</option>
          <option value="freelance">Freelance</option>
          <option value="investments">Investments</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <button type="submit">Add Income</button>
    </form>
    
    <form id="expense-form">
      <div class="form-group">
        <label for="expense-description">Description</label>
        <input type="text" id="expense-description" placeholder="Enter expense description..." required>
      </div>
      
      <div class="form-group">
        <label for="expense-amount">Amount</label>
        <input type="number" id="expense-amount" placeholder="Enter amount..." step="0.01" min="0" required>
      </div>
      
      <div class="form-group">
        <label for="expense-category">Category</label>
        <select id="expense-category" required>
          <option value="">Select category</option>
          <option value="food">Food</option>
          <option value="transportation">Transportation</option>
          <option value="entertainment">Entertainment</option>
          <option value="utilities">Utilities</option>
          <option value="rent">Rent</option>
          <option value="other">Other</option>
        </select>
      </div>
      
      <button type="submit">Add Expense</button>
    </form>
    
    <div class="transaction-list">
      <h2>History</h2>
      <div id="transactions"></div>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const balanceEl = document.getElementById('balance');
      const incomeEl = document.getElementById('income-total');
      const expenseEl = document.getElementById('expense-total');
      const transactionsEl = document.getElementById('transactions');
      
      const showIncomeBtn = document.getElementById('show-income-btn');
      const showExpenseBtn = document.getElementById('show-expense-btn');
      const incomeForm = document.getElementById('income-form');
      const expenseForm = document.getElementById('expense-form');
      
      // Toggle forms
      showIncomeBtn.addEventListener('click', function() {
        incomeForm.classList.add('active');
        expenseForm.classList.remove('active');
      });
      
      showExpenseBtn.addEventListener('click', function() {
        expenseForm.classList.add('active');
        incomeForm.classList.remove('active');
      });
      
      // Get transactions from localStorage or initialize empty array
      let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
      
      // Initialize app
      init();
      
      // Event listeners
      incomeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTransaction(e, true);
      });
      
      expenseForm.addEventListener('submit', function(e) {
        e.preventDefault();
        addTransaction(e, false);
      });
      
      function init() {
        transactionsEl.innerHTML = '';
        
        // Display transactions in history
        transactions.forEach(addTransactionDOM);
        
        // Update balance, income and expense
        updateValues();
      }
      
      function addTransactionDOM(transaction) {
        // Create transaction DOM element
        const item = document.createElement('div');
        item.classList.add('transaction');
        item.classList.add(transaction.amount > 0 ? 'income' : 'expense');
        
        item.innerHTML = \`
          <span>\${transaction.description} (\${transaction.category})</span>
          <span>\${transaction.amount > 0 ? '+' : ''}\${formatAmount(transaction.amount)}</span>
          <button class="delete-btn" onclick="removeTransaction(\${transaction.id})">×</button>
        \`;
        
        transactionsEl.appendChild(item);
      }
      
      function formatAmount(amount) {
        return '$' + Math.abs(amount).toFixed(2);
      }
      
      function updateValues() {
        const amounts = transactions.map(transaction => transaction.amount);
        
        // Calculate total balance
        const total = amounts.reduce((acc, amount) => acc + amount, 0).toFixed(2);
        
        // Calculate income (sum of positive amounts)
        const income = amounts
          .filter(amount => amount > 0)
          .reduce((acc, amount) => acc + amount, 0)
          .toFixed(2);
        
        // Calculate expenses (sum of negative amounts)
        const expense = (amounts
          .filter(amount => amount < 0)
          .reduce((acc, amount) => acc + amount, 0) * -1)
          .toFixed(2);
        
        // Update DOM
        balanceEl.textContent = '$' + total;
        incomeEl.textContent = '$' + income;
        expenseEl.textContent = '$' + expense;
      }
      
      function addTransaction(e, isIncome) {
        const form = isIncome ? incomeForm : expenseForm;
        const descriptionInput = form.querySelector('[id$="description"]');
        const amountInput = form.querySelector('[id$="amount"]');
        const categoryInput = form.querySelector('[id$="category"]');
        
        // Validate form
        if (descriptionInput.value.trim() === '' || amountInput.value.trim() === '' || categoryInput.value === '') {
          alert('Please fill in all fields');
          return;
        }
        
        // Create transaction object
        const transaction = {
          id: generateID(),
          description: descriptionInput.value,
          amount: isIncome ? +amountInput.value : -amountInput.value, // Positive for income, negative for expense
          category: categoryInput.value,
          date: new Date()
        };
        
        // Add transaction to array
        transactions.push(transaction);
        
        // Save to localStorage
        updateLocalStorage();
        
        // Add to DOM
        addTransactionDOM(transaction);
        
        // Update values
        updateValues();
        
        // Clear form
        descriptionInput.value = '';
        amountInput.value = '';
        categoryInput.value = '';
        
        // Hide the active form
        form.classList.remove('active');
      }
      
      function generateID() {
        return Math.floor(Math.random() * 1000000000);
      }
      
      // Add remove transaction function to window so onclick can access it
      window.removeTransaction = function(id) {
        // Remove transaction from array
        transactions = transactions.filter(transaction => transaction.id !== id);
        
        // Update localStorage
        updateLocalStorage();
        
        // Reinitialize app
        init();
      };
      
      function updateLocalStorage() {
        localStorage.setItem('transactions', JSON.stringify(transactions));
      }
    });
  </script>
</body>
</html>
      `
    },
    {
      title: 'TEMPERATURE CONVERTER',
      description: 'A tool that allows users to convert temperatures between Celsius, Fahrenheit, and Kelvin with a clean interface.',
      image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80',
      techs: ['JavaScript', 'HTML', 'CSS', 'DOM Manipulation'],
      github: 'https://github.com/K-Shivakumar07/Temperature-Converter',
      icon: <Thermometer className="mr-2" size={20} />,
      demoCode: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Temperature Converter</title>
  <style>
    * { box-sizing: border-box; font-family: 'Arial', sans-serif; }
    body { 
      background: linear-gradient(135deg, #6E59A5 0%, #9fe6ff 100%);
      margin: 0; 
      padding: 0; 
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .container { 
      background: white; 
      border-radius: 10px; 
      padding: 30px; 
      box-shadow: 0 10px 20px rgba(0,0,0,0.1);
      width: 90%;
      max-width: 500px;
    }
    h1 { 
      text-align: center; 
      color: #6E59A5; 
      margin-top: 0; 
      margin-bottom: 30px; 
    }
    .input-group { 
      display: flex; 
      flex-direction: column; 
      margin-bottom: 25px; 
    }
    label { 
      font-weight: bold; 
      margin-bottom: 10px; 
      color: #333; 
      display: flex;
      align-items: center;
    }
    label .icon {
      margin-right: 8px;
      font-size: 20px;
    }
    input, select { 
      padding: 12px 15px; 
      border: 1px solid #ddd; 
      border-radius: 5px; 
      font-size: 16px; 
      transition: border 0.3s; 
    }
    input:focus, select:focus { 
      border-color: #6E59A5; 
      outline: none; 
    }
    button { 
      background: #6E59A5; 
      color: white; 
      border: none; 
      padding: 15px 0; 
      font-size: 16px; 
      border-radius: 5px; 
      cursor: pointer; 
      transition: background 0.3s; 
      margin-top: 10px;
      width: 100%;
    }
    button:hover { 
      background: #5D48A2; 
    }
    .result { 
      background: #f8f9fa; 
      padding: 20px; 
      border-radius: 5px; 
      margin-top: 20px; 
      text-align: center; 
      font-size: 18px; 
      display: none;
    }
    .result.visible {
      display: block;
    }
    .formula {
      font-size: 14px;
      color: #6c757d;
      margin-top: 10px;
      font-style: italic;
    }
    .temp-scales {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    .temp-scale {
      text-align: center;
      flex: 1;
      padding: 10px;
      cursor: pointer;
      border-radius: 5px;
      transition: all 0.3s;
    }
    .temp-scale:hover {
      background: #f0f0f0;
    }
    .temp-scale.active {
      background: #e9ecef;
      font-weight: bold;
    }
    .temp-value {
      font-weight: bold;
      font-size: 24px;
      color: #6E59A5;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Temperature Converter</h1>
    
    <div class="temp-scales">
      <div class="temp-scale active" data-scale="celsius">
        <span>°C</span>
      </div>
      <div class="temp-scale" data-scale="fahrenheit">
        <span>°F</span>
      </div>
      <div class="temp-scale" data-scale="kelvin">
        <span>K</span>
      </div>
    </div>
    
    <div class="input-group">
      <label for="temperature">
        <span class="icon">🌡️</span> Enter Temperature
      </label>
      <input 
        type="number" 
        id="temperature" 
        placeholder="Enter temperature value..."
        step="0.01"
      >
    </div>
    
    <div class="input-group">
      <label for="conversion">
        <span class="icon">🔄</span> Convert To
      </label>
      <select id="conversion">
        <option value="fahrenheit">Fahrenheit (°F)</option>
        <option value="celsius">Celsius (°C)</option>
        <option value="kelvin">Kelvin (K)</option>
      </select>
    </div>
    
    <button id="convert-btn">Convert</button>
    
    <div id="result" class="result">
      <div id="result-value" class="temp-value">0</div>
      <div id="formula" class="formula"></div>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const temperatureInput = document.getElementById('temperature');
      const conversionSelect = document.getElementById('conversion');
      const convertBtn = document.getElementById('convert-btn');
      const resultDiv = document.getElementById('result');
      const resultValue = document.getElementById('result-value');
      const formulaText = document.getElementById('formula');
      const tempScales = document.querySelectorAll('.temp-scale');
      
      let currentScale = 'celsius';
      
      // Handle temperature scale selection
      tempScales.forEach(scale => {
        scale.addEventListener('click', function() {
          // Remove active class from all scales
          tempScales.forEach(s => s.classList.remove('active'));
          
          // Add active class to clicked scale
          this.classList.add('active');
          
          // Set current scale
          currentScale = this.dataset.scale;
          
          // Update conversion options
          updateConversionOptions();
        });
      });
      
      function updateConversionOptions() {
        // Clear existing options
        conversionSelect.innerHTML = '';
        
        // Add new options based on current scale
        if (currentScale === 'celsius') {
          addOption('fahrenheit', 'Fahrenheit (°F)');
          addOption('kelvin', 'Kelvin (K)');
        } else if (currentScale === 'fahrenheit') {
          addOption('celsius', 'Celsius (°C)');
          addOption('kelvin', 'Kelvin (K)');
        } else if (currentScale === 'kelvin') {
          addOption('celsius', 'Celsius (°C)');
          addOption('fahrenheit', 'Fahrenheit (°F)');
        }
      }
      
      function addOption(value, text) {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = text;
        conversionSelect.appendChild(option);
      }
      
      // Initialize conversion options
      updateConversionOptions();
      
      convertBtn.addEventListener('click', convertTemperature);
      
      function convertTemperature() {
        // Get input value
        const temperature = parseFloat(temperatureInput.value);
        
        // Validate input
        if (isNaN(temperature)) {
          alert('Please enter a valid number');
          return;
        }
        
        // Get target scale
        const targetScale = conversionSelect.value;
        
        // Convert temperature
        let result, formula;
        
        if (currentScale === 'celsius' && targetScale === 'fahrenheit') {
          result = (temperature * 9/5) + 32;
          formula = '°F = (°C × 9/5) + 32';
        } else if (currentScale === 'celsius' && targetScale === 'kelvin') {
          result = temperature + 273.15;
          formula = 'K = °C + 273.15';
        } else if (currentScale === 'fahrenheit' && targetScale === 'celsius') {
          result = (temperature - 32) * 5/9;
          formula = '°C = (°F - 32) × 5/9';
        } else if (currentScale === 'fahrenheit' && targetScale === 'kelvin') {
          result = (temperature - 32) * 5/9 + 273.15;
          formula = 'K = (°F - 32) × 5/9 + 273.15';
        } else if (currentScale === 'kelvin' && targetScale === 'celsius') {
          result = temperature - 273.15;
          formula = '°C = K - 273.15';
        } else if (currentScale === 'kelvin' && targetScale === 'fahrenheit') {
          result = (temperature - 273.15) * 9/5 + 32;
          formula = '°F = (K - 273.15) × 9/5 + 32';
        }
        
        // Display result
        resultValue.textContent = result.toFixed(2) + getSymbol(targetScale);
        formulaText.textContent = formula;
        resultDiv.classList.add('visible');
      }
      
      function getSymbol(scale) {
        if (scale === 'celsius') return ' °C';
        if (scale === 'fahrenheit') return ' °F';
        if (scale === 'kelvin') return ' K';
        return '';
      }
    });
  </script>
</body>
</html>
      `
    },
    {
      title: 'CALCULATOR',
      description: 'A fully functional calculator web application that can perform basic arithmetic operations.',
      image: 'https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=800&q=80',
      techs: ['JavaScript', 'HTML', 'CSS', 'Math Operations'],
      github: 'https://github.com/K-Shivakumar07/Calculator',
      icon: <Calculator className="mr-2" size={20} />,
      demoCode: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: 'Arial', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background-color: #f5f5f5;
    }
    .calculator {
      background-color: #222;
      border-radius: 10px;
      width: 320px;
      box-shadow: 0 10px 20px rgba(0,0,0,0.3);
      overflow: hidden;
    }
    .display {
      background-color: #333;
      color: white;
      text-align: right;
      padding: 20px;
      font-size: 2.5rem;
      font-weight: 300;
      height: 100px;
      overflow: hidden;
      position: relative;
    }
    .previous-operand {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.2rem;
      position: absolute;
      top: 10px;
      right: 20px;
    }
    .current-operand {
      position: absolute;
      bottom: 10px;
      right: 20px;
      font-size: 2.5rem;
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1px;
      background-color: #444;
    }
    button {
      border: none;
      background-color: #555;
      color: white;
      font-size: 1.5rem;
      padding: 20px;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    button:hover {
      background-color: #666;
    }
    .span-two {
      grid-column: span 2;
    }
    .operator {
      background-color: #6E59A5;
    }
    .operator:hover {
      background-color: #5D48A2;
    }
    .equals {
      background-color: #e91e63;
    }
    .equals:hover {
      background-color: #c2185b;
    }
    .clear, .delete {
      background-color: #ff9800;
    }
    .clear:hover, .delete:hover {
      background-color: #f57c00;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <div class="display">
      <div class="previous-operand" id="previous-operand"></div>
      <div class="current-operand" id="current-operand">0</div>
    </div>
    <div class="buttons">
      <button class="clear span-two" data-action="clear">AC</button>
      <button class="delete" data-action="delete">DEL</button>
      <button class="operator" data-operation="÷">÷</button>
      <button data-number>7</button>
      <button data-number>8</button>
      <button data-number>9</button>
      <button class="operator" data-operation="×">×</button>
      <button data-number>4</button>
      <button data-number>5</button>
      <button data-number>6</button>
      <button class="operator" data-operation="-">-</button>
      <button data-number>1</button>
      <button data-number>2</button>
      <button data-number>3</button>
      <button class="operator" data-operation="+">+</button>
      <button data-number>0</button>
      <button data-number>.</button>
      <button class="equals span-two" data-action="calculate">=</button>
    </div>
  </div>

  <script>
    document.addEventListener('DOMContentLoaded', function() {
      const previousOperandElement = document.getElementById('previous-operand');
      const currentOperandElement = document.getElementById('current-operand');
      const numberButtons = document.querySelectorAll('[data-number]');
      const operationButtons = document.querySelectorAll('[data-operation]');
      const equalsButton = document.querySelector('[data-action="calculate"]');
      const deleteButton = document.querySelector('[data-action="delete"]');
      const clearButton = document.querySelector('[data-action="clear"]');
      
      let currentOperand = '0';
      let previousOperand = '';
      let operation = undefined;
      let resetScreen = false;
      
      // Functions
      function updateDisplay() {
        currentOperandElement.innerText = formatDisplayNumber(currentOperand);
        
        if (operation != null) {
          previousOperandElement.innerText = \`\${formatDisplayNumber(previousOperand)} \${operation}\`;
        } else {
          previousOperandElement.innerText = '';
        }
      }
      
      function formatDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        
        let integerDisplay;
        
        if (isNaN(integerDigits)) {
          integerDisplay = '';
        } else {
          integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0
          });
        }
        
        if (decimalDigits != null) {
          return \`\${integerDisplay}.\${decimalDigits}\`;
        } else {
          return integerDisplay;
        }
      }
      
      function appendNumber(number) {
        if (resetScreen) {
          currentOperand = '';
          resetScreen = false;
        }
        
        if (number === '.' && currentOperand.includes('.')) return;
        
        // Replace 0 with number unless it's a decimal point
        if (currentOperand === '0' && number !== '.') {
          currentOperand = number;
        } else {
          currentOperand += number;
        }
      }
      
      function chooseOperation(op) {
        if (currentOperand === '' || currentOperand === '0') return;
        
        if (previousOperand !== '') {
          calculate();
        }
        
        operation = op;
        previousOperand = currentOperand;
        currentOperand = '0';
      }
      
      function calculate() {
        let computation;
        const prev = parseFloat(previousOperand);
        const current = parseFloat(currentOperand);
        
        if (isNaN(prev) || isNaN(current)) return;
        
        switch (operation) {
          case '+':
            computation = prev + current;
            break;
          case '-':
            computation = prev - current;
            break;
          case '×':
            computation = prev * current;
            break;
          case '÷':
            if (current === 0) {
              currentOperand = 'Error';
              previousOperand = '';
              operation = undefined;
              updateDisplay();
              return;
            }
            computation = prev / current;
            break;
          default:
            return;
        }
        
        currentOperand = computation.toString();
        operation = undefined;
        previousOperand = '';
        resetScreen = true;
      }
      
      function deleteNumber() {
        if (currentOperand === '0' || resetScreen) return;
        
        if (currentOperand.length === 1) {
          currentOperand = '0';
        } else {
          currentOperand = currentOperand.slice(0, -1);
        }
      }
      
      function clear() {
        currentOperand = '0';
        previousOperand = '';
        operation = undefined;
      }
      
      // Event Listeners
      numberButtons.forEach(button => {
        button.addEventListener('click', () => {
          appendNumber(button.innerText);
          updateDisplay();
        });
      });
      
      operationButtons.forEach(button => {
        button.addEventListener('click', () => {
          chooseOperation(button.innerText);
          updateDisplay();
        });
      });
      
      equalsButton.addEventListener('click', () => {
        calculate();
        updateDisplay();
      });
      
      clearButton.addEventListener('click', () => {
        clear();
        updateDisplay();
      });
      
      deleteButton.addEventListener('click', () => {
        deleteNumber();
        updateDisplay();
      });
      
      // Keyboard support
      document.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9 || e.key === '.') {
          appendNumber(e.key);
          updateDisplay();
        }
        
        if (e.key === '+' || e.key === '-') {
          chooseOperation(e.key);
          updateDisplay();
        }
        
        if (e.key === '*') {
          chooseOperation('×');
          updateDisplay();
        }
        
        if (e.key === '/') {
          e.preventDefault();
          chooseOperation('÷');
          updateDisplay();
        }
        
        if (e.key === 'Enter' || e.key === '=') {
          e.preventDefault();
          calculate();
          updateDisplay();
        }
        
        if (e.key === 'Backspace') {
          deleteNumber();
          updateDisplay();
        }
        
        if (e.key === 'Escape') {
          clear();
          updateDisplay();
        }
      });
      
      // Initialize display
      updateDisplay();
    });
  </script>
</body>
</html>
      `
    }
  ];

  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="section-container">
        <h2 className="section-title mb-12">Recent Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover overflow-hidden border border-gray-200">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  {project.icon && project.icon}
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-tech-softGray text-tech-purple">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github size={16} className="mr-2" />
                    Code
                  </a>
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="bg-tech-purple hover:bg-tech-accent">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[90vw] h-[90vh] p-0 bg-white">
                    <div className="flex h-full flex-col">
                      <DialogHeader className="p-4 border-b">
                        <div className="flex items-center justify-between">
                          <DialogTitle className="flex items-center">
                            {project.icon && project.icon}
                            {project.title}
                          </DialogTitle>
                          <DialogClose className="rounded-full p-1 hover:bg-gray-200">
                            <X size={20} />
                          </DialogClose>
                        </div>
                      </DialogHeader>
                      <div className="flex-1 overflow-hidden">
                        {project.liveDemo ? (
                          <iframe
                            src={project.liveDemo}
                            title={project.title}
                            className="w-full h-full border-none"
                            sandbox="allow-scripts allow-forms allow-same-origin"
                          ></iframe>
                        ) : (
                          <iframe
                            srcDoc={project.demoCode}
                            title={project.title}
                            className="w-full h-full border-none"
                            sandbox="allow-scripts allow-forms"
                          ></iframe>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
