
const game = document.querySelector('.game')

const emojis = [
  "🍇",  "🍇",  "🍉",  "🍉",  "🚗",  "🚗",  "🍌",  "🍌",
  "🏠",  "🏠",  "🥭",  "🥭",  "🍎",  "🍎",  "🐯",  "🐯"  
];

var shuffle_emoji = emojis.sort( () => (Math.random() > 0.5) ? 2 : -1)

const count = document.querySelector('.count')
let clickCount = 0;


const updateCount = () => {
    count.textContent = clickCount;
}

for(var i = 0; i < emojis.length; i++){
    let box = document.createElement('div');
    box.className = 'items'
    box.innerHTML = shuffle_emoji[i]

    box.onclick = function(){

        clickCount++;
        updateCount();

        this.classList.add('openBox')
        
        

        setTimeout(()=> {
            if(document.querySelectorAll('.openBox').length > 1){
                if(document.querySelectorAll('.openBox')[0].innerHTML === document.querySelectorAll('.openBox')[1].innerHTML){
                    document.querySelectorAll('.openBox')[0].classList.add('boxMatch')
                    document.querySelectorAll('.openBox')[1].classList.add('boxMatch')

                    document.querySelectorAll('.openBox')[1].classList.remove('openBox')
                    document.querySelectorAll('.openBox')[0].classList.remove('openBox')

                    

                    if(document.querySelectorAll('.boxMatch').length === emojis.length){
                        alert("win")
                    }

                }
                else{ 
                    
                    document.querySelectorAll('.openBox')[1].classList.remove('openBox')
                    document.querySelectorAll('.openBox')[0].classList.remove('openBox')
                    
                    
                }
            }
        },2000)
    }

    game.appendChild(box)

}








