## 1) What is JSX, and why is it used?
- **JSX (JavaScript XML):** JavaScript এর একটি syntax extension যা React এ ব্যবহার করা হয়।  
- এটি JavaScript এর ভিতরে HTML-এর মতো কোড লেখার সুবিধা দেয়।  
- **কেন ব্যবহার করা হয়:** UI কোডকে সহজ, পরিষ্কার এবং পড়তে সুবিধাজনক করার জন্য।  
- **উদাহরণ:** `<h1>Hello World</h1>` JSX ব্যবহার করে লেখা যায়।

---

## 2) What is the difference between State and Props?
- **State:** একটি component এর নিজস্ব data যা পরিবর্তন করা যায়।  
- **Props:** Parent component থেকে Child component এ data পাঠানোর জন্য ব্যবহৃত হয়।  
- **State পরিবর্তনযোগ্য**, কিন্তু **Props read-only**।  
- **মূল পার্থক্য:** State component নিজে নিয়ন্ত্রণ করে, Props parent component নিয়ন্ত্রণ করে।

---

## 3) What is the useState hook, and how does it work?
- **useState:** React এর একটি Hook যা functional component এ state ব্যবহারের সুযোগ দেয়।  
- এটি component এর data সংরক্ষণ এবং আপডেট করার জন্য ব্যবহৃত হয়।  
- Syntax: `const [state, setState] = useState(initialValue)`  
- **setState ফাংশন ব্যবহার করে state আপডেট করা হয় এবং component পুনরায় render হয়।**

---

## 4) How can you share state between components in React?
- **Lifting State Up:** State কে parent component এ রেখে child component গুলোতে props দিয়ে পাঠানো।  
- **Context API:** যখন অনেক component এ একই data দরকার হয় তখন ব্যবহার করা হয়।  
- **State Management Library:** বড় application এ Redux, Zustand ইত্যাদি ব্যবহার করা হয়।  

---

## 5) How is event handling done in React?
- React এ event handling HTML এর মতো হলেও camelCase syntax ব্যবহার করা হয়।  
- Event এর সাথে JavaScript function ব্যবহার করা হয়।  
- **উদাহরণ:** `onClick`, `onChange`, `onSubmit` ইত্যাদি।  
- **মূল ধারণা:** Event trigger হলে নির্দিষ্ট function execute হয়।
