import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from 'shared/lib/renderComponent/renderComponent';

import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('should render', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  it('should toggle', () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
