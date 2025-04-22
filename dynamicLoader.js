window.addEventListener('DOMContentLoaded', async () => {
  const loadHTML = async (path, targetId) => {
    try {
      const res = await fetch(path);
      const html = await res.text();
      document.getElementById(targetId).innerHTML = html;
    } catch (err) {
      console.error(`Failed to load ${path}:`, err);
    }
  };

  await loadHTML('/nav/nav.html', 'nav-placeholder');
  await loadHTML('/footer/footer.html', 'footer-placeholder');

});
