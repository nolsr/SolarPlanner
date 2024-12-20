/* eslint-disable react/no-is-mounted */
import PanelPlacer from "./PanelPlacer";

export default class SqaureRoofPlacer extends PanelPlacer {
  drawRoof() {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.rect(
      0,
      0,
      Number(this.options.roofWidth),
      Number(this.options.roofHeight)
    );
    ctx.closePath();

    ctx.fillStyle = "white";
    ctx.fill();
    ctx.lineWidth = Number(this.options.roofPadding) * 2;
    ctx.strokeStyle = "#FFE0E7";
    if (this.options.roofPadding > 0) {
      ctx.stroke();
    }
  }

  placePanels() {
    const roofHeight = Number(this.options.roofHeight);
    const roofWidth = Number(this.options.roofWidth);
    const roofPadding = Number(this.options.roofPadding);
    const panelMargin = Number(this.options.panelMargin);
    const panelWidth = Number(this.options.panelWidth);
    const panelHeight = Number(this.options.panelHeight);

    if (panelHeight === 0 || panelWidth === 0) {
      console.error("Invalid roof or Panel dimensions");
      return 0;
    }

    const cols = Math.floor(
      (roofWidth - 2 * roofPadding) / (panelWidth + panelMargin)
    );
    const rows = Math.floor(
      (roofHeight - 2 * roofPadding) / (panelHeight + panelMargin)
    );

    if (cols === 0 || rows === 0) {
      console.error("Invalid roof or Panel dimensions");
      return 0;
    }

    const xStart =
      roofWidth / 2 -
      panelWidth / 2 +
      (cols % 2 === 0 ? panelWidth / 2 + panelMargin / 2 : 0);
    const yStart =
      roofHeight / 2 -
      panelHeight / 2 +
      (rows % 2 === 0 ? panelHeight / 2 + panelMargin / 2 : 0);

    const offsetX = panelWidth + panelMargin;
    const offsetY = panelHeight + panelMargin;

    for (let i = 0; i < cols + 1; i++) {
      const xOffsetMultiplier = Math.floor(i / 2);

      for (let j = 0; j < rows + 1; j++) {
        const yOffsetMultipler = Math.floor(j / 2);

        if (i % 2 === 0) {
          if (j % 2 === 0) {
            this.drawPanel(
              xStart - offsetX * xOffsetMultiplier,
              yStart - offsetY * yOffsetMultipler
            );
          } else {
            this.drawPanel(
              xStart - offsetX * xOffsetMultiplier,
              yStart + offsetY * yOffsetMultipler
            );
          }
        } else {
          if (j % 2 === 0) {
            this.drawPanel(
              xStart + offsetX * xOffsetMultiplier,
              yStart - offsetY * yOffsetMultipler
            );
          } else {
            this.drawPanel(
              xStart + offsetX * xOffsetMultiplier,
              yStart + offsetY * yOffsetMultipler
            );
          }
        }
      }
    }

    return rows * cols;
  }
}
