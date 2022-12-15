import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App2 from "./App2";
import '@testing-library/jest-dom';

describe("App Component", () => {

    beforeEach(() => render(<App2/>));

    test("renders input", () => {
        const input = screen.getByPlaceholderText("Title");
        expect(input).toBeInTheDocument
    });

    test("renders title with same value as input", () => {
        const input = screen.getByPlaceholderText("Title");
        expect(input).toBeInTheDocument;
        expect(input).toHaveValue("");

        
    });
})