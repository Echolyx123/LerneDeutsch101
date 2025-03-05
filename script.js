import { dataList } from './data.js';

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
    const prevCardButton = document.getElementById('prev-card-button');
    const nextCardButton = document.getElementById('next-card-button');
    const toggleTranslationButton = document.getElementById('toggle-translation-button');
    const nextStepButton = document.getElementById('next-step-button');
    const stepProgress = document.getElementById('step-progress');

    let selectedTopic = null;
    let currentStreak = 0;
    let totalPoints = 0;
    let currentCardIndex = 0;
    let currentStepIndex = 0;
    let showTranslation = false;
    let currentFlashcardData = null;

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
        currentCardIndex = 0; // Reset card index
        currentStepIndex = 0; // Reset step index
    });

    // Generate flashcards for the selected topic
    function generateFlashcards(topic) {
        flashcardGrid.innerHTML = ''; // Clear existing flashcards

        if (dataList[topic]) {
            currentFlashcardData = dataList[topic];
            console.log("Flashcards loaded:", currentFlashcardData); // Debugging log
            showFlashcard(currentCardIndex);
        } else {
            console.error("Invalid topic selected.");
            alert("Invalid topic selected. Please try again.");
        }
    }

    // Show the current flashcard and step
    function showFlashcard(cardIndex) {
        if (!currentFlashcardData || cardIndex >= currentFlashcardData.length) {
            console.error("No flashcard data or invalid card index.");
            return;
        }

        const flashcard = currentFlashcardData[cardIndex];
        console.log("Current flashcard:", flashcard); // Debugging log
        console.log("Current step:", flashcard.steps[currentStepIndex]); // Debugging log

        // Create the flashcard HTML
        flashcardGrid.innerHTML = `
            <div class="flashcard">
                <div class="flashcard-front">
                    <p>${flashcard.steps[currentStepIndex]}</p>
                </div>
                <div class="flashcard-back">
                    ${generateWordTranslations(flashcard.steps[currentStepIndex])}
                </div>
            </div>
        `;
        updateStepProgress();
    }

    // Generate individual word translations for the back of the card
    function generateWordTranslations(germanSentence) {
        const germanWords = germanSentence.split(' ');
        let translationsHTML = '';

        germanWords.forEach((word) => {
            const cleanWord = word.replace(/[^a-zA-ZäöüßÄÖÜ]/g, ""); // Remove punctuation
            const translation = wordTranslations[cleanWord] || word; // Use the dictionary or fallback to the word itself
            translationsHTML += `
                <div class="word-translation">
                    <span class="german-word">${word}</span>
                    <span class="english-word">${translation}</span>
                </div>
            `;
        });

        return translationsHTML;
    }

    // Update step progress indicator
    function updateStepProgress() {
        const flashcard = currentFlashcardData[currentCardIndex];
        stepProgress.textContent = `Step ${currentStepIndex + 1} of ${flashcard.steps.length}`;
    }

    // Handle "Next Step" button click
    nextStepButton.addEventListener('click', function () {
        const flashcard = currentFlashcardData[currentCardIndex];
        if (currentStepIndex < flashcard.steps.length - 1) {
            currentStepIndex++;
            showFlashcard(currentCardIndex);
        } else {
            // Move to the next flashcard
            if (currentCardIndex < currentFlashcardData.length - 1) {
                currentCardIndex++;
                currentStepIndex = 0;
                showFlashcard(currentCardIndex);
            } else {
                alert("You've reached the end of the flashcards!");
            }
        }
    });

    // Handle "Previous Card" button click
    prevCardButton.addEventListener('click', function () {
        if (currentCardIndex > 0) {
            currentCardIndex--;
            currentStepIndex = 0;
            showFlashcard(currentCardIndex);
        }
    });

    // Handle "Next Card" button click
    nextCardButton.addEventListener('click', function () {
        if (currentCardIndex < currentFlashcardData.length - 1) {
            currentCardIndex++;
            currentStepIndex = 0;
            showFlashcard(currentCardIndex);
        }
    });

    // Toggle translation visibility (flip the card)
    toggleTranslationButton.addEventListener('click', function () {
        const flashcard = document.querySelector('.flashcard');
        if (flashcard) {
            flashcard.classList.toggle('show-translation');
        }
    });

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
