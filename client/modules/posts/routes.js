import React from 'react';
import {mount} from 'react-mounter';


import {
    AuthCheck,
    LayoutDefault,
    Simplest,
} from '/client/configs/components.js';

import PostCreate from './components/PostCreate/Wrapper'
import postCreateComposer from './lib/PostCreate'

import Posts from './components/Posts/Wrapper'
import postsComposer from './lib/Posts'

const PostCreateCtx = postCreateComposer(PostCreate)
const PostsCtx = postsComposer(Posts)

export default function (injectDeps, {FlowRouter}) {

    const AuthCheckCtx = injectDeps(AuthCheck);

    FlowRouter.route('/posts', {
        name: 'colors.list',
        action() {
            mount(AuthCheckCtx, {
                LayoutDefault, content: () => (<PostsCtx />)
            });
        }
    });


    FlowRouter.route('/posts/create', {
        name: 'colors.add',
        action() {
            mount(AuthCheckCtx, {
                LayoutDefault, content: () => (<PostCreateCtx />)
            });
        }
    });


}