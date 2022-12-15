import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main/>', () => {
  it('should renmder the heading', () => {
    const { container } = render(<Main />);

    expect(
      screen.getAllByRole('heading', {
        name: /Hello World/i
      })
    ).toBeInTheDocument;

    expect(container.firstChild).toMatchSnapshot();
  });
});
