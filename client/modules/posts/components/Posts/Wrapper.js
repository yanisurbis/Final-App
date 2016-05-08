import React from 'react'

import Post from './Post'

export default class extends React.Component {
    
    render() {
        
        const {posts} = this.props
        posts.map((post) => console.log(post))
        console.log("HERE" + posts[0])
        return (
            <div className="container">
                {
                    posts.map((post) => {
                        return (
                            <Post key={post._id} data={post} />
                        )
                    })
                }
            </div>
        )
    }
}