# Zeotap_Project_2

# CDP Support Agent Chatbot  

## Objective  
This project implements a *Support Agent Chatbot* designed to assist users with "how-to" questions related to four Customer Data Platforms (CDPs): *Segment, **mParticle, **Lytics, and **Zeotap*. The chatbot retrieves relevant information from both basic and advanced documentation to guide users effectively.  

---

## Features  

### Core Functionalities  
1. *Answer "How-to" Questions*  
   - Provides accurate responses to user queries related to tasks or features within Segment, mParticle, Lytics, and Zeotap.  
   - Handles questions like:  
     - "How do I set up a new source in Segment?"  
     - "How can I create a user profile in mParticle?"  

2. *Extract Information from Documentation*  
   - Dynamically retrieves relevant information from both basic and advanced documentation stored in JSON files.  
   - Includes a comparisons.json file for cross-CDP feature comparisons.  

3. *Handle Variations in Questions*  
   - Handles different phrasing and size variations of questions.  
   - Filters irrelevant queries (e.g., "What's the weather today?").  

### Bonus Features  
1. *Cross-CDP Comparisons*  
   - Compares functionalities across the four CDPs.  
   - Example question: "How does Segment's audience creation process compare to Lytics'?"  

2. *Advanced "How-to" Questions*  
   - Answers complex queries using advanced documentation files located in docs/advanced_docs/.  

---

## Technologies Used  
- *Frontend*: HTML, CSS (styles.css)  
- *Backend/Logic*: JavaScript (app.js)  
- *Data*: JSON files for both basic and advanced documentation.  

---

## Website link for the CDP Support Agent Chatbot

http://127.0.0.1:5500/

## Prerequisites  
1. Ensure you have a modern web browser installed.  
2. Clone the repository to your local system.  

---

## Setup Instructions  

### Step 1: Clone the Repository  
bash  
git clone https://github.com/your-username/cdp-support-agent-chatbot.git  
cd cdp-support-agent-chatbot  
  

### Step 2: Open the Application  
- Open index.html in a browser to launch the chatbot interface.  

---

## Folder Structure  
plaintext  
project-folder/  
│  
├── docs/  
│   ├── segment.json               # Basic Segment documentation  
│   ├── mparticle.json             # Basic mParticle documentation  
│   ├── lytics.json                # Basic Lytics documentation  
│   ├── zeotap.json                # Basic Zeotap documentation  
│   ├── advanced_docs/             # Advanced docs folder  
│   │   ├── segment.json           # Advanced Segment documentation  
│   │   ├── mparticle.json         # Advanced mParticle documentation  
│   │   ├── lytics.json            # Advanced Lytics documentation  
│   │   ├── zeotap.json            # Advanced Zeotap documentation  
│   ├── comparisons.json           # Comparisons across all CDPs  
│  
├── index.html                     # Frontend HTML file  
├── app.js                         # JavaScript for chatbot functionality  
├── styles.css                     # Styles for the chatbot UI  
├── README.md                      # Documentation for the project  
└── assets/                        # Any assets like images or logos (optional)  
  

---

## Usage Instructions  
1. Launch the chatbot by opening index.html in your web browser.  
2. Type your "how-to" question in the input box. Examples:  
   - "How do I build an audience segment in Lytics?"  
   - "How can I integrate my data with Zeotap?"  
3. The chatbot will search the relevant JSON documentation and display a response.  

---

## Non-Functional Features  
1. *Security*:  
   - Input validation to prevent malicious queries.  
   - Supports secure HTTPS communication (if deployed on a server).  

2. *Performance*:  
   - Efficient JSON parsing for fast responses.  
   - Supports caching frequently accessed data.  

3. *Scalability*:  
   - Modular structure for easy addition of new CDPs or documentation files.  

---

## Future Enhancements  
1. Add more CDPs to extend the chatbot’s capabilities.  
2. Implement multilingual support for non-English queries.  
3. Enhance the UI for a more interactive chatbot experience.  
4. Integrate with live documentation APIs for real-time updates.  

---
