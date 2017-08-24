import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScrollBox from '../../behaviors/ScrollBox';

const Blocker = styled.div`
  background: ${({ theme }) => theme.modal.blockerBG};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  z-index: 100000;
`;

// content flex is `0 1 auto`: it won't grow beyond the content size, but can shrink if the window is too small
// to show everything.
const Content = styled.div`
  background: ${({ theme }) => theme.modal.bg};
  width: ${({ naturalWidth }) => naturalWidth};
  max-width: ${({ theme }) => theme.modal.maxWidth};
  min-width: ${({ theme }) => theme.modal.minWidth};
  flex: 0 1 auto;
  min-height: ${({ theme }) => theme.modal.minHeight};
  max-height: ${({ theme }) => theme.modal.maxHeight};
  margin: 180px auto auto auto;
  display: flex;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.modal.borderRadius};
  box-shadow: ${({ theme }) => theme.modal.shadow};
  position: relative;
`;

const Title = styled.h3`
  display: block;
  margin: 0;
  background: ${({ theme }) => theme.modal.titleBG};
  color: ${({ theme }) => theme.modal.titleFG};
  padding: .95em 1em .95em 1.5em;
  font-family: ${({ theme }) => theme.modal.titleFontFamily};
  font-size: ${({ theme }) => theme.modal.titleFontSize};
  font-weight: ${({ theme }) => theme.modal.titleFontWeight};
  text-transform: ${({ theme }) => theme.modal.titleTextTransform};
`;

class Modal extends React.Component {
  static propTypes = {
    /**
     * Content to render in the modal.
     */
    children: PropTypes.node.isRequired,
    /**
     * An optional title for the top of the modal.
     */
    title: PropTypes.string,
    /**
     * Handles click events on the backdrop behind the modal. Use this to close it if desired.
     */
    onBlockerClicked: PropTypes.func,
    /**
     * Sets a natural CSS width for the modal window. Defaults to 'auto'.
     */
    naturalWidth: PropTypes.string,
    /**
     * Adds a class name to the modal window element.
     */
    className: PropTypes.string,
    /**
     * Adds an id to the modal window element.
     */
    id: PropTypes.string,
    /**
     * Content to render in a fixed position at the bottom of the modal - meant for action buttons, like close.
     */
    actionContent: PropTypes.node,
  };

  static defaultProps = {
    title: null,
    naturalWidth: 'auto',
    onBlockerClicked: () => null,
    className: null,
    id: null,
    actionContent: null,
  };

  handleModalClicked = (event) => {
    // prevents click event bubbling to blocker and triggering blockerclicked callback
    event.stopPropagation();
  };

  render() {
    const { id, className, onBlockerClicked, naturalWidth, title, children, actionContent } = this.props;
    return (
      <Blocker onClick={onBlockerClicked}>
        <Content
          naturalWidth={naturalWidth}
          onClick={this.handleModalClicked}
          id={id}
          className={className}
        >
          {title ? <Title>{title}</Title> : null}
          <ScrollBox>
            {children}
          </ScrollBox>
          {actionContent}
        </Content>
      </Blocker>
    );
  }
}

Modal.usage = `
Unlike traditional modal dialogs, Modal doesn't include functionality for closing or opening. It's recommended that you render Modal as a route in your React application with React Router.

Provides \`title\` prop for adding a title, and \`onBlockerClicked\` if you want to hook the click event on the shadow 'blocker' element which covers the page.

\`\`\`
<Route exact path="/modal">
  <Modal>Content <Link to="/">Close</Link></Modal>
</Route>
\`\`\`

You can also use the \`actionContent\` prop to pass in stuff to render which will be fixed to the bottom of the modal. The rest of the content will scroll as it gets too large, but this content will continue to be visible at the bottom. Use this for things like close buttons or confirm buttons, which should always be visible.

\`\`\`
<Modal
  actionContent={(
    <Flow>
      <Flow.Row>
        <Flow.Item>
          <Button onClick={close}>Close</Button>
        </Flow.Item>
      </Flow.Row>
    </Flow>
  )}
\>
  This is a closeable modal message.
</Modal>
\`\`\`
`;

export default Modal;
