//esperar a que todo el html cargue
document.addEventListener('DOMContentLoaded', () => {
  //buscar todos los botones de votar en la pagina
  const voteButtons = document.querySelectorAll('.vote-btn')

  voteButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id         //lee data-id del HTML
      const type = btn.dataset.type     //lee el data-type del HTML
      const linkId = btn.dataset.linkId //lee data-link-id del HTML

      const url = type === 'topic' //si la url es de tipo topic
        ? `/topics/${id}/vote`  //construye url para actualizar voto del tema
        : `/topics/${id}/links/${linkId}/vote` //si no, del link y su id

      const res = await fetch(url, { method: 'POST' }) //peticion HTTP sin recargar la pagina
      const data = await res.json() //parsear la respuesta a JSON

      if (data.success) {
        const counter = btn.nextElementSibling //el <span> despues del boton
        counter.textContent = parseInt(counter.textContent) + 1 //actualiza el numero en pantalla
      }
    })
  })
});