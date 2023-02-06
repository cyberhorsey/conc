<script lang="ts">
  import { onMount } from "svelte";
  import Game from "../endlessRunner/Game";
  import MainScene from "../endlessRunner/MainScene";
  onMount(() => {
    const gameConfig: Phaser.Types.Core.GameConfig = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: document.getElementById("game"),
      scene: [MainScene],
      physics: {
        default: "arcade",
      },
    };
    Game(gameConfig);
  });
</script>

<div id="game" />
