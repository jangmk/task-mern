import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Spinner from "./Spinner";


describe("Spinner",()=>{
  test("render correctly",()=>{
    render(<Spinner />)

    const containerDiv = screen.getByTestId("spin-container");
    expect(containerDiv).toBeInTheDocument()

    const innerDiv = screen.getByTestId("inner-container");
    expect(innerDiv).toBeInTheDocument();
  })
})
