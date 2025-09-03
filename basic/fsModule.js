// ✅ Now your script supports:
// Creating files (writeFileSync)
// Reading files (sync and async)
// Appending to files
// Checking if files exist
// Creating and reading symlinks
// Making/removing directories
// 🔥 New: Updating, renaming, and deleting files

const fs = require('fs');
const path = require('path');

// File paths
const syncFilePath = "./FsModule.txt";
const asyncFilePath = "./AsyncFsModule.txt";
const readFilePath = "./ReadFile.txt";
const appendFilePath = "./AppendFile.txt";
const symlinkPath = "./SymlinkExample.txt";
const directoryPath = "./testDir";
const symlinkTarget = "./FsModule.txt"; // Target of the symlink

// Ensure that directories exist
const dirPath = path.dirname(syncFilePath);
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
}

// 1. Write to files synchronously and asynchronously
fs.writeFileSync(syncFilePath, "Hi, I am created from Module.js SYNC");
console.log("Sync write completed!");

fs.writeFile(asyncFilePath, "Hi, I am created from Module.js ASYNC", (err) => {
    if (err) {
        console.log("Error writing file asynchronously:", err);
    } else {
        console.log("Async write completed!");
    }
});

// 2. Create ReadFile.txt if it doesn't exist
if (!fs.existsSync(readFilePath)) {
    fs.writeFileSync(readFilePath, "This is the content of ReadFile.txt.");
    console.log("ReadFile.txt was created!");
} else {
    console.log("ReadFile.txt already exists.");
}

// 3. Read files synchronously
try {
    const readFileSync = fs.readFileSync(readFilePath, "utf-8");
    console.log("Read Sync:", readFileSync);
} catch (err) {
    console.error("Error reading file synchronously:", err);
}

// 4. Read files asynchronously
fs.readFile(readFilePath, "utf-8", (err, data) => {
    if (err) {
        console.log("Error reading file asynchronously:", err);
    } else {
        console.log("Read Async:", data);
    }
});

// 5. Append to files synchronously and asynchronously
try {
    fs.appendFileSync(appendFilePath, "This is appended content SYNC.\n");
    console.log("Sync append completed!");
} catch (err) {
    console.log("Error appending file synchronously:", err);
}

fs.appendFile(appendFilePath, "This is appended content ASYNC.\n", (err) => {
    if (err) {
        console.log("Error appending file asynchronously:", err);
    } else {
        console.log("Async append completed!");
    }
});

// 6. Check if file exists before reading or writing
const checkAndReadFile = (filePath) => {
    if (fs.existsSync(filePath)) {
        const content = fs.readFileSync(filePath, "utf-8");
        console.log(`Content of ${filePath}:`, content);
    } else {
        console.log(`File ${filePath} does not exist.`);
    }
};

checkAndReadFile("./ReadFile.txt");
checkAndReadFile("./NonExistentFile.txt");

// 7. Create a symlink (symbolic link)
if (!fs.existsSync(symlinkPath)) {
    fs.symlinkSync(symlinkTarget, symlinkPath);
    console.log(`Symlink created: ${symlinkPath} -> ${symlinkTarget}`);
} else {
    console.log("Symlink already exists.");
}

// 8. Read the symlink
fs.readlink(symlinkPath, (err, linkPath) => {
    if (err) {
        console.log("Error reading symlink:", err);
    } else {
        console.log("Symlink points to:", linkPath);
    }
});

// 9. Create a directory
if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath);
    console.log(`Directory created: ${directoryPath}`);
} else {
    console.log("Directory already exists.");
}

// 10. Remove a directory (only if it's empty)
try {
    if (fs.existsSync(directoryPath)) {
        fs.rmdirSync(directoryPath);
        console.log(`Directory removed: ${directoryPath}`);
    }
} catch (err) {
    console.log("Error removing directory:", err);
}

// ===============================
// 11. Add File if Not Exists
// ===============================
const fileToUpdate = "./UpdateMe.txt";
if (!fs.existsSync(fileToUpdate)) {
    fs.writeFileSync(fileToUpdate, "I am a new file created for update!");
    console.log("✅ File created for update.");
} else {
    console.log("⚠️ File already exists, skipping creation.");
}

// ===============================
// 12. Update File (Append content)
// ===============================
fs.appendFile(fileToUpdate, "\nNew update line added!", (err) => {
    if (err) {
        console.log("❌ Error updating file:", err);
    } else {
        console.log("✏️ File updated successfully.");
    }
});

// ===============================
// 13. Rename File
// ===============================
const fileToRename = "./OldName.txt";
const newFileName = "./NewName.txt";

if (!fs.existsSync(fileToRename)) {
    fs.writeFileSync(fileToRename, "This file will be renamed.");
    console.log("📝 Created file to rename.");
}

fs.rename(fileToRename, newFileName, (err) => {
    if (err) {
        console.log("❌ Error renaming file:", err);
    } else {
        console.log(`✅ File renamed from '${fileToRename}' to '${newFileName}'`);
    }
});

// ===============================
// 14. Delete File
// ===============================
const fileToDelete = "./DeleteMe.txt";

if (!fs.existsSync(fileToDelete)) {
    fs.writeFileSync(fileToDelete, "This file will be deleted.");
    console.log("🗂️ File created to be deleted.");
}

fs.unlink(fileToDelete, (err) => {
    if (err) {
        console.log("❌ Error deleting file:", err);
    } else {
        console.log(`🗑️ File '${fileToDelete}' deleted successfully.`);
    }
});
