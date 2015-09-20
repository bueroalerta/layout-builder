var Grid = React.createClass({
  componentDidMount() {
    this.setState({ id: pckry.items.length } );
  },
  resizeFn(size) {
    return ()=> {
      this.setState({ size: size  });
      setTimeout(() => window.pckry.layout(), 1);
    }
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
    let resizeButton = []
    for (var i = 1; i <= this.props.columns; i++) {
      resizeButton.push(<button value={i} onClick={this.resizeFn(i)}>{i}x</button>)
    }
    return <div style={style} className="grid">
      <div>
        <div className="resize">
          {resizeButton}
        </div>
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
