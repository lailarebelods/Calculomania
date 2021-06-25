pontos = 0;
question = 2;

const draggables = document.querySelectorAll('.draggable');
const contents = document.querySelectorAll('.content');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', (e) => {
        const finalTarget = e.path[1].childNodes

        if(finalTarget.length > 4){
            contents.forEach((content) => { 
                const id = document.getElementById('correct')
                const strange = id.childNodes[4]
                content.appendChild(strange)
            });
        }
        draggable.classList.remove('dragging');
    });
});

contents.forEach(content => {
    content.addEventListener('dragover', e => {
        e.preventDefault();
        const afterElement = getDragAfterElement(content, e.clientY);
        const draggable = document.querySelector('.dragging');
        if (afterElement == null){
            content.appendChild(draggable);
        } else {
            content.insertBefore(draggable, afterElement);
        }

    });
});

function getDragAfterElement(content, y) {
    const draggableElements = [...content.querySelectorAll('.draggable:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
};

var answers = {};

var question_zero = document.getElementById('question-0');
var question_one = document.getElementById('question-1');
var question_two = document.getElementById('question-2');
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');
var question_nine = document.getElementById('question-9');
var question_ten = document.getElementById('question-10');
var question_eleven = document.getElementById('question-11');
var question_twelve = document.getElementById('question-12');
var question_thirteen = document.getElementById('question-13');
var question_fourteen = document.getElementById('question-14');
var question_fifthteen = document.getElementById('question-15');
var question_sixteen = document.getElementById('question-16');

var submitTime = document.getElementById('submitTime');
var submit0 = document.getElementById('submit0');
var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');
var submit10 = document.getElementById('submit10');
var submit11 = document.getElementById('submit11');
var submit12 = document.getElementById('submit12');
var submit13 = document.getElementById('submit13');
var submit14 = document.getElementById('submit14');
var submit15 = document.getElementById('submit15');
var submit16 = document.getElementById('submit16');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();
    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

function timeQuestion() {
    var el1 = document.getElementById('question-1');
    var el2 = document.getElementById('question-2');
    var el3 = document.getElementById('question-3');
    var el4 = document.getElementById('question-4');
    var el5 = document.getElementById('question-5');
    var el6 = document.getElementById('question-6');
    var el7 = document.getElementById('question-7');
    var el8 = document.getElementById('question-8');
    var el9 = document.getElementById('question-9');
    var el10 = document.getElementById('question-10');
    var el11 = document.getElementById('question-11');
    var el12 = document.getElementById('question-12');
    var el13 = document.getElementById('question-13');
    var el14 = document.getElementById('question-14');
    var el15 = document.getElementById('question-15');
    var el16 = document.getElementById('question-16');


    el1.style.display = "none";
    el2.style.display = "none";
    el3.style.display = "none";
    el4.style.display = "none";
    el5.style.display = "none";
    el6.style.display = "none";
    el7.style.display = "none";
    el8.style.display = "none";
    el9.style.display = "none";
    el10.style.display = "none";
    el11.style.display = "none";
    el12.style.display = "none";
    el13.style.display = "none";
    el14.style.display = "none";
    el15.style.display = "none";
    el16.style.display = "block";
}

function getInfoBasedOnScore(){
    if(pontos < 7){
        var score_info = "Sua nota ficou abaixo de 7 pontos! Continue praticando, sabemos que você consegue. Confira o gabarito abaixo para estudar:";
    } else if(pontos > 6 && pontos < 13){
        var score_info = "Sua nota está numa boa média! Confira o gabarito abaixo para estudar melhor suas falhas:"
    } else {
        var score_info = "Excelente! Sua nota supera expectativas! Continue assim. O gabarito de seus exercícios está abaixo:"
    }
    return score_info;
}

function startTimer(duration, display, execute) {
    var timer = duration, minutes, seconds;
    
    if(execute){
        setInterval(function () {
            if(question !== 0){
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                display.textContent = minutes + ":" + seconds;
                if (--timer < 0) {
                    timer = 99999;
                    alert('Calculomania®\n\n O tempo acabou! Confira sua pontuação final agora.');
                    timeQuestion();
                    document.getElementById('timer').remove();
                    document.getElementById("printtotalscore").innerHTML = pontos;
                    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
                }
            } else {
                display.textContent = ""
                clearInterval()
                return
            }
        }, 1000);
    } else {
        return
    }
}

submitTime.addEventListener('click', function(){
    nextQuestion(1);
    growProgressBar('0%');
    const ab = ()=>{
        var duration = 60 * 12;
        startTimer(duration, document.getElementById('timer'),true)
    }
    ab()
})

submit0.addEventListener('click', function(){
    nextQuestion(1);
    growProgressBar('0%');
})

submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('6%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('12%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('18%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('24%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
    growProgressBar('30%');
})
submit6.addEventListener('click', function(){
    nextQuestion(7);
    growProgressBar('36%');
})
submit7.addEventListener('click', function(){
    nextQuestion(8);
    growProgressBar('48%');
})
submit8.addEventListener('click', function(){
    nextQuestion(9);
    growProgressBar('54%');
})
submit9.addEventListener('click', function(){
    nextQuestion(10);
    growProgressBar('60%');
})
submit10.addEventListener('click', function(){
    nextQuestion(11);
    growProgressBar('66%');
})
submit11.addEventListener('click', function(){
    nextQuestion(12);
    growProgressBar('72%');
})
submit12.addEventListener('click', function(){
    nextQuestion(13);
    growProgressBar('78%');
})
submit13.addEventListener('click', function(){
    nextQuestion(14);
    growProgressBar('82%');
})
submit14.addEventListener('click', function(){
    nextQuestion(15);
    growProgressBar('90%');
})
submit15.addEventListener('click', function(){
    nextQuestion(16);
    growProgressBar('100%');
    document.getElementById("printtotalscore").innerHTML = pontos;
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
    document.getElementById('timer').remove()
    startTimer(0,numberOne,false)
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}

function alert_instrucoes() {
    alert("Calculomania®: Arraste para ganhar!\n\nCom o mouse, segure, arraste e solte o retângulo com a resposta correta no espaço em branco à direita. Em seguida, clique em “Enviar resposta”. Acima, você poderá ver se acertou a questão (ou não). Seus resultados e os gabaritos estarão ao final do jogo.");
}

function alert_comeco_cron() {
    alert("Calculomania®\n\n O cronômetro vai começar a marcar o tempo! Boa sorte!");
}

function alert_comeco(){
    alert("Calculomania®\n\n O jogo vai começar! Boa sorte!");
}

function alert_resultado1() {
    const numberOne = document.getElementById('question-1');
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado2() {
    const numberOne = document.getElementById('question-2')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado3() {
    const numberOne = document.getElementById('question-3')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado4() {
    const numberOne = document.getElementById('question-4')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado5() {
    const numberOne = document.getElementById('question-5')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado6() {
    const numberOne = document.getElementById('question-6')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado7() {
    const numberOne = document.getElementById('question-7')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado8() {
    const numberOne = document.getElementById('question-8')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado9() {
    const numberOne = document.getElementById('question-9')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado10() {
    const numberOne = document.getElementById('question-10')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado11() {
    const numberOne = document.getElementById('question-11')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');

    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado12() {
    const numberOne = document.getElementById('question-12')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');

    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado13() {
    const numberOne = document.getElementById('question-13')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');

    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado14() {
    const numberOne = document.getElementById('question-14')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');

    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_resultado15() {
    const numberOne = document.getElementById('question-15')
    const response = numberOne.childNodes[5].childNodes[1].childNodes[3].getAttribute('aria-valuetext');
    
    document.getElementById('timer').remove()
    startTimer(0,numberOne,false)

    if(Number(response) === 1) {
        alert("Calculomania®\n\nParabéns! Você acertou a questão!");
        pontos++;
    } else {
        alert("Calculomania®\n\nVocê errou a questão :( Mas vamos pra próxima!");
    }
}

function alert_gabarito1() {
    alert("Calculomania®\n\nPergunta:\nSuponha que sobre uma mesa haja um livro. Qual será a força que a mesa exerce sobre o livro, sabendo que a força com que a Terra o atrai é de 10N?\n\nResposta:\nComo o livro se encontra em equilíbrio sobre a mesa, a força total que atua sobre ele é zero. Através da força resultante, temos:\n" + "Fr = m . a\n" + "F - P = 0\n" + "F = P => F = 10N");
}

function alert_gabarito2() {
    alert("Calculomania®\n\nPergunta:\nSuponha que você tenha uma partícula em movimento circular uniforme. Podemos dizer que:\n\nResposta:\nPor se tratar de um movimento circular uniforme, isto implica que a partícula tem módulo da velocidade vetorial constante.\nAlternativa B!");
}

function alert_gabarito3() {
    alert("Calculomania®\n\nPergunta:\nUm veículo de passeio consegue acelerar de 0 a 100 km/h em cerca de 11s. Determine sua aceleração média em m/s² e assinale a alternativa correspondente.\n\nResposta:\nPara resolvermos esse exercício, devemos usar a fórmula da velocidade média, além disso, também é necessário converter a velocidade que está em quilômetros por hora para metros por segundo. Para tanto, devemos dividir a velocidade pelo fator 3,6. Observe os calculos:\n V = 100 km/h / 3,6 = 27,7 m/s \n a = 27,7 / 11 \n a = 2,5 m/s²");
}

function alert_gabarito4() {
    alert("Calculomania®\n\nPergunta:\nNo alto da torre de uma emissora de televisão, duas luzes'piscam' com frequências diferentes. A primeira 'pisca' 15 vezes por minuto e a segunda 'pisca' 10 vezes por minuto. Se num certo instante, as luzes piscam simultaneamente, após quantos segundos elas voltarão a piscar simultaneamente?\n\nResposta:\nComo o exercício nos questiona 'Após quantos segundos elas voltarão a piscar simultaneamente', precisamos converter informações dadas para as medidas de 'segundos'. Portanto, se a primeira torre 'pisca' 15 vezes por minuito, sabendo que um minuto equivale a 60 segundos, podemos fazer 60 / 15 = 4, pois as luzews da primeira piscam de 4 em 4 segundos. Equivalentemente, os cálculos para a segunda torre são 60 / 10 = 6, o que nos indica que as luzes da segunda torre piscam de 6 em 6 segundos. \n\n 4, 6 | 2\n 2, 3 | 2\n 1, 3 | 3\n 1, 1 | 3 * 2 * 2 = 12\n\n Multiplicando os números que dividem o 4 e o 6, temos 2 x 1 x 3 = 12. Portanto, MMC (4,6) = 12. Logo, as torres piscarão juntas a cada 12 segundos.");
}

function alert_gabarito5() {
    alert("Calculomania®\n\nPergunta:\nUm ponto material executa um movimento acelerado, de modo que a sua velocidade passa a ser de 30 m/s após partir do repouso, em um intervalo de tempo de 5s. Assinale a alternativa que indica corretamente a aceleração média desenvolvida por ele.\n\nResposta:\nPara calcularmos a aceleração média do ponto material, utilizaremos a equação da aceleração média. De acordo com o texto, o móvel partiu do repouso, logo, sua velocidade inicial era 0 e sua velocidade final foi de 30 m/s, dessa forma, devemos resolver o seguinte cálculo:\n a = 30 - 0 / 5 \n a = 6 m/s²");
}

function alert_gabarito6() {
    alert("Calculomania®\n\nPergunta:\nDentro de um elevador, um objeto de peso 100N está apoiado sobre uma superfície. O elevador está descendo e freando com aceleração vertical e para cima de 0,1m/s². Considere a aceleração da gravidade como 10m/s². Durante o tempo da frenagem, a força que sustenta o objeto vale, em newtons:\n\nResposta:\nAplicando a segunda lei de Newton, temos: \nFʀ = m . a  >>  N - P = m . a \nN - m . g = m . a  >>  N = m . a + m . g \nN = m (a + g)  >>  N = 10 (0,1 + 10) \nN = 10 . 10,1 = 101 N");
}

function alert_gabarito7() {
    alert("Calculomania®\n\nPergunta:\nAo fornecer 300 calorias de calor para um corpo, verifica-se como consequência uma variação da temperatura igual a 50°C. Determine a capacidade térmica deste corpo.\n\nResposta:\nCalculando capacidade térmica:\n\nC = Q/△T\nC = 300/50\nC = 6 cal/°C");
}

function alert_gabarito8() {
    alert("Calculomania®\n\nPergunta:\nEm uma manhã de céu azul, um banhista na praia observa que a areia está muito quente e a água do mar está muito fria. De noite, esse mesmo banhista observa que a areia da praia está fria e a água do mar está morna. O fenômeno observado deve-se ao fato que:\n\nResposta:\nSe as massas iguais de água e areia receberem ou perderem quantidades iguais de calor, a variação de temperatura da água será menor em módulo que a da areia, porque a água tem maior calor específico. \n Resposta: A!");
}

function alert_gabarito9() {
    alert("Calculomania®\n\nPergunta:\nUm amolador de facas, ao operar um esmeril, é atingido por fagulhas incandescentes, mas não se queima. Isso acontece porque as fagulhas:\n\nResposta:\nC = Q / △T.\n\n Sendo a capacidade térmica C das fagulhas muito pequena, elas transferem pouco calor para o operador, o que é insuficiente para o queimar.\nResposta: C");
}

function alert_gabarito10() {
    alert("Calculomania®\n\nPergunta:\nQual a área total de um cubo cujas arestas medem 15 centímetros?\n\nResposta:\nA fórmula que pode ser usada para calcular a área total do cubo é:\n\nA = 6l²\n\nSubstituindo a aresta do cubo nesta fórmula, temos:\n\nA = 6 . 15²\nA = 6 . 225\nA = 1350cm²\n\nResposta: B");
}

function alert_gabarito11() {
    alert("Calculomania®\n\nPergunta:\nQual a diferença entre as áreas de dois cubos que possuem arestas iguais a 10 e a 25 cm, respectivamente?\n\nResposta:\nUsando a fórmula para calcular a área do cubo, calcularemos a área para cada um deles separadamente. Em seguida, faremos a subtração entre os resultados obtidos:\n\nA₁ = 6l²\nA₁ = 6 . 10²\nA₁ = 6 . 100\nA₁ = 600 cm²\n\nA₂ = 6l²\nA₂ = 6 . 25²\nA₂ = 6 . 625\nA₂ = 3750 cm²\n\nA₂ - A₁ = 3750 cm² - 600 cm² = 3150 cm²\nResposta: A");
}

function alert_gabarito12() {
    alert("Calculomania®\n\nPergunta:\nSeja a função f(x) = x2 e a função g(x) = x + 3.<br> Qual o valor de g(f(– 1))?\n\nResposta:\nPara compor duas funções, basta colocar a g no lugar de x na função f:\n\ng(f(x)) = x2 + 3\n\nSubstituindo x por – 1, teremos:\n\ng(f(x)) = x2 + 3\ng(f(– 1)) = (– 1)2 + 3\ng(f(– 1)) = 1 + 3\ng(f(– 1)) = 4\n\nAlternativa A!");
}

function alert_gabarito13() {
    alert("Calculomania®\n\nPergunta:\nO valor de √2 + √3.√18 é igual a:\n\nResposta:\nSabendo que uma das propriedades da radiciação garante que o produto de raízes é igual à raiz do produto, temos:\n\n√2 + √3.√18 = √2 + √(3.18) = √2 + √54\n\nAtravés da fatoração, sabemos que 54 = 2 . 3 . 3 . 3 = 2 . 3² . 3. Podemos então reescrever a raiz de 54 como:\n\n√54 = √(2 . 3² . 3) = √2 . √3² . √3 = √2 . 3.√3\n\nSubstituindo √2 . 3.√3 no lugar de √54, temos:\n\n√2 + √54 = √2 + √2 . 3.√3 = √2 . (1 + 3√3)\n\nPortanto, a alternativa correta é a letra E!");
}

function alert_gabarito14() {
    alert("Calculomania®\n\nPergunta:\nImagine a seguinte situação: um operário da construção civil precisa carregar um saco de cimento de 50 kg. Ele levanta esse saco de cimento e se desloca por 20 metros na horizontal. Adote g = 10 m/s². Calcule o trabalho realizado pela força do operário sobre o cimento.\n\nResposta:\nA resposta é zero. Embora o operário exerça uma força em módulo igual ao peso do saco de cimento, que é de 500 N, essa força é na vertical, enquanto seu deslocamento é na horizontal, ou seja, o ângulo entre a força e o deslocamento é 90°. Quando a força e o deslocamento formam um ângulo igual a 90°, o trabalho realizado por essa força é nulo. Veja: T = F . d . cos θ\n\nθ = 90°, logo cos 90° = 0, então T = 0.\n\nAlternativa C!");
}

function alert_gabarito15() {
    alert("Calculomania®\n\nPergunta:\nUm objeto de massa 5 kg é deixado cair de uma determinada altura. Ele chega ao solo com energia cinética igual 2000 J. Determine a altura que o objeto foi abandonado. Despreze o atrito com o ar e considere g = 10 m/s²\n\nResposta:\nPela conservação da energia mecânica (E) temos:\n\nEinicial = Efinal\n\nNo início só temos energia potencial gravitacional, pois o objeto é abandonado do repouso. No final , ao chegar no solo, toda energia potencial gravitacional se converteu em energia cinética.\n\nEntão:m .g. h = 2000, logo 5 . 10 . h = 2000\nh = 2000/50\nh = 40 m");
}