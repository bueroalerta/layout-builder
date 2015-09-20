import Grid from './grid';

var Layout = React.createClass({
  getInitialState() {
    return { grids: [], containerSize: 1000, columns: 4 };
  },
  handleAdd() {
    var grids = this.state.grids.concat([ {} ]);
    this.setState({grids: grids});
  },
  setContainerSize(event) {
    this.setState({ containerSize: event.target.value });
    setTimeout(() => { pckry.layout() }, 2);
  },
  setColumns(event) {
    this.setState({ columns: event.target.value });
    setTimeout(() => { pckry.layout() }, 2);
  },
  render() {
    const style = { width: this.state.containerSize }
    return <div>
      <label>
        Container Size:
        <input value={this.state.containerSize} onChange={this.setContainerSize} />
      </label>
      <label>
        Columns:
        <input value={this.state.columns} onChange={this.setColumns} />
      </label>
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
