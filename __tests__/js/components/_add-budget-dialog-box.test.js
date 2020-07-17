import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import AddBudgetDialogBox from "js/_components/organisms/_add-budget-dialog-box";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

jest.mock("js/_components/molecules/_select-list", () => ({
  __esModule: true,
  default: () => <span>Select List</span>,
}));

var value = {
  budgetId: 1,
};

const result = [
  {
    id: 1,
    name: "Vacation",
  },
  {
    id: 2,
    name: "Food & Groceries",
  },
  {
    id: 3,
    name: "Rent",
  },
  {
    id: 4,
    name: "Mech Tools",
  },
  {
    id: 5,
    name: "Transport",
  },
  {
    id: 6,
    name: "Shopping",
  },
  {
    id: 7,
    name: "Electricity",
  },
];

const fetch = jest.fn();
global.fetch = fetch;

const fetchData = jest.fn();

afterEach(cleanup);

const handleDialogBoxClose = jest.fn();

describe("Add Budget Dialog Box Component", () => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn().mockReturnValue(JSON.stringify(value)),
    },
  });
  it("renders correctly", () => {
    const wrapper = shallow(
      <AddBudgetDialogBox open={true} handleClose={handleDialogBoxClose} />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it("on render after fetch success/resolve", async () => {
    fetch.mockClear();

    fetch.mockResolvedValue({
      key: "value",
    });
    const { queryAllByText } = render(
      <AddBudgetDialogBox open={true} handleClose={handleDialogBoxClose} />
    );
    expect(queryAllByText(/Select List/)).toBeDefined();
  });

  it("should have textfield and validations are implemented", () => {
    const { getByTestId, getByText } = render(
      <AddBudgetDialogBox open={true} handleClose={handleDialogBoxClose} />
    );
    expect(getByTestId("textField")).toBe;
    fireEvent.keyUp(getByTestId("textField"), {
      target: { value: "12a" },
    });
    expect(getByTestId("textField")).toHaveValue("12");
    fireEvent.change(getByTestId("textField"), {
      target: { value: "1200" },
    });

    expect(getByTestId("textField")).toHaveValue("1200");
    fireEvent.change(getByTestId("textField"), {
      target: { value: "" },
    });

    fireEvent.keyUp(getByTestId("textField"), {
      target: { value: "" },
    });
    fireEvent.blur(getByTestId("textField"));
    expect(getByText("Please fill this field")).toBe;
  });
  it("should have three select lists heading", () => {
    const { getByText } = render(
      <AddBudgetDialogBox open={true} handleClose={handleDialogBoxClose} />
    );
    expect(getByText("CATEGORIES")).toBe;
    expect(getByText("STARTS")).toBe;
    expect(getByText("TIME PERIOD")).toBe;
  });

  it("fetches data from server when server returns a successful response", (done) => {
    const mockSuccessResponse = result;
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
    const wrapper = shallow(<AddBudgetDialogBox />);
    expect(global.fetch).toHaveBeenCalledTimes(3);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://bc3-json-mock.herokuapp.com/categories",
      {
        method: "GET",
      }
    );

    global.fetch.mockClear();
    done();
  });

  it("fetches data from server when server returns a successful response", async (done) => {
    const promise = Promise.resolve();
    const useEffect = jest.fn(() => promise);
    const { getByTestId, getByText } = render(
      <AddBudgetDialogBox
        open={true}
        handleClose={handleDialogBoxClose}
        fetchData={fetchData}
      />
    );
    expect(getByTestId("textField")).toBe;
    fireEvent.change(getByTestId("textField"), {
      target: { value: 123 },
    });
    expect(getByTestId("button")).toBeEnabled();
    fireEvent.click(getByTestId("button"));

    const mockSuccessResponse = result;
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });
    jest.spyOn(global, "fetch").mockImplementation(() => mockFetchPromise);
    const wrapper = shallow(
      <AddBudgetDialogBox
        open={true}
        handleClose={handleDialogBoxClose}
        fetchData={fetchData}
      />
    );
    expect(global.fetch).toHaveBeenCalledTimes(2);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://bc3-json-mock.herokuapp.com/categories",
      {
        method: "GET",
      }
    );

    global.fetch.mockClear();
    done();
    await act(() => promise);
  });
});
