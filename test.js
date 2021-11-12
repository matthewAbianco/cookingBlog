


















<div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
  <% if(typeof categoryById !== 'undefined' && categoryById.length > 0) { %>
    <% categoryById.forEach(function(recipe, index){ %>
    <a href="/recipe/<%= recipe._id %>" class="col text-center category__link">
      <div class="category__img category__img--large shadow">
        <img src="/uploads/<%= recipe.image %>" alt="<%= recipe.name %>" loading="lazy">
      </div>
      <div class="pt-1"><%= recipe.name %></div>
    </a>
    <% }) %>
  <% } else { %>
    <p>No items found.</p>
  <% } %>
</div>