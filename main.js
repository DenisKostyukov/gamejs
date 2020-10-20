const $btn = document.getElementById('btn-kick');
const $btn1 = document.getElementById('btn-shot');
const $logs = document.querySelector('#logs');
const character = {
    name: 'Pikachu',
    type: 'electric',
    weakness: ['fighting','water','some'],
    resistance: ['steel'],
    defaultHP:100,
    damageHP:100,
    changeHP:function changeHP(count){
    
    if(this.damageHP<count){
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        $btn.disabled = true;
    } else {
        this.damageHP -= count;
    }
    
    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    
    const $p = document.createElement('p');
    $p.innerText = log;
    $logs.insertBefore($p, $logs.children[0]);
    console.log(log);
    renderHP.call(this);
    },

    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
};
const enemy = {
    name: 'Charmander',
    type: 'fighting',
    weakness: ['steel'],
    resistance: ['fighting','water','some'],
    defaultHP:100,
    damageHP:100,
    changeHP:function (count){
    
    if(this.damageHP<count){
        this.damageHP = 0;
        alert('Бедный ' + this.name + ' проиграл бой');
        $btn.disabled = true;
    } else {
        this.damageHP -= count;
    }
    
    const log = this === enemy ? generateLog(this, character, count) : generateLog(this, enemy, count);
    
    const $p = document.createElement('p');
    $p.innerText = log;
    $logs.insertBefore($p, $logs.children[0]);
    console.log(log);
    renderHP.call(this);
    },

  
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
};
function generateLog(firstPerson, secondPerson, dmg){
    const logs = [
        `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${dmg} : [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${dmg} : [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${dmg} : [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${dmg} : [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком \<вырезанно цензурой\> противника. -${dmg} : [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${dmg} : [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${dmg} : [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника -${dmg} : [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${dmg} : [${firstPerson.damageHP}/${firstPerson.defaultHP}]`,
        `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${dmg} : [${firstPerson.damageHP}/${firstPerson.defaultHP}]`
    ];

    return logs[random(logs.length) - 1]
}
$btn.addEventListener('click', function() {
    console.log('Kick');
    character.changeHP(random(20));
    enemy.changeHP(random(20));
});
$btn1.addEventListener('click', function() {
    console.log('Ulta');
    character.changeHP(random(500));
    enemy.changeHP(random(500));
});
function init() {
    console.log('Start Game!');
    renderHP.apply(character);
    renderHP.apply(enemy);
}
function renderHP(){
    renderHPLife.apply(this);
    renderProgressbarHP.apply(this);
    
}
function renderHPLife(){
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
}
function renderProgressbarHP(){
    this.elProgressbar.style.width = this.damageHP + '%';
}
function random(num){
    return Math.ceil(Math.random()*num);
}
init();