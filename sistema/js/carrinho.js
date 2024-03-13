const getCarrinho = () =>JSON.parse(localStorage.getItem('@sonhosGelados:carrinho')) || []
const setCarrinho = dadosCarrinho => localStorage.setItem('@sonhosGelados:carrinho', JSON.stringify(dadosCarrinho))

const tabela = document.querySelector("#tabela")
const buttonCarrinho = document.querySelector(".buttonCarrinho")

const real = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

const carrinho = getCarrinho()

if (carrinho.length > 0) {

    let soma =0

    let mostrarNaPagina = `
        <tr>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Deletar</th>
        </tr>
    ` 

    carrinho.forEach(item => {
        mostrarNaPagina += `
            <tr class="trProdutos">
                <td>${item.nome}</td>
                <td>${item.qtd}</td>
                <td>${real.format(item.preco * item.qtd)} 
                    <small>
                        (${item.qtd}x ${real.format(item.preco)})
                    </small>
                </td>
                <td>Remover</td>
            </tr>  
        `

        soma += item.qtd * item.preco
    })

    tabela.innerHTML = mostrarNaPagina

    const trTotal = document.createElement("tr")
    trTotal.innerHTML = 
        `<td class="total" colspan="4" style="font-weight: bold;">Valor total: ${real.format(soma)}</td>`
        
    tabela.appendChild(trTotal)
}


//     const tr = document.createElement("tr")
//     const tdNome = document.createElement("td")
//     const tdQtd = document.createElement("td")
//     const tdPreco = document.createElement("td")
//     const tdDeletar = document.createElement("td")
    
//     tr.appendChild(tdNome)
//     tr.appendChild(tdQtd)
//     tr.appendChild(tdPreco)
//     tr.appendChild(tdDeletar)

//     tdNome.textContent = item.nome
//     tdQtd.textContent = item.qtd
//     tdPreco.innerHTML = `${real.format(item.preco * item.qtd)} <small>(${item.qtd}x ${real.format(item.preco)})</small> ` 


//     tabela.appendChild(tr)
    
// });

// carrinho.forEach(item2 => {
//     const trTotal = document.createElement("tr")
//     const soma = item2.preco * item2.qtd

//     trTotal.innerHTML = 
//         `<td class="total" colspan="4" style="font-weight: bold;">
//             Valor total: ${real.format(soma)}
//         </td>`
//         tabela.appendChild(trTotal)

// })

// buttonCarrinho.addEventListener('click', (e) => {
//     e.preventDefault()

//     //recupera itens do localstorage
//     let carrinho = getCarrinho()

    
    
    
// })