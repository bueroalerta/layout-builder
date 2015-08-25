import Layout from './layout';

class LayoutBuilder {
  constructor(container) {
    React.render(<Layout name="John" />, document.querySelector(container));
  }
}

export default LayoutBuilder;
