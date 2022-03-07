/** @format */

import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryProvider } from '@project/utils/test';
import { findCharactersByName } from '@project/services';
import { SearchTemplate } from '../Search';

jest.mock('@project/services');

describe('Templates: Search', () => {
  it('should search and find a character', async () => {
    const character = {
      name: 'Luke Skywalker',
      homeworld: '',
      species: [],
      url: 'https://swapi.dev/api/people/1/'
    };

    const expected = new RegExp(character.name, 'i');

    (findCharactersByName as jest.Mock).mockResolvedValue({
      data: { results: [character] }
    });

    render(
      <QueryProvider>
        <SearchTemplate />
      </QueryProvider>
    );

    const Input = screen.getByTestId('search-form-input-field');
    const Button = screen.getByTestId('search-form-submit');

    await userEvent.type(Input, 'Luke');
    await userEvent.click(Button);

    const ListItem = await screen.findByTestId('character-list-item');

    within(ListItem).getByText(expected);
  });
});
