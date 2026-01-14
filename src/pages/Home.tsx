import { useState, useEffect } from 'react'
import './Home.css'

function Home() {
    const prefix = "Hello, I'm"
    const phrases = [" Amemiya", " Programmer", " Photographer", " Mechanick", " Designer"]

    const [displayText, setDisplayText] = useState("")
    const [phraseIndex, setPhraseIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [showSubtitle, setShowSubtitle] = useState(false)
    const [prefixTyped, setPrefixTyped] = useState(false)

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex]

        // まずプレフィックスをタイプ
        if (!prefixTyped) {
            if (charIndex < prefix.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(prev => prev + prefix[charIndex])
                    setCharIndex(prev => prev + 1)
                }, 150)
                return () => clearTimeout(timeout)
            } else {
                setPrefixTyped(true)
                setCharIndex(0)
                return
            }
        }

        // フレーズ部分のタイピング/削除
        if (!isDeleting) {
            // タイピング中
            if (charIndex < currentPhrase.length) {
                const timeout = setTimeout(() => {
                    setDisplayText(prefix + currentPhrase.substring(0, charIndex + 1))
                    setCharIndex(prev => prev + 1)
                }, 150)
                return () => clearTimeout(timeout)
            } else {
                // タイピング完了、サブタイトル表示後に削除開始
                if (!showSubtitle) {
                    const timeout = setTimeout(() => {
                        setShowSubtitle(true)
                    }, 500)
                    return () => clearTimeout(timeout)
                }
                const timeout = setTimeout(() => {
                    setIsDeleting(true)
                }, 2000)
                return () => clearTimeout(timeout)
            }
        } else {
            // 削除中
            if (charIndex > 0) {
                const timeout = setTimeout(() => {
                    setDisplayText(prefix + currentPhrase.substring(0, charIndex - 1))
                    setCharIndex(prev => prev - 1)
                }, 80)
                return () => clearTimeout(timeout)
            } else {
                // 削除完了、次のフレーズへ
                const timeout = setTimeout(() => {
                    setIsDeleting(false)
                    setPhraseIndex(prev => (prev + 1) % phrases.length)
                }, 500)
                return () => clearTimeout(timeout)
            }
        }
    }, [charIndex, isDeleting, phraseIndex, prefixTyped, showSubtitle, prefix, phrases])

    return (
        <div className="home">
            <div className="hero">
                <h1 className="typing-text">
                    {displayText}
                    <span className="cursor"></span>
                </h1>
                <p className={`subtitle ${showSubtitle ? 'visible' : ''}`}>
                    Welcome to my portfolio
                </p>
                <div className={`cta-buttons ${showSubtitle ? 'visible' : ''}`}>
                    <a href="/about" className="btn btn-primary">About Me</a>
                    <a href="/works" className="btn btn-secondary">View Works</a>
                </div>
            </div>
        </div>
    )
}

export default Home
