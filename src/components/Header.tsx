import { Link } from "react-router";

function Header() {
    return <header className="fixed bg-secondary w-full border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-5">
            <span className="block font-sans text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-primary">
                Curated information from my personal books
            </span>
            <span className="font-serif text-2xl font-semibold tracking-tight text-foreground">
                My-Book-Pedia
            </span>
            <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-3 font-sans text-xs uppercase tracking-[0.14em] text-muted-foreground">
                <Link to="/">Home</Link>
                <Link to="/all">All</Link>
                <Link to="/botany">Botany</Link>
            </nav>
        </div>
    </header>
}

export default Header;