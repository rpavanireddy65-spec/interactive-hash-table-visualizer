let table = [];
let tableSize = 10;


// CREATE HASH TABLE
function createTable() {

    const size = parseInt(
        document.getElementById("sizeInput").value
    );

    if (size < 5 || size > 15) {
        showMessage("⚠️ Table size must be between 5 and 15!");
        return;
    }

    tableSize = size;
    table = new Array(tableSize).fill(null);

    displayTable();

    showMessage(
        `✅ Hash table created with ${tableSize} positions.`
    );
}


// HASH FUNCTION
function hashFunction(value) {

    return value % tableSize;
}


// INSERT VALUE
function insertValue() {

    const input = document.getElementById("valueInput");
    const value = parseInt(input.value);

    if (isNaN(value)) {
        showMessage("⚠️ Please enter a number!");
        return;
    }

    let index = hashFunction(value);

    // Check duplicate
    if (table.includes(value)) {
        showMessage("⚠️ This value already exists!");
        return;
    }

    // Linear probing
    let originalIndex = index;
    let collision = false;

    while (table[index] !== null) {

        collision = true;

        index = (index + 1) % tableSize;

        if (index === originalIndex) {
            showMessage("❌ Hash table is full!");
            return;
        }
    }

    table[index] = value;

    displayTable();

    if (collision) {
        document
            .getElementById(`cell-${index}`)
            .classList.add("collision");

        showMessage(
            `🟡 Collision! ${value} moved to index ${index}.`
        );
    } else {

        document
            .getElementById(`cell-${index}`)
            .classList.add("stored");

        showMessage(
            `✅ ${value} inserted at index ${index}.`
        );
    }

    input.value = "";
}


// SEARCH VALUE
function searchValue() {

    const value = parseInt(
        document.getElementById("valueInput").value
    );

    if (isNaN(value)) {
        showMessage("⚠️ Enter a value to search!");
        return;
    }

    let index = hashFunction(value);
    let start = index;

    while (table[index] !== null) {

        if (table[index] === value) {

            displayTable();

            document
                .getElementById(`cell-${index}`)
                .classList.add("found");

            showMessage(
                `🔍 ${value} found at index ${index}!`
            );

            return;
        }

        index = (index + 1) % tableSize;

        if (index === start) {
            break;
        }
    }

    showMessage(`❌ ${value} was not found.`);
}


// DELETE VALUE
function deleteValue() {

    const value = parseInt(
        document.getElementById("valueInput").value
    );

    if (isNaN(value)) {
        showMessage("⚠️ Enter a value to delete!");
        return;
    }

    const index = table.indexOf(value);

    if (index === -1) {
        showMessage(`❌ ${value} does not exist.`);
        return;
    }

    table[index] = null;

    displayTable();

    document
        .getElementById(`cell-${index}`)
        .classList.add("deleted");

    showMessage(
        `🗑️ ${value} deleted from index ${index}.`
    );
}


// DISPLAY TABLE
function displayTable() {

    const tableContainer =
        document.getElementById("hashTable");

    tableContainer.innerHTML = "";

    for (let i = 0; i < tableSize; i++) {

        const cell = document.createElement("div");

        cell.className = "cell";
        cell.id = `cell-${i}`;

        cell.innerHTML = `
            <div class="index">
                Index ${i}
            </div>

            <div class="value">
                ${table[i] === null ? "—" : table[i]}
            </div>
        `;

        if (table[i] !== null) {
            cell.classList.add("stored");
        }

        tableContainer.appendChild(cell);
    }
}


// CLEAR TABLE
function clearTable() {

    table = new Array(tableSize).fill(null);

    displayTable();

    showMessage("🔄 Hash table cleared!");
}


// MESSAGE
function showMessage(message) {

    document.getElementById("message").innerText = message;
}


// CREATE TABLE WHEN PAGE OPENS
createTable();