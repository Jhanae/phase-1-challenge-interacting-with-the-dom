//---------------Timer---------------------//
document.addEventListener('DOMContentLoaded', function(){
    let timer = document.querySelector('#counter')
    let count = document.querySelector('#counter').childElementCount
    const start = document.querySelector('#counter').childElementCount
    let t = setInterval(countDown, 900)
    function countDown() {
        timer.innerHTML = count
        count += 1;
    }
    //---------------Minus---------------------//
    let minus = document.querySelector('#minus');
    minus.addEventListener('click', function(){ count -= 2})

    //---------------Add---------------------//
    let add = document.querySelector('#plus');
    add.addEventListener('click', function(){ count += 1})
    
    //---------------heart---------------------//
    let like = document.querySelector('#heart');
    like.addEventListener('click', function(){ document.querySelector('.likes').textContent = "This was liked!"})

    //---------------pause---------------------//
    let pause = document.querySelector('#pause');
    let toggle = false
    pause.addEventListener('click', pauseTimer)
    function pauseTimer(){
        toggle = !toggle    
        if(toggle === true){
            clearInterval(t)
        }
        else if (toggle === false){
            clearInterval(t)
            setInterval(countDown,900)
        }
          
        console.log(toggle)
    }
    //---------------Comment---------------------//
    let commentForm = document.querySelector('#submit')
    commentForm.addEventListener('submit', function(){
         //let comment = document.querySelector('#comment-input')
        // e.preventDefault()
        let space = document.querySelector('.comments')
        space.textContent = comment-input.value
    })

});
   
// document.querySelector('#cat-form').addEventListener('submit', (e => {
//     e.preventDefault()
//     let animals = {
//         name: e.target.name.value,
//         imageUrl: e.target.imageUrl.value,
//         description:e.target.description.value
//         donation: 0
//     }
// document.querySelector('#cat-form').addEventListener('submit', (e => {
//     e.preventDefault()
//     let animals = {
//         name: e.target.name.value,
//         imageUrl: e.target.imageUrl.value,
//         description:e.target.description.value
//         donation: 0
//     }
// handler(eventObj)
// }
// }

// myEventListener('button', 'click', (e) => console.log(e))
