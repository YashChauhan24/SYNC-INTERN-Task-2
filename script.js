const questions=[
    {
        'que':'Which of the following option leads to the portability and security of Java?',
        'a':'Bytecode is executed by JVM',
        'b':'The applet makes the Java code secure and portable',
        'c':'Use of exception handling',
        'd':'Dynamic binding between objects',
        'correct':'a'
    },
    {
        'que':'WWhich of the following is not a Java features?',
        'a':'Dynamic',
        'b':'Architecture Neutral',
        'c':'Use of pointers',
        'd':'Object-oriented',
        'correct':'c'
    },
    {
        'que':'What is the return type of the hashCode() method in the Object class?',
        'a':'Object',
        'b':'int',
        'c':'long',
        'd':'void',
        'correct':'b'
    },
    {
        'que':'Which of the following is a valid long literal?',
        'a':'ABH8097',
        'b':'L990023',
        'c':'904423',
        'd':'0xnf029L',
        'correct':'d'
    },
    {
        'que':'In which process, a local variable has the same name as one of the instance variables?',
        'a':'Serialization',
        'b':'Variable Shadowing',
        'c':'Abstraction',
        'd':'Multi-threading',
        'correct':'b'
    },
    {
        'que':'Which of the following is true about the anonymous inner class?',
        'a':'It has only methods',
        'b':'Objects cant be created',
        'c':'It has a fixed class name',
        'd':'It has no class name',
        'correct':'d'
    },
    {
        'que':'Which of the following is an immediate subclass of the Panel class?',
        'a':'Applet class',
        'b':'Window class',
        'c':'Frame class',
        'd':'Dialog class',
        'correct':'a'
    },
    {
        'que':'In which memory a String is stored, when we create a string using new operator?',
        'a':'Stack',
        'b':'String memory',
        'c':'Heap memory',
        'd':'Random storage space',
        'correct':'c'
    },
    {
        'que':'Where can Coral reefs be found in India?',
        'a':'The Malabar Coast',
        'b':'Rameshwaram',
        'c':'Trivandrum',
        'd':'Mahabalipuram',
        'correct':'b'
    },
    {
        'que':'The United Nations Organization has its Headquarters at',
        'a':'Bali',
        'b':'Hague',
        'c':'New York',
        'd':'Washington DC',
        'correct':'c'
    }
]
let index=0;
let total=questions.length;
let right=0,wrong=0;
const optioninput=document.querySelectorAll(".options")
const queBox=document.getElementById("queBox")
var prebtn = document.getElementById("btn1")
var qno=document.getElementById("qno")

let totaltime=300;
let min=0;
let sec=0;
let counter=0;

let timer=setInterval(function(){
    counter++;
    min=Math.floor((totaltime-counter)/60);
    sec=totaltime-min*60-counter;
    console.log(min);
    console.log(sec);
    document.getElementById('time').innerHTML=min +":"+ sec;
    if(counter==totaltime){
        alert("Time's up!!");
        return endQuiz()
        clearInterval(timer);
    }
},1000);

const loadquestion=()=>{

    if(index==total){
        return endQuiz()
    }
    reset();
    const data=questions[index]
    console.log(data)
    queBox.innerText=`${index+1}) ${data.que}`;
    document.getElementById('qno').innerHTML=`
        (${index+1} of ${total})`

    optioninput[0].nextElementSibling.innerText=data.a;
    optioninput[1].nextElementSibling.innerText=data.b;
    optioninput[2].nextElementSibling.innerText=data.c;
    optioninput[3].nextElementSibling.innerText=data.d;
}

const submitquiz=()=>{
    const data=questions[index]
    const ans=getAnswer()
    if(ans==data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    console.log(right);
    //console.log(index);
    if(index>=1){
        prebtn.disabled=false;
    }
    else
    {
        prebtn.disabled=true;
    }
    loadquestion();
    return;
}

const previous=()=>{
    index--;
    right--;
    //console.log(index);
    loadquestion();
    console.log(right);
    return;
}

const getAnswer=()=>{
    let answer;
    optioninput.forEach(
        (input)=>{
            if(input.checked){
               answer= input.value;
            }
        }
    )
    return answer;
}
const reset=()=>{
    optioninput.forEach(
        (input)=>{
            input.checked=false
        }
    )
};
const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
    <i class="fa-solid fa-party-horn"></i>
    <i class="fa-sharp fa-solid fa-gift"></i>
    <h3>Thank You !!</h3>
    <h3>You have completed the Quiz</h3>
    <h2>${right} out of ${total} are correct </h2>
    <a href="dashboard.html" class="btn btn-warning">Play Again</a>
    <a href="index.html" class="btn btn-danger">Quit Quiz</a>
    </div>`
}

loadquestion();