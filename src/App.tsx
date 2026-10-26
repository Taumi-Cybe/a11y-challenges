import './App.css'

// Mission : ce blog fonctionne, mais tout est construit en <div>. Rends-le
// sémantique : landmarks, hiérarchie de titres, vrai bouton, vrai label.

function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert('Inscription envoyée')
  }

  return (
    <div className="page">
      <header className="header">
        <div className="logo">DevBlog</div>
        <nav className="nav" aria-label="Navigation principale">
          <a className="nav-link" href="/">Accueil</a>
          <a className="nav-link" href="/articles">Articles</a>
          <a className="nav-link" href="/contact">Contact</a>
        </nav>
      </header>

      <main className="main">
        <article className="article">
          <h1 className="title">Pourquoi apprendre TypeScript en 2026</h1>
          <p className="meta">
            Publié le <time dateTime="2026-03-03">3 mars 2026</time>
          </p>
          <h2 className="small-title">Un typage qui rassure</h2>
          <p>TypeScript attrape une classe entière de bugs avant même d'exécuter le code...</p>
          <h2 className="small-title">Un écosystème mature</h2>
          <p>La quasi-totalité des librairies JS fournissent désormais leurs types...</p>
        </article>

        <button
          type="button"
          className="like-btn"
          onClick={() => alert('Merci pour le like !')}
        >
          <span aria-hidden="true">👍</span> J'aime cet article
        </button>

        <section className="newsletter" aria-labelledby="newsletter-title">
          <h2 id="newsletter-title" className="small-title">Reste informé</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="newsletter-email">Adresse email</label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              placeholder="ton@email.fr"
              autoComplete="email"
              required
            />
            <button type="submit" className="submit-btn">S'inscrire</button>
          </form>
        </section>
      </main>

      <footer className="footer">© 2026 DevBlog</footer>
    </div>
  )
}

export default App