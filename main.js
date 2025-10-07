// ========== Menu filtering ==========
function filterMenu(category) {
  const items = document.querySelectorAll('.menu .item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// ========== Modal logic ==========
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Close modals when clicking outside content
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

// ========== Contact form validation / feedback ==========
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return false;
  }
  // Here you’d typically send the form via AJAX or to a backend.
  // For now, simulate success:
  document.getElementById('formSuccess').classList.remove('hidden');
  // Optionally clear fields:
  document.getElementById('contactForm').reset();
  return false; // prevents page reload
}
