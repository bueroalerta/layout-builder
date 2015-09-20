var Grid = React.createClass({
  componentDidMount() {
    this.setState({ id: pckry.items.length } );
  },
  getInitialState() {
    return { width: this.props.initialWidth, id: 0, size: 1 };
  },
  render() {
    const width = this.props.initialWidth * this.state.size;
    const style = {
      width:  width,
      height: width * 0.7
    };
    return <div style={style} className="grid">
      <div>
        <pre><code>
        {'{'}{'\n'}
          id: {this.state.id},{'\n'}
          initialWidth: {this.props.initialWidth},{'\n'}
          width: {width}px,{'\n'}
          size: {this.state.size}{'\n'}
        {'}'}
      </code></pre>
      </div>
    </div>;
  }
})

export default Grid;
