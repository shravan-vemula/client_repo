import React from "react";
import { cleanup, render, fireEvent } from "@testing-library/react";
import MenuList from "js/_components/organisms/MenuList";
import axios from "axios";
import { renderHook } from "@testing-library/react-hooks";

afterEach(cleanup);

jest.mock("axios");

describe("MenuList Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<MenuList />);
    expect(wrapper).toMatchSnapshot();
  });

  it("does it recieve email", async () => {
    axios.get.mockResolvedValue({
      data: {
        email: "Raju@gmail.com",
      },
    });

    const { result, waitForNextUpdate } = renderHook(() => MenuList());
    await waitForNextUpdate();
    expect(result.current._owner.memoizedState).toMatchObject({
      memoizedState: "R",
    });
  });

  it("on click avatar", () => {
    const { getByTestId } = render(<MenuList />);
    const avatar = getByTestId("Avatar");
    fireEvent.click(avatar, { currentTarget: 1 });
  });
});
