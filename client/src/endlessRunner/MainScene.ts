import { get } from "svelte/store";
import nft from "../store/nft";
import * as Phaser from "phaser";

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

class MainScene extends Phaser.Scene {
  private player: Phaser.GameObjects.Sprite;
  private background: Phaser.GameObjects.TileSprite;
  private obstacles: Phaser.GameObjects.Group;

  constructor() {
    super("Game");
  }
  preload() {
    this.load.image("background", "bg.gif");
    this.load.image("player", get(nft).image);
    this.load.image("obstacle", "badguy.png");
  }

  initPlayer() {
    const offset = getOffset(document.getElementById("game"));
    this.player = this.physics.add.sprite(
      offset.left - 100,
      offset.top + 250,
      "player"
    );
    this.player.body.gameObject.setGravityY(900);
    this.player.setScale(0.2, 0.2);
    this.physics.add.existing(this.player);
  }

  create() {
    this.background = this.add.tileSprite(400, 300, 800, 600, "background");
    this.initPlayer();

    this.obstacles = this.add.group({
      defaultKey: "obstacle",
      maxSize: 10,
    });

    this.physics.add.collider(
      this.player,
      this.obstacles,
      this.hitObstacle,
      null,
      this
    );
  }

  hitObstacle() {
    this.physics.pause();
    this.player.setTint(0xff0000);
  }

  update() {
    this.background.tilePositionX += 5;
    if (Math.random() < 0.05) {
      const offset = getOffset(document.getElementById("game"));
      this.obstacles.create(offset.left + 300, offset.top + 250);
    }
  }
}

export default MainScene;
