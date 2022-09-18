<template>
  <div id="usp-container">
    <div id="card-container">
      <div id="column-one">
        <img
          src="https://cdn-icons-png.flaticon.com/128/628/628576.png"
          alt="free"
        />
      </div>
      <div id="column-two">
        <h2>Free Cancellation</h2>
        <p>Enjoy peace of mind, cancel upto 24 hours before for free.</p>
      </div>
    </div>
    <div id="card-container">
      <div id="column-one">
        <img
          src="https://cdn-icons-png.flaticon.com/128/628/628576.png"
          alt="free"
        />
      </div>
      <div id="column-two">
        <h2>Free Cancellation</h2>
        <p>Enjoy peace of mind, cancel upto 24 hours before for free.</p>
      </div>
    </div>
    <div id="card-container">
      <div id="column-one">
        <img
          src="https://cdn-icons-png.flaticon.com/128/628/628576.png"
          alt="free"
        />
      </div>
      <div id="column-two">
        <h2>Free Cancellation</h2>
        <p>Enjoy peace of mind, cancel upto 24 hours before for free.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  padding: 20px;
}

#usp-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 5%;
  background: whitesmoke;
}

#card-container {
  display: flex;
  /* width: 300px; */
}

#column-one {
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

#column-two {
  display: flex;
  flex-direction: column;
  text-align: left;
}
</style>
