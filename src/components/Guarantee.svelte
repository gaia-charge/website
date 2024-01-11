<script>
  export let image;
  export let title;
  export let description;
</script>

<div>
  <img src={image} alt={title} />
  <h3>{title}</h3>
  <p>{description}</p>
</div>
