import './Works.css'

function Works() {
    const works = [
        {
            id: 1,
            title: 'Project 1',
            description: 'Webアプリケーションの開発',
            tags: ['React', 'TypeScript'],
        },
        {
            id: 2,
            title: 'Project 2',
            description: 'モバイルアプリのUI/UX設計',
            tags: ['Figma', 'Design'],
        },
        {
            id: 3,
            title: 'Project 3',
            description: 'APIサーバーの構築',
            tags: ['Node.js', 'Express'],
        },
    ]

    return (
        <div className="works">
            <div className="container">
                <h1 className="page-title">Works</h1>
                <div className="works-grid">
                    {works.map((work) => (
                        <div key={work.id} className="work-card">
                            <div className="work-image">
                                <div className="work-placeholder">
                                    <span>{work.title}</span>
                                </div>
                            </div>
                            <div className="work-info">
                                <h3>{work.title}</h3>
                                <p>{work.description}</p>
                                <div className="work-tags">
                                    {work.tags.map((tag) => (
                                        <span key={tag} className="work-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Works
