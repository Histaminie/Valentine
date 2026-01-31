function notReady() {
    alert("You don’t wanna miss this journey ❤️");
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const subtitleEl = document.getElementById("subtitle");
    const questionEl = document.getElementById("question");

    // Exit if not on landing page
    if (!subtitleEl || !questionEl) return;

    const subtitleText = "Every journey that matters\nbegins with a single question.";
    const questionText = "Are you ready to begin yours?";

    let i = 0;
    let j = 0;

    function typeSubtitle() {
        if (i < subtitleText.length) {
            subtitleEl.innerHTML +=
                subtitleText[i] === "\n" ? "<br>" : subtitleText[i];
            i++;
            setTimeout(typeSubtitle, 45);
        } else {
            setTimeout(typeQuestion, 400);
        }
    }

    function typeQuestion() {
        if (j < questionText.length) {
            questionEl.innerHTML += questionText[j];
            j++;
            setTimeout(typeQuestion, 55);
        }
    }

    typeSubtitle();
});
