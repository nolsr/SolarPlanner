export default class PanelPlacer {
  constructor(options, border, ctx) {
    this.options = options;
    this.border = border;
    this.ctx = ctx;
  }

  drawRoof() {
    throw new Error("Method not implemented.");
  }
  placePanels() {
    throw new Error("Method not implemented.");
  }

  drawPanel(x, y) {
    // Panel Margin
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.rect(
      x - Number(this.options.panelMargin) / 2,
      y - Number(this.options.panelMargin) / 2,
      Number(this.options.panelWidth) + Number(this.options.panelMargin),
      Number(this.options.panelHeight) + Number(this.options.panelMargin)
    );
    ctx.closePath();
    ctx.fillStyle = "rgb(224 231 255)";
    ctx.fill();

    // Panel
    ctx.beginPath();
    ctx.rect(
      x,
      y,
      Number(this.options.panelWidth),
      Number(this.options.panelHeight)
    );
    ctx.closePath();
    ctx.fillStyle = "rgb(30 27 75)";
    ctx.fill();
  }
}

export const ROOF_TYPES = {
  SQUARE: 0,
  TRIANGLE: 1,
  TRAPEZE: 2,
};
