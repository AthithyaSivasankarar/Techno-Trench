function checkPassword() {
    const password = document.getElementById("password").value;
    const strengthMessage = document.getElementById("strengthMessage");
    const suggestions = document.getElementById("suggestions");
    
    const feedback = [];
    let strength = 0;

    if (password.length >= 12) strength++;
    else feedback.push("Password should be at least 12 characters long.");
    
    if (/[a-z]/.test(password)) strength++;
    else feedback.push("Password should contain at least one lowercase letter.");
    
    if (/[A-Z]/.test(password)) strength++;
    else feedback.push("Password should contain at least one uppercase letter.");
    
    if (/\d/.test(password)) strength++;
    else feedback.push("Password should contain at least one digit.");
    
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
    else feedback.push("Password should contain at least one special character (e.g., !@#$%^&*()).");
    
    if (!/(.)\1\1/.test(password)) strength++;
    else feedback.push("Password should not have three consecutive identical characters.");

    let strengthText = "";
    if (strength === 6) strengthText = "Your password is very strong.";
    else if (strength >= 4) strengthText = "Your password is strong.";
    else if (strength >= 2) strengthText = "Your password is moderate.";
    else strengthText = "Your password is weak.";

    strengthMessage.textContent = `Password Strength: ${strengthText}`;

    suggestions.innerHTML = "";
    feedback.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        suggestions.appendChild(li);
    });
}
