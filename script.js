document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM fully loaded and parsed");

    const menuScreen = document.getElementById('menu-screen');
    const flashcardScreen = document.getElementById('flashcard-screen');
    const topicSelect = document.getElementById('topic-select');
    const generateButton = document.getElementById('generate-flashcard-button');
    const flashcardGrid = document.getElementById('flashcard-grid');
    const backButton = document.getElementById('back-button');
    const modal = document.getElementById('flashcard-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalQuestion = document.querySelector('.modal-question');
    const modalEnglishText = document.querySelector('.modal-english-text');
    const modalGermanText = document.querySelector('.modal-german-text');
    const easyButton = document.getElementById('easy-button');
    const hardButton = document.getElementById('hard-button');
    const difficultButton = document.getElementById('difficult-button');
    const streakDisplay = document.getElementById('streak');
    const pointsDisplay = document.getElementById('points');

    let selectedTopic = null;
    let currentStreak = 0;
    let totalPoints = 0;

    // Show menu screen and hide flashcard screen initially
    menuScreen.style.display = 'block';
    flashcardScreen.style.display = 'none';

    // Handle topic selection
    topicSelect.addEventListener('change', function () {
        selectedTopic = topicSelect.value;
        console.log("Selected topic:", selectedTopic);
    });

    // Handle "Generate Flashcards" button click
    generateButton.addEventListener('click', function () {
        if (selectedTopic) {
            console.log("Generating flashcards for topic:", selectedTopic);
            menuScreen.style.display = 'none';
            flashcardScreen.style.display = 'block';
            generateFlashcards(selectedTopic);
        } else {
            alert("Please select a topic!");
        }
    });

    // Handle "Back" button click
    backButton.addEventListener('click', function () {
        flashcardScreen.style.display = 'none';
        menuScreen.style.display = 'block';
        flashcardGrid.innerHTML = ''; // Clear flashcards
    });

    // Generate flashcards for the selected topic
    function generateFlashcards(topic) {
        flashcardGrid.innerHTML = ''; // Clear existing flashcards

        if (dataList[topic]) {
            dataList[topic].forEach((scenario, index) => {
                const flashcard = document.createElement('div');
                flashcard.className = 'flashcard';
                flashcard.innerHTML = `
                    <p>${scenario.scenario}</p>
                `;
                flashcard.addEventListener('click', function () {
                    openModal(scenario);
                });
                flashcardGrid.appendChild(flashcard);
            });
        } else {
            console.error("Invalid topic selected.");
            alert("Invalid topic selected. Please try again.");
        }
    }

    // Open modal with flashcard content
    function openModal(scenario) {
        modalQuestion.textContent = scenario.scenario;
        modalEnglishText.textContent = scenario.english;
        modalGermanText.textContent = scenario.answer;
        modal.style.display = 'flex';
    }

    // Close modal
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Handle rating button clicks
    easyButton.addEventListener('click', function () {
        updateScore(2);
        modal.style.display = 'none';
    });

    hardButton.addEventListener('click', function () {
        updateScore(1);
        modal.style.display = 'none';
    });

    difficultButton.addEventListener('click', function () {
        updateScore(0);
        modal.style.display = 'none';
    });

    // Update score and streak
    function updateScore(points) {
        totalPoints += points;
        pointsDisplay.textContent = totalPoints;

        if (points > 0) {
            currentStreak++;
        } else {
            currentStreak = 0;
        }
        streakDisplay.textContent = currentStreak;
    }
});