import { Component, h } from 'preact';

export class MessageReceiver extends Component {
    componentDidMount() {
        window.addEventListener('message', this.handleMessage, false);
    }

    componentWillUnmount() {
        window.removeEventListener('message', this.handleMessage, false);
    }

    handleMessage = (event: MessageEvent) => {
        console.log('Message received:', event.data);
    };

    render() {
        return <div>Listening for messages...</div>;
    }
}
