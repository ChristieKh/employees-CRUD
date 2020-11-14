import { Component, Props } from 'react';
import { createPortal } from 'react-dom';

const RELATIVE_POSITION = 'relative';
const rootPortalPrefix = 'modal';

type PropsType = {} & Props<any>;

export class Portal extends Component<PropsType> {
  portalContainer: HTMLElement;

  portalElement: HTMLElement;

  constructor(props: PropsType) {
    super(props);
    this.portalContainer = document.getElementById(
      rootPortalPrefix,
    ) as HTMLElement;

    if (!this.portalContainer) {
      // if not found then create
      this.portalContainer = document.createElement('div');
      this.portalContainer.setAttribute('id', rootPortalPrefix);
      this.portalContainer.style.zIndex = rootPortalPrefix;
      this.portalContainer.style.position = RELATIVE_POSITION;
      this.portalContainer.className = rootPortalPrefix;

      const body = document.body;
      body.appendChild(this.portalContainer);
    }

    // create the children
    this.portalElement = document.createElement('div');
    this.portalElement.className = `${rootPortalPrefix}__${1}`;
  }

  componentDidMount() {
    // Mount children
    this.portalContainer.appendChild(this.portalElement);
  }

  componentWillUnmount() {
    // remove children
    this.portalElement.remove();
  }

  render() {
    return createPortal(this.props.children, this.portalElement);
  }
}
