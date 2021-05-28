class Form {
    constructor() {
        this.title = createElement("h1");
        this.titleSec = createElement("h2");
        this.begin = createButton("BEGIN");

        // displayStory()
        this.instructions = createButton("INSTRUCTIONS");

        // displayInstructions()
        this.play = createButton("PLAY");
    }
    hide() {
        this.title.hide();
        this.titleSec.hide();
        this.begin.hide();
        this.play.hide();
        this.instructions.hide();
    }
    display() {
        background(screen);
        this.title.html("The Misery Of Thief");
        this.title.position(370, 200);
        this.titleSec.html("Made By Shivanshu Pattnaik");
        this.titleSec.position(350, 300);
        this.begin.position(570, 440);
        this.begin.mousePressed(() => {
            gameState = 1;
            this.title.hide();
            this.begin.hide();
            this.titleSec.hide();
        });
        this.play.position(-100, -100);
        this.instructions.position(-100, -100);
    }
    displayStory() {
        background(bg);
        this.instructions.position(530, 600);
    }
    displayInstructions() {
        background(bg);
        this.play.position(570, 670);
        this.play.mousePressed(() => {
            gameState = 3;
        });
    }
}