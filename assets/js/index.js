const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("launch");
        }
    })
})

observer.observe(document.querySelector('.collaborator'))