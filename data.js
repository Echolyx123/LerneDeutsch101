const dataList = {
    verbs: [
        {
            scenario: "You’re at a café and want to order a coffee. What do you say?",
            answer: "Ich möchte einen Kaffee, bitte!",
            english: "I would like a coffee, please!"
        },
        {
            scenario: "You’re asking a friend to help you with homework. What do you say?",
            answer: "Kannst du mir bitte bei den Hausaufgaben helfen?",
            english: "Can you please help me with the homework?"
        },
        {
            scenario: "You want to invite someone to a party. What do you say?",
            answer: "Möchtest du zu meiner Party kommen?",
            english: "Would you like to come to my party?"
        },
        {
            scenario: "You’re telling someone you’re going to the park. What do you say?",
            answer: "Ich gehe in den Park.",
            english: "I am going to the park."
        },
        {
            scenario: "You’re asking someone to close the door. What do you say?",
            answer: "Kannst du bitte die Tür schließen?",
            english: "Can you please close the door?"
        },
        {
            scenario: "You’re telling someone you love them. What do you say?",
            answer: "Ich liebe dich.",
            english: "I love you."
        },
        {
            scenario: "You’re asking someone to wait for you. What do you say?",
            answer: "Kannst du bitte auf mich warten?",
            english: "Can you please wait for me?"
        },
        {
            scenario: "You’re telling someone you’re tired. What do you say?",
            answer: "Ich bin müde.",
            english: "I am tired."
        },
        {
            scenario: "You’re asking someone to call you later. What do you say?",
            answer: "Kannst du mich später anrufen?",
            english: "Can you call me later?"
        },
        {
            scenario: "You’re telling someone you’re hungry. What do you say?",
            answer: "Ich habe Hunger.",
            english: "I am hungry."
        },
        // Add 90 more verb scenarios...
        {
            scenario: "You’re asking someone to open the window. What do you say?",
            answer: "Kannst du bitte das Fenster öffnen?",
            english: "Can you please open the window?"
        },
        {
            scenario: "You’re telling someone you’re going to sleep. What do you say?",
            answer: "Ich gehe schlafen.",
            english: "I am going to sleep."
        },
        {
            scenario: "You’re asking someone to turn off the lights. What do you say?",
            answer: "Kannst du bitte das Licht ausschalten?",
            english: "Can you please turn off the lights?"
        },
        {
            scenario: "You’re telling someone you’re happy. What do you say?",
            answer: "Ich bin glücklich.",
            english: "I am happy."
        },
        {
            scenario: "You’re asking someone to speak slowly. What do you say?",
            answer: "Kannst du bitte langsam sprechen?",
            english: "Can you please speak slowly?"
        },
        {
            scenario: "You’re telling someone you’re going to the store. What do you say?",
            answer: "Ich gehe zum Laden.",
            english: "I am going to the store."
        },
        {
            scenario: "You’re asking someone to repeat what they said. What do you say?",
            answer: "Kannst du das bitte wiederholen?",
            english: "Can you please repeat that?"
        },
        {
            scenario: "You’re telling someone you’re going to the gym. What do you say?",
            answer: "Ich gehe ins Fitnessstudio.",
            english: "I am going to the gym."
        },
        {
            scenario: "You’re asking someone to write something down. What do you say?",
            answer: "Kannst du das bitte aufschreiben?",
            english: "Can you please write that down?"
        },
        {
            scenario: "You’re telling someone you’re going to the movies. What do you say?",
            answer: "Ich gehe ins Kino.",
            english: "I am going to the movies."
        },
        // Continue adding until 100 verb scenarios...
    ],
    nouns: [
        {
            scenario: "You’re at a grocery store and need to buy bread. What do you ask for?",
            answer: "Ich möchte ein Brot, bitte!",
            english: "I would like a loaf of bread, please!"
        },
        {
            scenario: "You’re describing your pet dog. What do you say?",
            answer: "Das ist mein Hund.",
            english: "This is my dog."
        },
        {
            scenario: "You’re pointing out a book on the table. What do you say?",
            answer: "Das ist ein Buch.",
            english: "This is a book."
        },
        {
            scenario: "You’re asking for a glass of water. What do you say?",
            answer: "Kann ich ein Glas Wasser haben?",
            english: "Can I have a glass of water?"
        },
        {
            scenario: "You’re describing your car. What do you say?",
            answer: "Das ist mein Auto.",
            english: "This is my car."
        },
        {
            scenario: "You’re asking for a pen. What do you say?",
            answer: "Kann ich einen Stift haben?",
            english: "Can I have a pen?"
        },
        {
            scenario: "You’re pointing out a tree. What do you say?",
            answer: "Das ist ein Baum.",
            english: "This is a tree."
        },
        {
            scenario: "You’re describing your phone. What do you say?",
            answer: "Das ist mein Handy.",
            english: "This is my phone."
        },
        {
            scenario: "You’re asking for an apple. What do you say?",
            answer: "Kann ich einen Apfel haben?",
            english: "Can I have an apple?"
        },
        {
            scenario: "You’re pointing out a chair. What do you say?",
            answer: "Das ist ein Stuhl.",
            english: "This is a chair."
        },
        // Add 90 more noun scenarios...
        {
            scenario: "You’re describing your laptop. What do you say?",
            answer: "Das ist mein Laptop.",
            english: "This is my laptop."
        },
        {
            scenario: "You’re asking for a cup of tea. What do you say?",
            answer: "Kann ich eine Tasse Tee haben?",
            english: "Can I have a cup of tea?"
        },
        {
            scenario: "You’re pointing out a cat. What do you say?",
            answer: "Das ist eine Katze.",
            english: "This is a cat."
        },
        {
            scenario: "You’re describing your house. What do you say?",
            answer: "Das ist mein Haus.",
            english: "This is my house."
        },
        {
            scenario: "You’re asking for a piece of cake. What do you say?",
            answer: "Kann ich ein Stück Kuchen haben?",
            english: "Can I have a piece of cake?"
        },
        {
            scenario: "You’re pointing out a flower. What do you say?",
            answer: "Das ist eine Blume.",
            english: "This is a flower."
        },
        {
            scenario: "You’re describing your bike. What do you say?",
            answer: "Das ist mein Fahrrad.",
            english: "This is my bike."
        },
        {
            scenario: "You’re asking for a bottle of water. What do you say?",
            answer: "Kann ich eine Flasche Wasser haben?",
            english: "Can I have a bottle of water?"
        },
        {
            scenario: "You’re pointing out a table. What do you say?",
            answer: "Das ist ein Tisch.",
            english: "This is a table."
        },
        {
            scenario: "You’re describing your watch. What do you say?",
            answer: "Das ist meine Uhr.",
            english: "This is my watch."
        },
        // Continue adding until 100 noun scenarios...
    ],
    sentences: [
        {
            scenario: "You’re introducing yourself to a new colleague. What do you say?",
            answer: "Hallo, ich bin [Your Name]. Freut mich, dich kennenzulernen!",
            english: "Hello, I am [Your Name]. Nice to meet you!"
        },
        {
            scenario: "You’re ordering food at a restaurant. How do you ask for the menu?",
            answer: "Könnte ich bitte die Speisekarte sehen?",
            english: "Could I please see the menu?"
        },
        {
            scenario: "You’re asking for directions to the train station. What do you say?",
            answer: "Könnten Sie mir bitte den Weg zum Bahnhof sagen?",
            english: "Could you please tell me the way to the train station?"
        },
        {
            scenario: "You’re thanking someone for their help. What do you say?",
            answer: "Vielen Dank für Ihre Hilfe!",
            english: "Thank you very much for your help!"
        },
        {
            scenario: "You’re apologizing for being late. What do you say?",
            answer: "Es tut mir leid, dass ich zu spät bin.",
            english: "I am sorry for being late."
        },
        {
            scenario: "You’re asking someone how they are. What do you say?",
            answer: "Wie geht es dir?",
            english: "How are you?"
        },
        {
            scenario: "You’re telling someone you don’t understand. What do you say?",
            answer: "Ich verstehe nicht.",
            english: "I don’t understand."
        },
        {
            scenario: "You’re asking someone to speak more slowly. What do you say?",
            answer: "Könnten Sie bitte langsamer sprechen?",
            english: "Could you please speak more slowly?"
        },
        {
            scenario: "You’re telling someone you’re lost. What do you say?",
            answer: "Ich habe mich verlaufen.",
            english: "I am lost."
        },
        {
            scenario: "You’re asking someone for the time. What do you say?",
            answer: "Könnten Sie mir bitte sagen, wie spät es ist?",
            english: "Could you please tell me what time it is?"
        },
        // Add 90 more sentence scenarios...
        {
            scenario: "You’re asking someone to repeat themselves. What do you say?",
            answer: "Könnten Sie das bitte wiederholen?",
            english: "Could you please repeat that?"
        },
        {
            scenario: "You’re telling someone you’re in a hurry. What do you say?",
            answer: "Ich bin in Eile.",
            english: "I am in a hurry."
        },
        {
            scenario: "You’re asking someone to help you. What do you say?",
            answer: "Könnten Sie mir bitte helfen?",
            english: "Could you please help me?"
        },
        {
            scenario: "You’re telling someone you’re feeling sick. What do you say?",
            answer: "Mir ist schlecht.",
            english: "I feel sick."
        },
        {
            scenario: "You’re asking someone to wait for a moment. What do you say?",
            answer: "Könnten Sie bitte einen Moment warten?",
            english: "Could you please wait a moment?"
        },
        {
            scenario: "You’re telling someone you’re busy. What do you say?",
            answer: "Ich bin beschäftigt.",
            english: "I am busy."
        },
        {
            scenario: "You’re asking someone to write something down. What do you say?",
            answer: "Könnten Sie das bitte aufschreiben?",
            english: "Could you please write that down?"
        },
        {
            scenario: "You’re telling someone you’re going home. What do you say?",
            answer: "Ich gehe nach Hause.",
            english: "I am going home."
        },
        {
            scenario: "You’re asking someone to turn on the TV. What do you say?",
            answer: "Könnten Sie bitte den Fernseher einschalten?",
            english: "Could you please turn on the TV?"
        },
        {
            scenario: "You’re telling someone you’re going to the airport. What do you say?",
            answer: "Ich gehe zum Flughafen.",
            english: "I am going to the airport."
        },
        // Continue adding until 100 sentence scenarios...
    ]
};