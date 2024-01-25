import { render, screen } from "@testing-library/react";
import {describe,it,expect} from 'vitest';
import userEvent from "@testing-library/user-event";
import Counter from "./components/Counter";

describe("Counter test cases", () => {
	it("count should start with 0", () => {
		render(<Counter />);
		expect(screen.getByText("0")).toBeInTheDocument();
	});

	it("on increment count should increase by 1", async () => {
		render(<Counter />);
		const incrementButton = screen.getByRole("button", {name:'Increment'});
		await userEvent.click(incrementButton)
		expect(screen.getByText("1")).toBeInTheDocument();
	});

	it("on decrement count should decrease by 1", async () => {
		render(<Counter />);
		const incrementButton = screen.getByRole("button", {name:'Decrement'});
		await userEvent.click(incrementButton)
		expect(screen.getByText("-1")).toBeInTheDocument();
	});
});
