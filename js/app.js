'use strict'


const form = document.getElementById('form'),
    who = document.getElementById('who'),
    wat = document.getElementById('wat'),
    app = document.getElementById('app');


form.addEventListener('keypress', function(e) {

    if( wat.value == '' || who.value  == '' ) {
        return
    }
    else if(e.key === 'Enter') {

        const whoContent = who.value,
            watContent = wat.value,
            ul = document.getElementById('dude');

        const li = document.createElement('li'),
            article = document.createElement('article'),
            span = document.createElement('span'),
            remover = document.createElement('a');

            article.innerText = whoContent
            span.innerText = watContent
            remover.textContent = 'X'

            ul.appendChild(li);
            li.appendChild(article);
            li.appendChild(remover);
            article.appendChild(span);

            li.classList.add('dude-enter-active');
            remover.classList.add('ctrl');
        
     /* REMOVE ARTICLE */

        remover.addEventListener('click', function() {
                li.remove()
                li.classList.add('dude-enter-leave');
        })
    
    }
     
    /* PREVIEW */

    const preview = document.getElementById('preview');
          preview.textContent = who.value;
     
    const small = document.createElement('small'),
          br = document.createElement('br');
        
        preview.appendChild(br);
        preview.appendChild(small);

        small.innerText = wat.value

});

