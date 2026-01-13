import './Contact.css'

function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <h1 className="page-title">Contact</h1>
                <div className="contact-content">
                    <p className="contact-intro">
                        お問い合わせはこちらからどうぞ。
                    </p>
                    <form className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">お名前</label>
                            <input type="text" id="name" name="name" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">メールアドレス</label>
                            <input type="email" id="email" name="email" placeholder="your@email.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">メッセージ</label>
                            <textarea id="message" name="message" rows={5} placeholder="Your message"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
