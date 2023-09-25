<template>
  <div id="app">
    <nav>
      <router-link class="a" to="/">Home</router-link>
      <router-link class="a" to="/RouterView">Router</router-link>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Styling for the navigation menu */
nav {
    max-width: 500px;
    border: 1px solid #ddd;
    padding: 12px;
    background: #2d2c2c;
    box-shadow: 0 0 10px #e9a112;

    display: flex;
    justify-content: center;
    margin: 20px auto;
}

/* Styling for navigation links */
.a {
    text-decoration: none;
    color: #ff8e1e; /* Link color */
    font-weight: bold;
    margin: 0 10px;
    transition: color 0.3s ease;
    margin: 0 10px;
    font-size: large;
}

/* Styling for navigation links on hover */
nav a:hover {
    color: white; /* Change color on hover */
}

</style>
