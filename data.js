const wordTranslations = {
    Ich: "I",
    möchte: "would like",
    einen: "a",
    Kaffee: "coffee",
    bitte: "please",
    Kannst: "Can",
    du: "you",
    mir: "me",
    bei: "with",
    den: "the",
    Hausaufgaben: "homework",
    helfen: "help",
    Möchtest: "Would",
    zu: "to",
    meiner: "my",
    Party: "party",
    kommen: "come",
    gehe: "am going",
    in: "to",
    den: "the",
    Park: "park",
    die: "the",
    Tür: "door",
    schließen: "close",
    liebe: "love",
    dich: "you",
    auf: "for",
    mich: "me",
    warten: "wait",
    bin: "am",
    müde: "tired",
    später: "later",
    anrufen: "call",
    habe: "have",
    Hunger: "hungry",
    das: "the",
    Fenster: "window",
    öffnen: "open",
    schlafen: "sleep",
    Licht: "light",
    ausschalten: "turn off",
    glücklich: "happy",
    langsam: "slowly",
    sprechen: "speak",
    Laden: "store",
    wiederholen: "repeat",
    Fitnessstudio: "gym",
    aufschreiben: "write down",
    Kino: "movies",
    Zimmer: "room",
    sauber: "clean",
    machen: "make",
    Strand: "beach",
    Abendessen: "dinner",
    kochen: "cook",
    Bibliothek: "library",
    Foto: "photo",
    Museum: "museum",
    Lebensmittel: "groceries",
    einkaufen: "buy",
    Zoo: "zoo",
    Pflanzen: "plants",
    gießen: "water",
    Konzert: "concert",
    Hund: "dog",
    füttern: "feed",
    Theater: "theater",
    Auto: "car",
    waschen: "wash",
    Schwimmbad: "pool",
    Kleidung: "clothes",
    bügeln: "iron",
    Berge: "mountains",
    Boden: "floor",
    staubsaugen: "vacuum",
    Land: "countryside",
    Rasen: "lawn",
    mähen: "mow",
    Stadt: "city",
    Computer: "computer",
    reparieren: "repair",
    Büro: "office",
    Wand: "wall",
    streichen: "paint",
    Krankenhaus: "hospital",
    Fahrrad: "bike",
    Bank: "bank",
    Geschirr: "dishes",
    spülen: "clean",
    Post: "post office",
    Fernseher: "TV",
    Apotheke: "pharmacy",
    Bücher: "books",
    organisieren: "organize",
    Supermarkt: "supermarket",
    Waschbecken: "sink",
    Bäckerei: "bakery",
    Badezimmer: "bathroom",
    putzen: "clean",
    Metzger: "butcher",
    Dach: "roof",
    Blumenladen: "florist",
    Fenster: "windows",
    Schneider: "tailor",
    Zaun: "fence",
    Zahnarzt: "dentist",
    Garage: "garage",
    aufräumen: "clean up",
    Optiker: "optician",
    Tür: "door",
    Tierarzt: "vet",
    Dachboden: "attic",
    Friseur: "hairdresser",
    Tor: "gate",
    Werkstatt: "mechanic",
    Keller: "basement",
    Juwelier: "jeweler",
    Treppe: "stairs",
    Schuster: "cobbler",
    Schuppen: "shed",
    Schlosser: "locksmith",
    Wasserleitung: "plumbing",
    Elektriker: "electrician",
    Terrasse: "patio",
    Klempner: "plumber",
    Heizung: "heating",
    Tischler: "carpenter",
    Einfahrt: "driveway",
    Maler: "painter",
    Klimaanlage: "air conditioning",
    Dachdecker: "roofer",
    Dachrinnen: "gutters",
    Glaser: "glazier",
    Schornstein: "chimney",
    Schweißer: "welder",
};

// Ensure scenarios is always an array
const scenarios = [
    {
            scenario: "You’re at a café and want to order a coffee. What do you say?",
            steps: [
                "Ich", // Step 1
                "möchte", // Step 2
                "einen Kaffee", // Step 3
                "bitte!" // Step 4
            ],
            answer: "Ich möchte einen Kaffee, bitte!",
            english: "I would like a coffee, please!"
        },
        {
            scenario: "You’re asking a friend to help you with homework. What do you say?",
            steps: [
                "Kannst du",
                "mir bitte",
                "bei den Hausaufgaben",
                "helfen?"
            ],
            answer: "Kannst du mir bitte bei den Hausaufgaben helfen?",
            english: "Can you please help me with the homework?"
        },
        {
            scenario: "You want to invite someone to a party. What do you say?",
            steps: [
                "Möchtest du",
                "zu meiner Party",
                "kommen?"
            ],
            answer: "Möchtest du zu meiner Party kommen?",
            english: "Would you like to come to my party?"
        },
        {
            scenario: "You’re telling someone you’re going to the park. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "in den Park."
            ],
            answer: "Ich gehe in den Park.",
            english: "I am going to the park."
        },
        {
            scenario: "You’re asking someone to close the door. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Tür",
                "schließen?"
            ],
            answer: "Kannst du bitte die Tür schließen?",
            english: "Can you please close the door?"
        },
        {
            scenario: "You’re telling someone you love them. What do you say?",
            steps: [
                "Ich",
                "liebe",
                "dich."
            ],
            answer: "Ich liebe dich.",
            english: "I love you."
        },
        {
            scenario: "You’re asking someone to wait for you. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "auf mich",
                "warten?"
            ],
            answer: "Kannst du bitte auf mich warten?",
            english: "Can you please wait for me?"
        },
        {
            scenario: "You’re telling someone you’re tired. What do you say?",
            steps: [
                "Ich",
                "bin",
                "müde."
            ],
            answer: "Ich bin müde.",
            english: "I am tired."
        },
        {
            scenario: "You’re asking someone to call you later. What do you say?",
            steps: [
                "Kannst du",
                "mich",
                "später",
                "anrufen?"
            ],
            answer: "Kannst du mich später anrufen?",
            english: "Can you call me later?"
        },
        {
            scenario: "You’re telling someone you’re hungry. What do you say?",
            steps: [
                "Ich",
                "habe",
                "Hunger."
            ],
            answer: "Ich habe Hunger.",
            english: "I am hungry."
        },
        {
            scenario: "You’re asking someone to open the window. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "das Fenster",
                "öffnen?"
            ],
            answer: "Kannst du bitte das Fenster öffnen?",
            english: "Can you please open the window?"
        },
        {
            scenario: "You’re telling someone you’re going to sleep. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "schlafen."
            ],
            answer: "Ich gehe schlafen.",
            english: "I am going to sleep."
        },
        {
            scenario: "You’re asking someone to turn off the lights. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "das Licht",
                "ausschalten?"
            ],
            answer: "Kannst du bitte das Licht ausschalten?",
            english: "Can you please turn off the lights?"
        },
        {
            scenario: "You’re telling someone you’re happy. What do you say?",
            steps: [
                "Ich",
                "bin",
                "glücklich."
            ],
            answer: "Ich bin glücklich.",
            english: "I am happy."
        },
        {
            scenario: "You’re asking someone to speak slowly. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "langsam",
                "sprechen?"
            ],
            answer: "Kannst du bitte langsam sprechen?",
            english: "Can you please speak slowly?"
        },
        {
            scenario: "You’re telling someone you’re going to the store. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Laden."
            ],
            answer: "Ich gehe zum Laden.",
            english: "I am going to the store."
        },
        {
            scenario: "You’re asking someone to repeat what they said. What do you say?",
            steps: [
                "Kannst du",
                "das",
                "bitte",
                "wiederholen?"
            ],
            answer: "Kannst du das bitte wiederholen?",
            english: "Can you please repeat that?"
        },
        {
            scenario: "You’re telling someone you’re going to the gym. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "ins Fitnessstudio."
            ],
            answer: "Ich gehe ins Fitnessstudio.",
            english: "I am going to the gym."
        },
        {
            scenario: "You’re asking someone to write something down. What do you say?",
            steps: [
                "Kannst du",
                "das",
                "bitte",
                "aufschreiben?"
            ],
            answer: "Kannst du das bitte aufschreiben?",
            english: "Can you please write that down?"
        },
        {
            scenario: "You’re telling someone you’re going to the movies. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "ins Kino."
            ],
            answer: "Ich gehe ins Kino.",
            english: "I am going to the movies."
        },
        {
            scenario: "You’re asking someone to clean the room. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "das Zimmer",
                "sauber machen?"
            ],
            answer: "Kannst du bitte das Zimmer sauber machen?",
            english: "Can you please clean the room?"
        },
        {
            scenario: "You’re telling someone you’re going to the beach. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Strand."
            ],
            answer: "Ich gehe zum Strand.",
            english: "I am going to the beach."
        },
        {
            scenario: "You’re asking someone to cook dinner. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "das Abendessen",
                "kochen?"
            ],
            answer: "Kannst du bitte das Abendessen kochen?",
            english: "Can you please cook dinner?"
        },
        {
            scenario: "You’re telling someone you’re going to the library. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "in die Bibliothek."
            ],
            answer: "Ich gehe in die Bibliothek.",
            english: "I am going to the library."
        },
        {
            scenario: "You’re asking someone to take a photo. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "ein Foto",
                "machen?"
            ],
            answer: "Kannst du bitte ein Foto machen?",
            english: "Can you please take a photo?"
        },
        {
            scenario: "You’re telling someone you’re going to the museum. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "ins Museum."
            ],
            answer: "Ich gehe ins Museum.",
            english: "I am going to the museum."
        },
        {
            scenario: "You’re asking someone to buy groceries. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "Lebensmittel",
                "einkaufen?"
            ],
            answer: "Kannst du bitte Lebensmittel einkaufen?",
            english: "Can you please buy groceries?"
        },
        {
            scenario: "You’re telling someone you’re going to the zoo. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "in den Zoo."
            ],
            answer: "Ich gehe in den Zoo.",
            english: "I am going to the zoo."
        },
        {
            scenario: "You’re asking someone to water the plants. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Pflanzen",
                "gießen?"
            ],
            answer: "Kannst du bitte die Pflanzen gießen?",
            english: "Can you please water the plants?"
        },
        {
            scenario: "You’re telling someone you’re going to the concert. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Konzert."
            ],
            answer: "Ich gehe zum Konzert.",
            english: "I am going to the concert."
        },
        {
            scenario: "You’re asking someone to feed the dog. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "den Hund",
                "füttern?"
            ],
            answer: "Kannst du bitte den Hund füttern?",
            english: "Can you please feed the dog?"
        },
        {
            scenario: "You’re telling someone you’re going to the theater. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "ins Theater."
            ],
            answer: "Ich gehe ins Theater.",
            english: "I am going to the theater."
        },
        {
            scenario: "You’re asking someone to wash the car. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "das Auto",
                "waschen?"
            ],
            answer: "Kannst du bitte das Auto waschen?",
            english: "Can you please wash the car?"
        },
        {
            scenario: "You’re telling someone you’re going to the pool. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Schwimmbad."
            ],
            answer: "Ich gehe zum Schwimmbad.",
            english: "I am going to the pool."
        },
        {
            scenario: "You’re asking someone to iron the clothes. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Kleidung",
                "bügeln?"
            ],
            answer: "Kannst du bitte die Kleidung bügeln?",
            english: "Can you please iron the clothes?"
        },
        {
            scenario: "You’re telling someone you’re going to the mountains. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "in die Berge."
            ],
            answer: "Ich gehe in die Berge.",
            english: "I am going to the mountains."
        },
        {
            scenario: "You’re asking someone to vacuum the floor. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "den Boden",
                "staubsaugen?"
            ],
            answer: "Kannst du bitte den Boden staubsaugen?",
            english: "Can you please vacuum the floor?"
        },
        {
            scenario: "You’re telling someone you’re going to the countryside. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "aufs Land."
            ],
            answer: "Ich gehe aufs Land.",
            english: "I am going to the countryside."
        },
        {
            scenario: "You’re asking someone to mow the lawn. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "den Rasen",
                "mähen?"
            ],
            answer: "Kannst du bitte den Rasen mähen?",
            english: "Can you please mow the lawn?"
        },
        {
            scenario: "You’re telling someone you’re going to the city. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "in die Stadt."
            ],
            answer: "Ich gehe in die Stadt.",
            english: "I am going to the city."
        },
        {
            scenario: "You’re asking someone to fix the computer. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "den Computer",
                "reparieren?"
            ],
            answer: "Kannst du bitte den Computer reparieren?",
            english: "Can you please fix the computer?"
        },
        {
            scenario: "You’re telling someone you’re going to the office. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "ins Büro."
            ],
            answer: "Ich gehe ins Büro.",
            english: "I am going to the office."
        },
        {
            scenario: "You’re asking someone to paint the wall. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Wand",
                "streichen?"
            ],
            answer: "Kannst du bitte die Wand streichen?",
            english: "Can you please paint the wall?"
        },
        {
            scenario: "You’re telling someone you’re going to the hospital. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "ins Krankenhaus."
            ],
            answer: "Ich gehe ins Krankenhaus.",
            english: "I am going to the hospital."
        },
        {
            scenario: "You’re asking someone to repair the bike. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "das Fahrrad",
                "reparieren?"
            ],
            answer: "Kannst du bitte das Fahrrad reparieren?",
            english: "Can you please repair the bike?"
        },
        {
            scenario: "You’re telling someone you’re going to the bank. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zur Bank."
            ],
            answer: "Ich gehe zur Bank.",
            english: "I am going to the bank."
        },
        {
            scenario: "You’re asking someone to clean the dishes. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "das Geschirr",
                "spülen?"
            ],
            answer: "Kannst du bitte das Geschirr spülen?",
            english: "Can you please clean the dishes?"
        },
        {
            scenario: "You’re telling someone you’re going to the post office. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zur Post."
            ],
            answer: "Ich gehe zur Post.",
            english: "I am going to the post office."
        },
        {
            scenario: "You’re asking someone to fix the TV. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "den Fernseher",
                "reparieren?"
            ],
            answer: "Kannst du bitte den Fernseher reparieren?",
            english: "Can you please fix the TV?"
        },
        {
            scenario: "You’re telling someone you’re going to the pharmacy. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zur Apotheke."
            ],
            answer: "Ich gehe zur Apotheke.",
            english: "I am going to the pharmacy."
        },
        {
            scenario: "You’re asking someone to organize the books. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Bücher",
                "organisieren?"
            ],
            answer: "Kannst du bitte die Bücher organisieren?",
            english: "Can you please organize the books?"
        },
        {
            scenario: "You’re telling someone you’re going to the supermarket. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Supermarkt."
            ],
            answer: "Ich gehe zum Supermarkt.",
            english: "I am going to the supermarket."
        },
        {
            scenario: "You’re asking someone to fix the sink. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "das Waschbecken",
                "reparieren?"
            ],
            answer: "Kannst du bitte das Waschbecken reparieren?",
            english: "Can you please fix the sink?"
        },
        {
            scenario: "You’re telling someone you’re going to the bakery. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zur Bäckerei."
            ],
            answer: "Ich gehe zur Bäckerei.",
            english: "I am going to the bakery."
        },
        {
            scenario: "You’re asking someone to clean the bathroom. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "das Badezimmer",
                "putzen?"
            ],
            answer: "Kannst du bitte das Badezimmer putzen?",
            english: "Can you please clean the bathroom?"
        },
        {
            scenario: "You’re telling someone you’re going to the butcher. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Metzger."
            ],
            answer: "Ich gehe zum Metzger.",
            english: "I am going to the butcher."
        },
        {
            scenario: "You’re asking someone to fix the roof. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "das Dach",
                "reparieren?"
            ],
            answer: "Kannst du bitte das Dach reparieren?",
            english: "Can you please fix the roof?"
        },
        {
            scenario: "You’re telling someone you’re going to the florist. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Blumenladen."
            ],
            answer: "Ich gehe zum Blumenladen.",
            english: "I am going to the florist."
        },
        {
            scenario: "You’re asking someone to clean the windows. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Fenster",
                "putzen?"
            ],
            answer: "Kannst du bitte die Fenster putzen?",
            english: "Can you please clean the windows?"
        },
        {
            scenario: "You’re telling someone you’re going to the tailor. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Schneider."
            ],
            answer: "Ich gehe zum Schneider.",
            english: "I am going to the tailor."
        },
        {
            scenario: "You’re asking someone to fix the fence. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "den Zaun",
                "reparieren?"
            ],
            answer: "Kannst du bitte den Zaun reparieren?",
            english: "Can you please fix the fence?"
        },
        {
            scenario: "You’re telling someone you’re going to the dentist. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Zahnarzt."
            ],
            answer: "Ich gehe zum Zahnarzt.",
            english: "I am going to the dentist."
        },
        {
            scenario: "You’re asking someone to clean the garage. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Garage",
                "aufräumen?"
            ],
            answer: "Kannst du bitte die Garage aufräumen?",
            english: "Can you please clean the garage?"
        },
        {
            scenario: "You’re telling someone you’re going to the optician. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Optiker."
            ],
            answer: "Ich gehe zum Optiker.",
            english: "I am going to the optician."
        },
        {
            scenario: "You’re asking someone to fix the door. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Tür",
                "reparieren?"
            ],
            answer: "Kannst du bitte die Tür reparieren?",
            english: "Can you please fix the door?"
        },
        {
            scenario: "You’re telling someone you’re going to the vet. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Tierarzt."
            ],
            answer: "Ich gehe zum Tierarzt.",
            english: "I am going to the vet."
        },
        {
            scenario: "You’re asking someone to clean the attic. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "den Dachboden",
                "aufräumen?"
            ],
            answer: "Kannst du bitte den Dachboden aufräumen?",
            english: "Can you please clean the attic?"
        },
        {
            scenario: "You’re telling someone you’re going to the hairdresser. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Friseur."
            ],
            answer: "Ich gehe zum Friseur.",
            english: "I am going to the hairdresser."
        },
        {
            scenario: "You’re asking someone to fix the gate. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "das Tor",
                "reparieren?"
            ],
            answer: "Kannst du bitte das Tor reparieren?",
            english: "Can you please fix the gate?"
        },
        {
            scenario: "You’re telling someone you’re going to the mechanic. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zur Werkstatt."
            ],
            answer: "Ich gehe zur Werkstatt.",
            english: "I am going to the mechanic."
        },
        {
            scenario: "You’re asking someone to clean the basement. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "den Keller",
                "aufräumen?"
            ],
            answer: "Kannst du bitte den Keller aufräumen?",
            english: "Can you please clean the basement?"
        },
        {
            scenario: "You’re telling someone you’re going to the jeweler. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Juwelier."
            ],
            answer: "Ich gehe zum Juwelier.",
            english: "I am going to the jeweler."
        },
        {
            scenario: "You’re asking someone to fix the stairs. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Treppe",
                "reparieren?"
            ],
            answer: "Kannst du bitte die Treppe reparieren?",
            english: "Can you please fix the stairs?"
        },
        {
            scenario: "You’re telling someone you’re going to the cobbler. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Schuster."
            ],
            answer: "Ich gehe zum Schuster.",
            english: "I am going to the cobbler."
        },
        {
            scenario: "You’re asking someone to clean the shed. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "den Schuppen",
                "aufräumen?"
            ],
            answer: "Kannst du bitte den Schuppen aufräumen?",
            english: "Can you please clean the shed?"
        },
        {
            scenario: "You’re telling someone you’re going to the locksmith. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Schlosser."
            ],
            answer: "Ich gehe zum Schlosser.",
            english: "I am going to the locksmith."
        },
        {
            scenario: "You’re asking someone to fix the plumbing. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Wasserleitung",
                "reparieren?"
            ],
            answer: "Kannst du bitte die Wasserleitung reparieren?",
            english: "Can you please fix the plumbing?"
        },
        {
            scenario: "You’re telling someone you’re going to the electrician. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Elektriker."
            ],
            answer: "Ich gehe zum Elektriker.",
            english: "I am going to the electrician."
        },
        {
            scenario: "You’re asking someone to clean the patio. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Terrasse",
                "aufräumen?"
            ],
            answer: "Kannst du bitte die Terrasse aufräumen?",
            english: "Can you please clean the patio?"
        },
        {
            scenario: "You’re telling someone you’re going to the plumber. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Klempner."
            ],
            answer: "Ich gehe zum Klempner.",
            english: "I am going to the plumber."
        },
        {
            scenario: "You’re asking someone to fix the heating. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Heizung",
                "reparieren?"
            ],
            answer: "Kannst du bitte die Heizung reparieren?",
            english: "Can you please fix the heating?"
        },
        {
            scenario: "You’re telling someone you’re going to the carpenter. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Tischler."
            ],
            answer: "Ich gehe zum Tischler.",
            english: "I am going to the carpenter."
        },
        {
            scenario: "You’re asking someone to clean the driveway. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Einfahrt",
                "aufräumen?"
            ],
            answer: "Kannst du bitte die Einfahrt aufräumen?",
            english: "Can you please clean the driveway?"
        },
        {
            scenario: "You’re telling someone you’re going to the painter. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Maler."
            ],
            answer: "Ich gehe zum Maler.",
            english: "I am going to the painter."
        },
        {
            scenario: "You’re asking someone to fix the air conditioning. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Klimaanlage",
                "reparieren?"
            ],
            answer: "Kannst du bitte die Klimaanlage reparieren?",
            english: "Can you please fix the air conditioning?"
        },
        {
            scenario: "You’re telling someone you’re going to the roofer. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Dachdecker."
            ],
            answer: "Ich gehe zum Dachdecker.",
            english: "I am going to the roofer."
        },
        {
            scenario: "You’re asking someone to clean the gutters. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "die Dachrinnen",
                "reinigen?"
            ],
            answer: "Kannst du bitte die Dachrinnen reinigen?",
            english: "Can you please clean the gutters?"
        },
        {
            scenario: "You’re telling someone you’re going to the glazier. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Glaser."
            ],
            answer: "Ich gehe zum Glaser.",
            english: "I am going to the glazier."
        },
        {
            scenario: "You’re asking someone to fix the chimney. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "den Schornstein",
                "reparieren?"
            ],
            answer: "Kannst du bitte den Schornstein reparieren?",
            english: "Can you please fix the chimney?"
        },
        {
            scenario: "You’re telling someone you’re going to the welder. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Schweißer."
            ],
            answer: "Ich gehe zum Schweißer.",
            english: "I am going to the welder."
        },
        {
            scenario: "You’re asking someone to clean the roof. What do you say?",
            steps: [
                "Kannst du",
                "bitte",
                "das Dach",
                "reinigen?"
            ],
            answer: "Kannst du bitte das Dach reinigen?",
            english: "Can you please clean the roof?"
        },
        {
            scenario: "You’re at a grocery store and need to buy bread. What do you ask for?",
            steps: [
                "Ich",
                "möchte",
                "ein Brot",
                "bitte!"
            ],
            answer: "Ich möchte ein Brot, bitte!",
            english: "I would like a loaf of bread, please!"
        },
        {
            scenario: "You’re describing your pet dog. What do you say?",
            steps: [
                "Das",
                "ist",
                "mein Hund."
            ],
            answer: "Das ist mein Hund.",
            english: "This is my dog."
        },
        {
            scenario: "You’re pointing out a book on the table. What do you say?",
            steps: [
                "Das",
                "ist",
                "ein Buch."
            ],
            answer: "Das ist ein Buch.",
            english: "This is a book."
        },
        {
            scenario: "You’re asking for a glass of water. What do you say?",
            steps: [
                "Kann ich",
                "ein Glas",
                "Wasser",
                "haben?"
            ],
            answer: "Kann ich ein Glas Wasser haben?",
            english: "Can I have a glass of water?"
        },
        {
            scenario: "You’re describing your car. What do you say?",
            steps: [
                "Das",
                "ist",
                "mein Auto."
            ],
            answer: "Das ist mein Auto.",
            english: "This is my car."
        },
        {
            scenario: "You’re asking for a pen. What do you say?",
            steps: [
                "Kann ich",
                "einen Stift",
                "haben?"
            ],
            answer: "Kann ich einen Stift haben?",
            english: "Can I have a pen?"
        },
        {
            scenario: "You’re pointing out a tree. What do you say?",
            steps: [
                "Das",
                "ist",
                "ein Baum."
            ],
            answer: "Das ist ein Baum.",
            english: "This is a tree."
        },
        {
            scenario: "You’re describing your phone. What do you say?",
            steps: [
                "Das",
                "ist",
                "mein Handy."
            ],
            answer: "Das ist mein Handy.",
            english: "This is my phone."
        },
        {
            scenario: "You’re asking for an apple. What do you say?",
            steps: [
                "Kann ich",
                "einen Apfel",
                "haben?"
            ],
            answer: "Kann ich einen Apfel haben?",
            english: "Can I have an apple?"
        },
        {
            scenario: "You’re pointing out a chair. What do you say?",
            steps: [
                "Das",
                "ist",
                "ein Stuhl."
            ],
            answer: "Das ist ein Stuhl.",
            english: "This is a chair."
        },
        {
            scenario: "You’re describing your laptop. What do you say?",
            steps: [
                "Das",
                "ist",
                "mein Laptop."
            ],
            answer: "Das ist mein Laptop.",
            english: "This is my laptop."
        },
        {
            scenario: "You’re asking for a cup of tea. What do you say?",
            steps: [
                "Kann ich",
                "eine Tasse",
                "Tee",
                "haben?"
            ],
            answer: "Kann ich eine Tasse Tee haben?",
            english: "Can I have a cup of tea?"
        },
        {
            scenario: "You’re pointing out a cat. What do you say?",
            steps: [
                "Das",
                "ist",
                "eine Katze."
            ],
            answer: "Das ist eine Katze.",
            english: "This is a cat."
        },
        {
            scenario: "You’re describing your house. What do you say?",
            steps: [
                "Das",
                "ist",
                "mein Haus."
            ],
            answer: "Das ist mein Haus.",
            english: "This is my house."
        },
        {
            scenario: "You’re asking for a piece of cake. What do you say?",
            steps: [
                "Kann ich",
                "ein Stück",
                "Kuchen",
                "haben?"
            ],
            answer: "Kann ich ein Stück Kuchen haben?",
            english: "Can I have a piece of cake?"
        },
        {
            scenario: "You’re pointing out a flower. What do you say?",
            steps: [
                "Das",
                "ist",
                "eine Blume."
            ],
            answer: "Das ist eine Blume.",
            english: "This is a flower."
        },
        {
            scenario: "You’re describing your bike. What do you say?",
            steps: [
                "Das",
                "ist",
                "mein Fahrrad."
            ],
            answer: "Das ist mein Fahrrad.",
            english: "This is my bike."
        },
        {
            scenario: "You’re asking for a bottle of water. What do you say?",
            steps: [
                "Kann ich",
                "eine Flasche",
                "Wasser",
                "haben?"
            ],
            answer: "Kann ich eine Flasche Wasser haben?",
            english: "Can I have a bottle of water?"
        },
        {
            scenario: "You’re pointing out a table. What do you say?",
            steps: [
                "Das",
                "ist",
                "ein Tisch."
            ],
            answer: "Das ist ein Tisch.",
            english: "This is a table."
        },
        {
            scenario: "You’re describing your watch. What do you say?",
            steps: [
                "Das",
                "ist",
                "meine Uhr."
            ],
            answer: "Das ist meine Uhr.",
            english: "This is my watch."
        },
        {
            scenario: "You’re describing your backpack. What do you say?",
            steps: [
                "Das",
                "ist",
                "mein Rucksack."
            ],
            answer: "Das ist mein Rucksack.",
            english: "This is my backpack."
        },
        {
            scenario: "You’re asking for a newspaper. What do you say?",
            steps: [
                "Kann ich",
                "eine Zeitung",
                "haben?"
            ],
            answer: "Kann ich eine Zeitung haben?",
            english: "Can I have a newspaper?"
        },
        {
            scenario: "You’re pointing out a lamp. What do you say?",
            steps: [
                "Das",
                "ist",
                "eine Lampe."
            ],
            answer: "Das ist eine Lampe.",
            english: "This is a lamp."
        },
        {
            scenario: "You’re describing your wallet. What do you say?",
            steps: [
                "Das",
                "ist",
                "mein Geldbeutel."
            ],
            answer: "Das ist mein Geldbeutel.",
            english: "This is my wallet."
        },
        {
            scenario: "You’re asking for a pair of scissors. What do you say?",
            steps: [
                "Kann ich",
                "eine Schere",
                "haben?"
            ],
            answer: "Kann ich eine Schere haben?",
            english: "Can I have a pair of scissors?"
        },
        {
            scenario: "You’re pointing out a window. What do you say?",
            steps: [
                "Das",
                "ist",
                "ein Fenster."
            ],
            answer: "Das ist ein Fenster.",
            english: "This is a window."
        },
        {
            scenario: "You’re describing your keys. What do you say?",
            steps: [
                "Das",
                "sind",
                "meine Schlüssel."
            ],
            answer: "Das sind meine Schlüssel.",
            english: "These are my keys."
        },
        {
            scenario: "You’re asking for a blanket. What do you say?",
            steps: [
                "Kann ich",
                "eine Decke",
                "haben?"
            ],
            answer: "Kann ich eine Decke haben?",
            english: "Can I have a blanket?"
        },
        {
            scenario: "You’re pointing out a clock. What do you say?",
            steps: [
                "Das",
                "ist",
                "eine Uhr."
            ],
            answer: "Das ist eine Uhr.",
            english: "This is a clock."
        },
        {
            scenario: "You’re describing your sunglasses. What do you say?",
            steps: [
                "Das",
                "ist",
                "meine Sonnenbrille."
            ],
            answer: "Das ist meine Sonnenbrille.",
            english: "These are my sunglasses."
        },
        {
            scenario: "You’re asking for a notebook. What do you say?",
            steps: [
                "Kann ich",
                "ein Notizbuch",
                "haben?"
            ],
            answer: "Kann ich ein Notizbuch haben?",
            english: "Can I have a notebook?"
        },
        {
            scenario: "You’re pointing out a mirror. What do you say?",
            steps: [
                "Das",
                "ist",
                "ein Spiegel."
            ],
            answer: "Das ist ein Spiegel.",
            english: "This is a mirror."
        },
        {
            scenario: "You’re describing your umbrella. What do you say?",
            steps: [
                "Das",
                "ist",
                "mein Regenschirm."
            ],
            answer: "Das ist mein Regenschirm.",
            english: "This is my umbrella."
        },
        {
            scenario: "You’re asking for a pair of shoes. What do you say?",
            steps: [
                "Kann ich",
                "ein Paar",
                "Schuhe",
                "haben?"
            ],
            answer: "Kann ich ein Paar Schuhe haben?",
            english: "Can I have a pair of shoes?"
        },
        {
            scenario: "You’re pointing out a painting. What do you say?",
            steps: [
                "Das",
                "ist",
                "ein Gemälde."
            ],
            answer: "Das ist ein Gemälde.",
            english: "This is a painting."
        },
        {
            scenario: "You’re introducing yourself to a new colleague. What do you say?",
            steps: [
                "Hallo,",
                "ich bin [Your Name].",
                "Freut mich,",
                "dich kennenzulernen!"
            ],
            answer: "Hallo, ich bin [Your Name]. Freut mich, dich kennenzulernen!",
            english: "Hello, I am [Your Name]. Nice to meet you!"
        },
        {
            scenario: "You’re ordering food at a restaurant. How do you ask for the menu?",
            steps: [
                "Könnte ich",
                "bitte",
                "die Speisekarte",
                "sehen?"
            ],
            answer: "Könnte ich bitte die Speisekarte sehen?",
            english: "Could I please see the menu?"
        },
        {
            scenario: "You’re asking for directions to the train station. What do you say?",
            steps: [
                "Könnten Sie",
                "mir bitte",
                "den Weg",
                "zum Bahnhof",
                "sagen?"
            ],
            answer: "Könnten Sie mir bitte den Weg zum Bahnhof sagen?",
            english: "Could you please tell me the way to the train station?"
        },
        {
            scenario: "You’re thanking someone for their help. What do you say?",
            steps: [
                "Vielen Dank",
                "für Ihre",
                "Hilfe!"
            ],
            answer: "Vielen Dank für Ihre Hilfe!",
            english: "Thank you very much for your help!"
        },
        {
            scenario: "You’re apologizing for being late. What do you say?",
            steps: [
                "Es tut",
                "mir leid,",
                "dass ich",
                "zu spät",
                "bin."
            ],
            answer: "Es tut mir leid, dass ich zu spät bin.",
            english: "I am sorry for being late."
        },
        {
            scenario: "You’re asking someone how they are. What do you say?",
            steps: [
                "Wie",
                "geht es",
                "dir?"
            ],
            answer: "Wie geht es dir?",
            english: "How are you?"
        },
        {
            scenario: "You’re telling someone you don’t understand. What do you say?",
            steps: [
                "Ich",
                "verstehe",
                "nicht."
            ],
            answer: "Ich verstehe nicht.",
            english: "I don’t understand."
        },
        {
            scenario: "You’re asking someone to speak more slowly. What do you say?",
            steps: [
                "Könnten Sie",
                "bitte",
                "langsamer",
                "sprechen?"
            ],
            answer: "Könnten Sie bitte langsamer sprechen?",
            english: "Could you please speak more slowly?"
        },
        {
            scenario: "You’re telling someone you’re lost. What do you say?",
            steps: [
                "Ich",
                "habe mich",
                "verlaufen."
            ],
            answer: "Ich habe mich verlaufen.",
            english: "I am lost."
        },
        {
            scenario: "You’re asking someone for the time. What do you say?",
            steps: [
                "Könnten Sie",
                "mir bitte",
                "sagen,",
                "wie spät",
                "es ist?"
            ],
            answer: "Könnten Sie mir bitte sagen, wie spät es ist?",
            english: "Could you please tell me what time it is?"
        },
        {
            scenario: "You’re asking someone to repeat themselves. What do you say?",
            steps: [
                "Könnten Sie",
                "das bitte",
                "wiederholen?"
            ],
            answer: "Könnten Sie das bitte wiederholen?",
            english: "Could you please repeat that?"
        },
        {
            scenario: "You’re telling someone you’re in a hurry. What do you say?",
            steps: [
                "Ich",
                "bin",
                "in Eile."
            ],
            answer: "Ich bin in Eile.",
            english: "I am in a hurry."
        },
        {
            scenario: "You’re asking someone to help you. What do you say?",
            steps: [
                "Könnten Sie",
                "mir bitte",
                "helfen?"
            ],
            answer: "Könnten Sie mir bitte helfen?",
            english: "Could you please help me?"
        },
        {
            scenario: "You’re telling someone you’re feeling sick. What do you say?",
            steps: [
                "Mir",
                "ist",
                "schlecht."
            ],
            answer: "Mir ist schlecht.",
            english: "I feel sick."
        },
        {
            scenario: "You’re asking someone to wait for a moment. What do you say?",
            steps: [
                "Könnten Sie",
                "bitte",
                "einen Moment",
                "warten?"
            ],
            answer: "Könnten Sie bitte einen Moment warten?",
            english: "Could you please wait a moment?"
        },
        {
            scenario: "You’re telling someone you’re busy. What do you say?",
            steps: [
                "Ich",
                "bin",
                "beschäftigt."
            ],
            answer: "Ich bin beschäftigt.",
            english: "I am busy."
        },
        {
            scenario: "You’re asking someone to write something down. What do you say?",
            steps: [
                "Könnten Sie",
                "das bitte",
                "aufschreiben?"
            ],
            answer: "Könnten Sie das bitte aufschreiben?",
            english: "Could you please write that down?"
        },
        {
            scenario: "You’re telling someone you’re going home. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "nach Hause."
            ],
            answer: "Ich gehe nach Hause.",
            english: "I am going home."
        },
        {
            scenario: "You’re asking someone to turn on the TV. What do you say?",
            steps: [
                "Könnten Sie",
                "bitte",
                "den Fernseher",
                "einschalten?"
            ],
            answer: "Könnten Sie bitte den Fernseher einschalten?",
            english: "Could you please turn on the TV?"
        },
        {
            scenario: "You’re telling someone you’re going to the airport. What do you say?",
            steps: [
                "Ich",
                "gehe",
                "zum Flughafen."
            ],
            answer: "Ich gehe zum Flughafen.",
            english: "I am going to the airport."
        },
        {
            scenario: "You’re asking someone if they speak English. What do you say?",
            steps: [
                "Sprechen Sie",
                "Englisch?"
            ],
            answer: "Sprechen Sie Englisch?",
            english: "Do you speak English?"
        },
        {
            scenario: "You’re telling someone you’re learning German. What do you say?",
            steps: [
                "Ich",
                "lerne",
                "Deutsch."
            ],
            answer: "Ich lerne Deutsch.",
            english: "I am learning German."
        },
        {
            scenario: "You’re asking someone where the restroom is. What do you say?",
            steps: [
                "Wo",
                "ist",
                "die Toilette?"
            ],
            answer: "Wo ist die Toilette?",
            english: "Where is the restroom?"
        },
        {
            scenario: "You’re telling someone you’re hungry. What do you say?",
            steps: [
                "Ich",
                "habe",
                "Hunger."
            ],
            answer: "Ich habe Hunger.",
            english: "I am hungry."
        },
        {
            scenario: "You’re asking someone if they have a recommendation. What do you say?",
            steps: [
                "Haben Sie",
                "eine",
                "Empfehlung?"
            ],
            answer: "Haben Sie eine Empfehlung?",
            english: "Do you have a recommendation?"
        },
        {
            scenario: "You’re telling someone you’re tired. What do you say?",
            steps: [
                "Ich",
                "bin",
                "müde."
            ],
            answer: "Ich bin müde.",
            english: "I am tired."
        },
        {
            scenario: "You’re asking someone if they want to join you. What do you say?",
            steps: [
                "Möchtest du",
                "mitkommen?"
            ],
            answer: "Möchtest du mitkommen?",
            english: "Do you want to join me?"
        },
        {
            scenario: "You’re telling someone you’re excited. What do you say?",
            steps: [
                "Ich",
                "bin",
                "aufgeregt."
            ],
            answer: "Ich bin aufgeregt.",
            english: "I am excited."
        },
        {
            scenario: "You’re asking someone if they have change. What do you say?",
            steps: [
                "Haben Sie",
                "Kleingeld?"
            ],
            answer: "Haben Sie Kleingeld?",
            english: "Do you have change?"
        },
        {
            scenario: "You’re telling someone you’re cold. What do you say?",
            steps: [
                "Mir",
                "ist",
                "kalt."
            ],
            answer: "Mir ist kalt.",
            english: "I am cold."
        },
        {
            scenario: "You’re asking someone if they like the food. What do you say?",
            steps: [
                "Schmeckt dir",
                "das Essen?"
            ],
            answer: "Schmeckt dir das Essen?",
            english: "Do you like the food?"
        },
        {
            scenario: "You’re telling someone you’re happy. What do you say?",
            steps: [
                "Ich",
                "bin",
                "glücklich."
            ],
            answer: "Ich bin glücklich.",
            english: "I am happy."
        },
        {
            scenario: "You’re asking someone if they’ve been here before. What do you say?",
            steps: [
                "Warst du",
                "schon einmal",
                "hier?"
            ],
            answer: "Warst du schon einmal hier?",
            english: "Have you been here before?"
        },
        {
            scenario: "You’re telling someone you’re confused. What do you say?",
            steps: [
                "Ich",
                "bin",
                "verwirrt."
            ],
            answer: "Ich bin verwirrt.",
            english: "I am confused."
        },
        {
            scenario: "You’re asking someone if they can take a photo for you. What do you say?",
            steps: [
                "Könnten Sie",
                "ein Foto",
                "für mich",
                "machen?"
            ],
            answer: "Könnten Sie ein Foto für mich machen?",
            english: "Could you take a photo for me?"
        },
    ];

// Export wordTranslations and scenarios
export { wordTranslations, scenarios };
