function submitQuiz() {
    const answers = {
        q1: "b",
        q2: "b",
        q3: "b",
        q4: "d",
        q5: "money",  // Fill in the blank answer
        q6: "glass",   // Fill in the blank answer
        q7: "escape",   // Fill in the blank answer
        q8: "conflict", // Fill in the blank answer
        q9: "c",
        q10: "b",
        q11: "b",
    };
    
    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    // Check multiple-choice answers
    for (const question in answers) {
        const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
        if (selectedOption && selectedOption.value === answers[question]) {
            score++;
        }
    }

    // Check fill-in-the-blank answers
    for (let i = 5; i <= 8; i++) {
        const fillInAnswer = document.getElementById(`q${i}`).value.trim().toLowerCase();
        if (fillInAnswer === answers[`q${i}`]) {
            score++;
        }
    }

    const result = document.getElementById("result");
    result.innerHTML = `You scored ${score} out of ${totalQuestions}.`;

    // Check for perfect score and show quote
    if (score === totalQuestions) {
        alert("Congratulations! Here's a quote from Chapter 2:\n\"Education is Reyna’s salvation. It becomes her escape from the hardships of her family life, her path to independence, and a way to achieve her dreams of success.\"");
    }
}
