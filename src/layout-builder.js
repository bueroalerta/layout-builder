import Layout from './layout';

class LayoutBuilder {
  constructor(container, options) {
    React.render(<Layout />, document.querySelector(container));
  }
}

export default LayoutBuilder;
