<script>
  export let image;
  export let title;
  export let description;
</script>

<div class="card flex flex-col">
  <div class="image flex">
    <img src={image} alt={title} />
  </div>
  <h3 class="title content-end">{title}</h3>
  <p class="sub-title">{description}</p>
</div>

<style lang="postcss">
  .image {
    height: calc(150 / var(--ratio));
  }
  .title {
    font-size: calc(21 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    font-weight: 500;
    padding: calc(5 / var(--ratio)) 0;
  }
  .sub-title {
    font-size: calc(18 / var(--ratio));
    line-height: calc(28 / var(--ratio));
    font-weight: 400;
  }
  .card {
    background-color: white;
    padding: calc(40 / var(--ratio)) calc(29 / var(--ratio));
    min-width: calc(334 / var(--ratio));
    min-height: calc(390 / var(--ratio));
    border-radius: 20px;
    scroll-snap-align: start;
  }
</style>
