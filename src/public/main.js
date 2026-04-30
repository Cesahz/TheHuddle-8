document.addEventListener('DOMContentLoaded', () => {
  const voteButtons = document.querySelectorAll('.vote-btn')

  voteButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const id = btn.dataset.id
      const type = btn.dataset.type
      const linkId = btn.dataset.linkId

      const url = type === 'topic'
        ? `/topics/${id}/vote`
        : `/topics/${id}/links/${linkId}/vote`

      const res = await fetch(url, { method: 'POST' })
      const data = await res.json()

      if (data.success) {
        const counter = btn.nextElementSibling
        counter.textContent = parseInt(counter.textContent) + 1
      }
    })
  })
})