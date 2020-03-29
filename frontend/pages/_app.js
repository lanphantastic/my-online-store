import App, { Container } from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          <Component />
          {/* Component above will either home, or sell page, etc. that we are on */}
        </Page>
      </Container>
    )
  }
}

export default MyApp;
