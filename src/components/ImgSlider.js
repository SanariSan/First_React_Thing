import React from 'react';

export class ImgSlider extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            links: [
                'http://forum.rcracer.ru/img/avatars/8744.jpg?no_cache=RdFadbsZ',
                'https://www.ibisegypttours.com/images/accomadation/blogpost-placeholder-100x100.png',
                'http://www.mestanet.ru/files/myavo.jpg',
                'https://www.dianda.ru/temp/avatar/16082avatar.gif',
            ],
            idx: 0
        };
    }

    increase = () => {
        this.setState({
            idx: this.state.idx + 1
        })
    }

    decrease = () => {
        this.setState({
            idx: this.state.idx - 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.decrease}>prev</button>
                <button onClick={this.increase}>next</button>
                <div>
                    <img
                        style={{
                            width: 100,
                            height: 100
                        }}
                        src={this.state.links[this.state.idx]}
                        alt={this.state.idx}>
                    </img>
                </div>
            </div>
        );
    }
}