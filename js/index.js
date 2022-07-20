
//*add produtos
for(i=0; i<data.length;i++){

    
document.querySelector('.products').insertAdjacentHTML("afterbegin",` 

        <div class="card">
            <img src="${data[i].img}" alt="camisa branca">
            <div class="info">
                <p class="category">${data[i].tag}</p>
                <h2 class="product">${data[i].nameItem}</h2>
                <p class="description">${data[i].description}</p>
                <strong class="price">R$ ${data[i].value},00</strong>
                <a href="" id="${data[i].id}" class="addCard">${data[i].addCart}</a>
            </div>
        </div>


`)}

products = document.querySelector('.products')

//*add carrinho

//numero itens
let total = document.querySelector('.quantidade')
let num = 0

let text = document.createElement('p')

text.className='valueQ'

text.innerText=`${num}`

total.appendChild(text)

//selecionar todos os botões de add a carrinho
let add=document.querySelectorAll('.addCard')


//para cada uma desses botões, vamos atribuir um eventListener
add.forEach(
    add => add.addEventListener('click',addCart)
)


//oque fazer ao clicar nesse botão especifico
function addCart(x) {
    x.preventDefault();//não recarregar a pagina

    //somar itens
    num++
    text.innerText=`${num}`

    

    //se o id da meu botão for igual ao id de algum objeto da minha lista, eu adiciono o item ao meu .list(carrinho)
    for (i=0; i<data.length;i++){
        if(this.id==data[i].id){
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

    //*remover do carrinho

//selecionar todos os potões de remover do carrinho

let remove=document.querySelectorAll('.remove')


//para cada botão um eventlistener

remove.forEach(
    remove => remove.addEventListener('click',logId)
)

//oque fazer quando clicar em remover

function logId(x) {
    x.preventDefault();//não recarregar a pagina

    //subtrair
    num--
    text.innerText=`${num}`

    let cont = this.parentNode
    let item = cont.parentNode


            
    item.parentNode.removeChild(item)


}
}



