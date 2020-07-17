import React from "react";
import { cleanup, render } from "@testing-library/react";
import BudgetDashboard from "js/_components/templates/_budget-dashboard";

var value = {
  budgetId: 1,
};

jest.mock("js/_components/organisms/_budget-metrics-card", () => ({
  __esModule: true,
  default: () => <span>Budget Metrics Card</span>,
}));

jest.mock("js/_components/organisms/_add-budget-dialog-box", () => ({
  __esModule: true,
  default: () => <span>Add Budget Dialog Box</span>,
}));

const fetch = jest.fn();
global.fetch = fetch;
afterEach(cleanup);

describe("Budget Dashboard Page", () => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn().mockReturnValue(JSON.stringify(value)),
    },
  });
  it("renders correctly", () => {
    const wrapper = shallow(<BudgetDashboard />);
    expect(wrapper).toMatchSnapshot();
  });
  it("on render after fetch success/resolve", async () => {
    fetch.mockClear();
    fetch.mockResolvedValue({
      key: "value", // return value on fetch resolve
    });
    const { queryAllByText } = render(<BudgetDashboard />);
    expect(queryAllByText(/Budget Metrics Card/)).toBeDefined();
  });
  it("fetches data from server when server returns a successful response", (done) => {
    const mockSuccessResponse = {};
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
    const wrapper = shallow(<BudgetDashboard />);
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://bc3-json-mock.herokuapp.com/expenses",
      {
        method: "GET",
      }
    );
    expect(
      global.fetch
    ).toHaveBeenCalledWith(
      'https://bc3-json-mock.herokuapp.com/budgets/1/budgetComponents',
      { method: "GET" }
    );
    global.fetch.mockClear();
    done();
  });
});
