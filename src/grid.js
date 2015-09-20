var Grid = React.createClass({
  componentDidMount() {
    this.setState({ id: pckry.items.length } );
  },
  getInitialState() {
    return { width: this.props.initialWidth, id: 0, size: 1 };
  },
  render() {
    return <div>Hello {this.props.name}</div>;
  }
})

export default Grid;
