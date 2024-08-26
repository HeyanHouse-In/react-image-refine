import { render } from '@testing-library/react';

import ReactImageRefine from './react-image-refine';

describe('ReactImageRefine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactImageRefine />);
    expect(baseElement).toBeTruthy();
  });
});
