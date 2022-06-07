/// <reference types="cypress" />

describe("zero/operation/positive", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("sums", () => {
    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("+");
    cy.checkDisplay("0");

    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("1");
  });

  it("subtracts", () => {
    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("-");
    cy.checkDisplay("0");

    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("-1");
  });

  it("multiplies", () => {
    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("x");
    cy.checkDisplay("0");

    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("0");
  });

  it("divides", () => {
    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("/");
    cy.checkDisplay("0");

    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("=");
    cy.checkDisplay("0");
  });
});

describe("positive/operation/zero", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("sums", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("+");
    cy.checkDisplay("1");

    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("=");
    cy.checkDisplay("1");
  });

  it("subtracts", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("-");
    cy.checkDisplay("1");

    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("=");
    cy.checkDisplay("1");
  });

  it("multiplies", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("x");
    cy.checkDisplay("1");

    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("=");
    cy.checkDisplay("0");
  });

  // errors trigger a alert and result in zero
  it("divides", () => {
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("/");
    cy.checkDisplay("1");

    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("=");
    cy.checkDisplay("0");
  });
});

describe("negative/operation/zero", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it("sums", () => {
    cy.pressButton("-");
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("+");
    cy.checkDisplay("-1");

    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("=");
    cy.checkDisplay("-1");
  });

  it("subtracts", () => {
    cy.pressButton("-");
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("-");
    cy.checkDisplay("-1");

    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("=");
    cy.checkDisplay("-1");
  });

  it("multiplies", () => {
    cy.pressButton("-");
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("x");
    cy.checkDisplay("-1");

    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("=");
    cy.checkDisplay("0");
  });

  // errors trigger a alert and result in zero
  it("divides", () => {
    cy.pressButton("-");
    cy.pressButton("1");
    cy.checkDisplay("1");

    cy.pressButton("/");
    cy.checkDisplay("-1");

    cy.pressButton("0");
    cy.checkDisplay("0");

    cy.pressButton("=");
    cy.checkDisplay("0");
  });
});

describe("input and render", () => {
  before(() => {
    cy.visit("/");
  });

  beforeEach(() => {
    cy.pressButton("reset");
  });

  it('should render "0." on "." input', () => {
    cy.pressButton(".");
    cy.checkDisplay("0.");
  });

  it("should not render multiple zeros", () => {
    cy.pressButton("0");
    cy.pressButton("0");
    cy.pressButton("0");
    cy.checkDisplay("0");
  });

  it("should not render more than one leading zero on decimals", () => {
    cy.pressButton("0");
    cy.pressButton("0");
    cy.pressButton(".");
    cy.pressButton("1");
    cy.checkDisplay("0.1");
  });

  it("should not render leading zero on integers", () => {
    cy.pressButton("0");
    cy.pressButton("6");
    cy.checkDisplay("6");
  });

  it("should not render leading zero on integers as second operand", () => {
    cy.pressButton("6");
    cy.pressButton("x");
    cy.pressButton("0");
    cy.pressButton("6");

    cy.checkDisplay("6");
  });

  it('should render leading zero on decimals, input starting with "0"', () => {
    cy.pressButton("0");
    cy.pressButton(".");
    cy.pressButton("6");

    cy.checkDisplay("0.6");
  });

  it('should render leading zero on decimals, input starting with "."', () => {
    cy.pressButton(".");
    cy.pressButton("6");

    cy.checkDisplay("0.6");
  });

  it('should render leading zero on decimals as second operand, input starting with "0"', () => {
    cy.pressButton("6");
    cy.pressButton("x");
    cy.pressButton("0");
    cy.pressButton(".");
    cy.pressButton("6");

    cy.checkDisplay("0.6");
  });

  it('should render leading zero on decimals as second operand, input starting with "."', () => {
    cy.pressButton("6");
    cy.pressButton("x");
    cy.pressButton(".");
    cy.pressButton("6");

    cy.checkDisplay("0.6");
  });
});
