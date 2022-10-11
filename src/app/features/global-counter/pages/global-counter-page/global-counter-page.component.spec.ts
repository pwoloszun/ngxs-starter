import { NgxsModule } from '@ngxs/store';
import { render, screen } from '@testing-library/angular'
import userEvent from '@testing-library/user-event';

import { GlobalCounterState } from 'src/app/store/global-counter';

import { GlobalCounterPageComponent } from './global-counter-page.component';

describe('GlobalCounterPageComponent', () => {

  it(`should TODO`, async () => {
    await render(GlobalCounterPageComponent, {
      imports: [
        NgxsModule.forRoot([], {
          developmentMode: true
        }),
        NgxsModule.forFeature([GlobalCounterState]),
      ],
    });

    await screen.findByText(/Value: 200/i);

    const incrementBtn = await screen.findByRole('button', { name: /Increment/i });
    userEvent.click(incrementBtn);

    await screen.findByText(/Value: 205$/i);
  });

});
