import React from 'react'
import './intro.css'

export default class Intro extends React.Component {
    render() {
        return (
            <div className='container'>
                <header>
                    <video preload="auto" autoPlay="autoplay"
                           loop="loop">
                        <source src="./../../../assets/13269749-preview.mp4" type="video/mp4"></source>
                    </video>
                    <nav>
                        <ol>
                            <li>text</li>
                            <li>text</li>
                            <li>text</li>
                            <li>text</li>
                            <li>text</li>
                        </ol>
                    </nav>
                </header>
                <main>

                </main>
                <footer>
                    <address>Lorem ipsum dolor sit amet, consectetur adipisicing.</address>
                </footer>
            </div>
        );
    }
}

