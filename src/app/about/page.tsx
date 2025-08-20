// src/app/about/page.tsx

export default function AboutPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold mb-4">About This Digital Garden 🌿</h1>
    
            <p className="text-muted-foreground mb-6">
            This application is your personal <strong>Second Brain</strong> — a space to grow, connect, and explore your thoughts over time.
            </p>
    
            <div className="space-y-4 text-base leading-relaxed text-gray-700 dark:text-gray-300">
            <p>
                Inspired by the <em>Zettelkasten</em> method, this tool helps you capture <strong>atomic notes</strong>, link related ideas, and visualize the web of your knowledge. Notes are not just static — they evolve, connect, and resurface when needed.
            </p>
    
            <p>
                Features include a markdown editor, folder and tag organization, AI-assisted summaries and tags, semantic search, and a graph view to see how your ideas interrelate.
            </p>
    
            <p>
                Whether you are a writer, researcher, or curious thinker, this space is designed to help you develop your thoughts, one note at a time.
            </p>
    
            <p className="italic text-sm text-muted-foreground">
                “You only know what you can recall — and you can only recall what you have saved.”
            </p>
            </div>
        </div>
    );
  }
  