import React from "react";
import { cleanup } from "@testing-library/react";
import AvatarIcon from "js/_components/atoms/AvatarIcon";
import axios from "axios";
import { renderHook } from "@testing-library/react-hooks";

afterEach(cleanup);

jest.mock("axios");

describe("AvatarIcon Component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<AvatarIcon props={{ spacing: 50 }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("does it recieve email", async () => {
    axios.get.mockResolvedValue({
      data: {
        email: "Raju@jj.com",
      },
    });

    const { result, waitForNextUpdate } = renderHook(() =>
      AvatarIcon({ props: { spacing: 50 } })
    );
    await waitForNextUpdate();
    expect(result.current._owner.memoizedState).toMatchObject({
      memoizedState: "R",
    });
  });
});
