//
const modalAluno = new bootstrap.Modal(document.getElementById('modalAluno'))

const on = (element, event, selector, handler) => {
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    nome_editar.value = fila.children[1].innerHTML
    idade_editar.value = fila.children[2].innerHTML
    modalAluno.show()
})