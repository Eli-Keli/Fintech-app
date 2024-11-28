const { createUser, signIn, getCurrentUser } = require("./appwrite.js");

const testAppwriteFunctions = async () => {
    try {
        // Test 1: Create a New User
        console.log("Testing createUser...");
        const newUser = await createUser("test@example.com", "Password123!", "testuser");
        console.log("New User Created:", newUser);

        // Test 2: Sign In the User
        console.log("Testing signIn...");
        const session = await signIn("test@example.com", "Password123!");
        console.log("User Signed In:", session);

        // Test 3: Get Current User
        console.log("Testing getCurrentUser...");
        const currentUser = await getCurrentUser();
        console.log("Current User Details:", currentUser);
    } catch (error) {
        console.error("Test failed:", error.message);
    }
};

// Run the tests
testAppwriteFunctions();
