import PanelPlacer from "./PanelPlacer";

export default class TrapezeRoofPlacer extends PanelPlacer {
  drawRoof() {}

  placePanels() {
    const ctx = this.ctx;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(3, 0);
    ctx.lineTo(3 / 2, 3);
    ctx.lineTo(0, 3);
    ctx.closePath();
    ctx.fill();
  }
}
