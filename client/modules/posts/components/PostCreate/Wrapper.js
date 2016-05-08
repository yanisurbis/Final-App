import React, {Component} from 'react'
import ReactDOM from 'react-dom'

// TODO fix h2 tag
export default class extends Component {

    createPost(evt) {
        evt.preventDefault()
        const { create } = this.props
        const { themeRef, textRef } = this.refs

        const theme = ReactDOM.findDOMNode(themeRef)
        const text = ReactDOM.findDOMNode(textRef)

        console.log("theme = " + theme.value)
        console.log("text = " + text.value)

        create(theme.value, text.value)
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <form 
                        role="form"
                        onSubmit={this.createPost.bind(this)}
                    >
                        <h1></h1>
                        <div className="form-group col-lg-8 col-lg-offset-2">
                            
                            <label for="theme" className="post-create-lbl">Theme:</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                id="theme" 
                                ref="themeRef"
                            />
                            
                            <label for="text" className="post-create-lbl">Post:</label>
                            <textarea
                                ref="textRef"
                                className="form-control"
                                rows="15"
                                id="text"
                            >
                            </textarea>
                            
                            <button
                                type="submit"
                                className="btn btn-primary col-lg-2 col-lg-offset-10 post-create-btn"
                            >
                                Publish
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}