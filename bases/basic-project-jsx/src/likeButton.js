'use strict'

class LikeButtom extends React.Component {
    constructor (props) {
        super(props)
        this.state = { liked: false}
    }

    onClickHandler = () => {
        this.setState({liked: true})
    }

    render () {
        return (
            this.state.liked ? 'You liked this' :
            <button onClick={this.onClickHandler}>Like</button>
        )
    }
}

ReactDOM.render(
    <LikeButtom />,
    document.getElementById('root')
)