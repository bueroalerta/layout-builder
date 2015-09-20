import Grid from './grid';

var Layout = React.createClass({
  getInitialState() {
    return { grids: [], containerSize: 1000, columns: 4 };
  },
  handleAdd() {
    var grids = this.state.grids.concat([ {} ]);
    this.setState({grids: grids});
  },
  render() {
    return <div>
      <button onClick={this.handleAdd}>Add Grid</button>
      <div ref="container" style={style} id="container">{
        this.state.grids.map((grid) => {
          return <Grid columns={ this.state.columns } initialWidth={ this.state.containerSize / this.state.columns } />
        })
      }</div>
    </div>
  }
})

export default Layout;
