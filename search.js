document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Biar nggak reload halaman

    const keyword = document.getElementById('searchInput').value.toLowerCase();
    const bodyText = document.body.innerText.toLowerCase();

    if (keyword && bodyText.includes(keyword)) {
      const selection = window.find(keyword);
      if (!selection) {
        alert("Kata ditemukan tapi tidak bisa di-scroll otomatis. Scroll manual ya 😅");
      }
    } else {
      alert("Kata tidak ditemukan di halaman ini 😥");
    }
  });