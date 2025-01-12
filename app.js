async function askQuestion() {
    const cdp = document.getElementById("cdp-select").value.toLowerCase();
    const question = document.getElementById("question").value.toLowerCase();
    console.log("Selected CDP:", cdp);
    console.log("User Question:", question);

    try {
        // Check if the question is about comparisons
        if (question.includes("compare") || question.includes("difference")) {
            const comparison = await fetchComparison(question);
            document.getElementById("response").textContent = comparison;
        } else if (question.includes("integrate") || question.includes("custom") || question.includes("real-time")) {
            const advancedAnswer = await fetchAdvancedAnswer(cdp, question);
            document.getElementById("response").textContent = advancedAnswer;
        } else {
            const response = await fetch(`docs/${cdp}.json`);
            const data = await response.json();
            const result = data.find(item =>
                item.question.toLowerCase().includes(question)
            );
            document.getElementById("response").textContent = result ? result.answer : "Sorry, no answer found for your question.";
        }
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("response").textContent = "An error occurred. Check the console for details.";
    }
}

async function fetchComparison(question) {
    // Comparison questions are about the functionalities: audience creation, data integration, real-time streaming, custom integrations
    const comparisonKey = question.includes("audience") ? "audience_creation" :
        (question.includes("data") ? "data_integration" :
        (question.includes("real-time") ? "real_time_streaming" : "custom_integrations"));

    const comparisonData = await fetch("docs/comparisons.json").then(res => res.json());

    // Extract CDPs mentioned in the question
    const cdpNames = ["segment", "mparticle", "lytics", "zeotap"];
    const mentionedCDPs = cdpNames.filter(cdp => question.includes(cdp));

    if (mentionedCDPs.length === 2) {
        const [firstCDP, secondCDP] = mentionedCDPs;
        return `${firstCDP.charAt(0).toUpperCase() + firstCDP.slice(1)} vs. ${secondCDP.charAt(0).toUpperCase() + secondCDP.slice(1)}: ${comparisonData[comparisonKey][firstCDP]} vs. ${comparisonData[comparisonKey][secondCDP]}`;    } else {
        return "Sorry, I can only compare two CDPs at a time.";
    }
}

async function fetchAdvancedAnswer(cdp, question) {
    // Check for advanced question by searching in the advanced_docs folder
    const advancedFile = `docs/advanced_docs/${cdp}_advanced.json`;
    try {
        const response = await fetch(advancedFile);
        const data = await response.json();

        // Search for advanced configuration or use case in the JSON file
        const advanced = data.find(item => 
            item.question.toLowerCase().includes("advanced") && 
            item.question.toLowerCase().includes(question)
        );

        if (advanced) {
            return advanced.answer;
        } else {
            return "Sorry, I couldn't find an advanced solution for this question.";
        }
    } catch (error) {
        return "Error fetching advanced documentation.";
    }
}