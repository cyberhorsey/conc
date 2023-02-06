<script lang="ts">
  import { Chart } from "chart.js/auto";
  import { onMount } from "svelte";
  import rarities from "../info/rarities";

  let chartType: string = "hoodie";
  let chart;

  onMount(() => {
    drawChart(chartType);
  });

  function drawChart(r: string) {
    if (chart) chart.destroy();
    const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    var ctx = canvas.getContext("2d");
    const plugin = {
      id: "customCanvasBackgroundColor",
      beforeDraw: (chart, args, options) => {
        const { ctx } = chart;
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = options.color || "#99ffff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      },
    };
    var config = {
      type: "bar",
      options: {
        chartArea: {
          backgroundColor: "rgba(255, 255, 255, 1)",
        },
        plugins: {
          customCanvasBackgroundColor: {
            color: "white",
          },
        },
      },
      plugins: [plugin],
      data: {
        labels: Object.keys(rarities[r]),
        datasets: [
          {
            label: "LFG",
            data: rarities[r],
            backgroundColor: "#123456",
          },
        ],
      },
    };

    chart = new Chart(ctx, config);
  }
</script>

<div style="position: relative; height:40rem; width:40rem">
  <div class="tabs">
    {#each Object.keys(rarities) as r}
      <a
        on:click={() => {
          chartType = r;
          drawChart(r);
        }}
        class="tab tab-bordered block {chartType === r ? 'tab-active' : ''}"
        >{r}</a
      >
    {/each}
  </div>

  <canvas style="background-color: #000000;" id="canvas" />
</div>
