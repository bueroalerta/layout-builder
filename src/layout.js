import Grid from './grid';

var Layout = React.createClass({
  getInitialState() {
    return { grids: [], containerSize: 1000, columns: 4 };
  },
  render() {
    return <div>
      <div ref="container" style={style} id="container">{
        this.state.grids.map((grid) => {
          return <Grid columns={ this.state.columns } initialWidth={ this.state.containerSize / this.state.columns } />
        })
      }</div>
    </div>
  }
})

export default Layout;
