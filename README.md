🔐 Interactive Hash Table Visualizer

An interactive and colorful web-based project that helps students understand Hash Tables and Hashing through visual interaction.

Users can insert, search, and delete values while seeing how the hash table changes in real time.

✨ Features

- ➕ Insert values into the hash table
- 🔍 Search for values
- 🗑️ Delete values
- 🟡 Visualize hash collisions
- 🔄 Clear the hash table
- 📊 Choose the hash table size
- 🎨 Colorful and interactive interface
- ⚡ Real-time table updates
- 🔢 Uses the hash function "value % table size"
- 🔁 Demonstrates Linear Probing for collision handling
- 📱 Responsive design for different screen sizes

🧠 Concepts Demonstrated

This project demonstrates important ADSA concepts:

- Hashing
- Hash Functions
- Hash Tables
- Collision Handling
- Linear Probing
- Searching
- Insertion
- Deletion

🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript

No external libraries or frameworks are required.

📁 Project Structure

interactive-hash-table-visualizer/
│
├── index.html
├── style.css
├── script.js
└── README.md

⚙️ How It Works

The project uses the following hash function:

hash(value) = value % table size

Example

If the table size is "10" and the value is "25":

25 % 10 = 5

Therefore, "25" is initially placed at index "5".

If another value also maps to index "5", a collision occurs.

The project handles the collision using Linear Probing:

Check next position
        ↓
If occupied
        ↓
Move to next position
        ↓
Continue until empty position is found

🚀 How to Run

1. Download or clone this repository.
2. Open the project folder.
3. Open "index.html" in any web browser.
4. Enter a value.
5. Click Insert.
6. Try searching and deleting values.
7. Insert values that produce collisions to see Linear Probing in action.

🎯 Example Values

Try these values with a table size of "10":

25
15
35
12
22
42

These values help demonstrate how multiple values can produce the same hash index.

🎨 Color Meaning

Color| Meaning
⚪ Empty| No value stored
🔵 Blue| Value stored
🟡 Yellow| Collision occurred
🟢 Green| Value found
🔴 Red| Value deleted

📚 Learning Outcome

After using this project, students can understand:

- How a hash function works
- How values are mapped to indexes
- What a collision means
- How Linear Probing resolves collisions
- How searching works in a hash table
- How deletion affects a hash table

🔮 Future Improvements

Possible future additions:

- Separate chaining
- Hash table statistics
- Collision counter
- Step-by-step animation
- Search animation
- Performance comparison
- Multiple hashing techniques
- Dark mode
- Algorithm explanation panel

👩‍💻 Author

Rangam Pavani

B.Tech – CSE (AI)

⭐ Project Purpose

This project is created as an ADSA learning project to make Hash Tables easier to understand through an interactive visual interface.
