class Question{
    constructor(){
        this.input = createInput("Name");
        this.input2 = createInput('Option');
        this.title = createElement('h2');
        this.question = createElement('h2');
        this.option1 = createButton('h2');
        this.option2 = createButton('h2');
    }
    hide(){

    }

    display(){
        this.title.html("Quiz Game");
        this.title.position(350, 0);
        this.title.scale = 3;

        this.input.position(displayWidth/2 - 550 , displayHeight/2 - 150);
    this.input2.position(displayWidth/2  - 350, displayHeight/2 - 150);

    this.question.html("Question- What non living thing has 5 fingers? ");
    this.question.position(150 , 80);
    this.option1.html("1) Gloves");
    this.option1.position(150,115);
    this.option2.html("2) Pencil");
    this.option2.position(150,138);
    if(mousePressedOver(option1)){
        print("Correct Answer!!",100 ,200)
      }
    }
}