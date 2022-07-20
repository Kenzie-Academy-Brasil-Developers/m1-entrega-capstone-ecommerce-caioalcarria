document.querySelector('.list').insertAdjacentHTML("afterbegin",` 

        <div class="item">
            <img src="${data[j].img}" alt="">
            <div class="cont">
                <p>${data[j].nameItem}</p>
                <p class="preco">R$ ${data[j].value},00</p>
                <a class="remove" href="">Remover produto</a>

            </div>

        </div>`);
        function addCard(id){



            for (i=0; i<data.length;i++){
                if(id==data[i].id){
                    document.querySelector('.list').insertAdjacentHTML("afterbegin",` 
        
                        <div class="item">
                            <img src="${data[i].img}" alt="">
                            <div class="cont">
                                <p>${data[i].nameItem}</p>
                                <p class="preco">R$ ${data[i].value},00</p>
                                <a id="${data[i].id}" class="remove" href="">Remover produto</a>
        
                            </div>
        
                        </div>`
                    );
                }
            }
        
            let remove = document.querySelectorAll('.remove')
            console.log(remove)
        
        for (k=0; k<remove.length;k++){
            
            remove[k].addEventListener('click', function(event){
            event.preventDefault();
            
            id1=event.srcElement.id
            console.log(event.srcElement.id)
            let cont = remove[k-1].parentNode
            
            console.log(cont.parentNode.removeChild(cont))
            
        
        
        })}
        
        }
        
        let add = document.querySelectorAll('.addCard')
        
        
        for (j=0; j<data.length;j++){
            
            add[j].addEventListener('click', function(event){
            event.preventDefault();
            
            let id =event.srcElement.id
            addCard(id)
            
        
         
            
        
        
        })}
        