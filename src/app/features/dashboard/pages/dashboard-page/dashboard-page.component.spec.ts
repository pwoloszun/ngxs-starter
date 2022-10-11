import { render, screen } from '@testing-library/angular'

import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {

  it(`should check equality`, () => {
    expect(123).toEqual(123);
  });

  it(`should have as title 'ngxs-workshop-starter'`, async () => {
    await render(DashboardPageComponent);
    const title = await screen.findByText(/ngxs-starter/i);
    expect(title).toBeInTheDocument();
  });

});
