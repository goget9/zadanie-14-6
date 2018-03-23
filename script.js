var Counter = React.createClass({    
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    getDefaultProps() {
            console.log('define default props')
    },
    componentWillMount() {
        console.log('use to determin which props or state to be used before render')
    },
    componentDidMount() {
        console.log('use to reach out to server for data')
    },
    componentwillUnmount() {
        console.log('use to show timer or set listener on DOM element')
    },
    
    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('div', {onClick: this.increment}, 'increment'),
                React.createElement('div', {onClick: this.decrement}, 'decrement'),          
                React.createElement('span', {}, 'Licznik ' + this.state.counter)
            )
        );
    }
});

var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return (
            React.createElement('div', {},
                React.createElement('div', {onClick: this.increment}, 'increment'),
                React.createElement('div', {onClick: this.decrement}, 'decrement'),          
                React.createElement('span', {}, 'Licznik ' + this.state.counter)
            )
        );
    }
});

var App = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'app'},
        React.createElement(Counter, {}),
        React.createElement(Counter2, {})
      )
    );
  }
});


var element = React.createElement(App, {});
ReactDOM.render(element, document.getElementById('app'));