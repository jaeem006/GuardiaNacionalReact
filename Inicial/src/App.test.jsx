import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App2 from "./App2";

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
    
        const expectedValue = "Buenos dias"
    
        userEvent.type(input, expectedValue);
        // expect(input).toHaveValue(expectedValue);
    });
})