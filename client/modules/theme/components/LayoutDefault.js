import React from 'react';
// TODO changing colors while staing on tab? bootstrap.js? chack mantra-bootrstrap
import NavHeader from './NavHeader';

export default class extends React.Component {

    render() {

        // const content = _.get(this.props,'content', () => {});
        const {
            content
        } = this.props;

        return (
            <div>

                {/* <NavHeader /> */}
                <NavHeader />
                <div className="container">

                    {content()}

                </div>
            </div>
        );
    }
}