const readlineSync = require('readline-sync');

let password;
let isValid = false;

// Use do...while because we need to prompt at least once
do {
    password = readlineSync.question("Enter a password: ", {
        hideEchoBack: true  // Hides password input for security
    });

    // Reset validation flags for each attempt
    let hasMinLength = false;
    let hasUppercase = false;
    let hasNumber = false;

    // Check minimum length (no loop needed)
    if (password.length >= 8) {
        hasMinLength = true;
    }

    // Loop through each character to check requirements
    for (const char of password) {
        // Check for uppercase letter (A-Z)
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        }
        // Check for number (0-9)
        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    // Evaluate all conditions using logical AND
    if (hasMinLength && hasUppercase && hasNumber) {
        isValid = true;
        console.log("\n✓ Success! Your password meets all requirements.\n");
    } else {
        console.log("\n✗ Password does not meet the requirements:");
        
        // Provide specific feedback
        if (!hasMinLength) {
            console.log("  - Must be at least 8 characters long");
        }
        if (!hasUppercase) {
            console.log("  - Must contain at least one uppercase letter");
        }
        if (!hasNumber) {
            console.log("  - Must contain at least one number");
        }
        console.log("\nPlease try again.\n");
    }

} while (!isValid);

console.log("Password has been set successfully!");