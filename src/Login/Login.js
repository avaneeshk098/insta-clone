import React from 'react'
import LoginPreview from './LoginPreview'
import LoginForm from './LoginForm'
import './Login.css'

const Login = () => {
    return (
        <section id="login">
            <main id="content">
                <article id="article">
                    <div id="carousel">
                        <LoginPreview />
                    </div>
                    <div id="form">
                        <LoginForm />
                    </div>
                </article>
            </main>
        </section>
    )
}

export default Login;